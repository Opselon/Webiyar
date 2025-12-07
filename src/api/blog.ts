export type PostInput = {
  slug: string;
  title: string;
  body: string;
  excerpt?: string;
  locale?: string;
  status?: 'draft' | 'published';
  tags?: string[];
};

export async function listPosts(db: D1Database) {
  const { results } = await db
    .prepare(
      `SELECT id, slug, title, status, locale, tags, created_at, updated_at
       FROM posts
       ORDER BY updated_at DESC
       LIMIT 100`,
    )
    .all();
  return results;
}

export async function getPost(db: D1Database, idOrSlug: string) {
  const { results } = await db
    .prepare(
      `SELECT id, slug, title, body, excerpt, status, locale, tags, created_at, updated_at
       FROM posts
       WHERE id = ? OR slug = ?
       LIMIT 1`,
    )
    .bind(idOrSlug, idOrSlug)
    .all();
  return results?.[0] ?? null;
}

export async function createPost(db: D1Database, payload: PostInput) {
  const tags = payload.tags ? JSON.stringify(payload.tags) : null;
  const { results } = await db
    .prepare(
      `INSERT INTO posts (slug, title, body, excerpt, locale, status, tags)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       RETURNING id, slug, title, status, locale, tags, created_at, updated_at`,
    )
    .bind(
      payload.slug,
      payload.title,
      payload.body,
      payload.excerpt || '',
      payload.locale || 'fa',
      payload.status || 'draft',
      tags,
    )
    .all();
  return results?.[0] ?? null;
}

export async function updatePost(db: D1Database, idOrSlug: string, payload: Partial<PostInput>) {
  const tags = payload.tags ? JSON.stringify(payload.tags) : null;
  await db
    .prepare(
      `UPDATE posts
       SET
        slug = COALESCE(?, slug),
        title = COALESCE(?, title),
        body = COALESCE(?, body),
        excerpt = COALESCE(?, excerpt),
        locale = COALESCE(?, locale),
        status = COALESCE(?, status),
        tags = COALESCE(?, tags),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = ? OR slug = ?`,
    )
    .bind(
      payload.slug ?? null,
      payload.title ?? null,
      payload.body ?? null,
      payload.excerpt ?? null,
      payload.locale ?? null,
      payload.status ?? null,
      tags,
      idOrSlug,
      idOrSlug,
    )
    .run();

  return getPost(db, idOrSlug);
}

export async function deletePost(db: D1Database, idOrSlug: string) {
  const { success } = await db.prepare(`DELETE FROM posts WHERE id = ? OR slug = ?`).bind(idOrSlug, idOrSlug).run();
  return success;
}

export function requireJson(req: Request) {
  const contentType = req.headers.get('content-type') || '';
  return contentType.includes('application/json');
}

export async function parseBody<T>(req: Request): Promise<T> {
  return (await req.json()) as T;
}

export function errorResponse(message: string, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export function okResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify({ data }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
