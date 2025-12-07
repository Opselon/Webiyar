export type ProjectInput = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  category?: string;
  link?: string;
  thumbnail?: string;
  locale?: string;
  status?: 'draft' | 'published';
  tags?: string[];
  featured?: boolean;
};

export async function listProjects(db: D1Database) {
  const { results } = await db
    .prepare(
      `SELECT id, slug, title, summary, category, thumbnail, link, locale, status, tags, featured, created_at, updated_at
       FROM projects
       ORDER BY featured DESC, updated_at DESC
       LIMIT 100`,
    )
    .all();
  return results;
}

export async function getProject(db: D1Database, idOrSlug: string) {
  const { results } = await db
    .prepare(
      `SELECT id, slug, title, summary, description, category, thumbnail, link, locale, status, tags, featured, created_at, updated_at
       FROM projects
       WHERE id = ? OR slug = ?
       LIMIT 1`,
    )
    .bind(idOrSlug, idOrSlug)
    .all();
  return results?.[0] ?? null;
}

export async function createProject(db: D1Database, payload: ProjectInput) {
  const tags = payload.tags ? JSON.stringify(payload.tags) : null;
  const featured = payload.featured ? 1 : 0;
  const { results } = await db
    .prepare(
      `INSERT INTO projects (slug, title, summary, description, category, thumbnail, link, locale, status, tags, featured)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       RETURNING id, slug, title, summary, category, thumbnail, link, locale, status, tags, featured, created_at, updated_at`,
    )
    .bind(
      payload.slug,
      payload.title,
      payload.summary,
      payload.description || '',
      payload.category || 'web',
      payload.thumbnail || '',
      payload.link || '',
      payload.locale || 'fa',
      payload.status || 'draft',
      tags,
      featured,
    )
    .all();
  return results?.[0] ?? null;
}

export async function updateProject(db: D1Database, idOrSlug: string, payload: Partial<ProjectInput>) {
  const tags = payload.tags ? JSON.stringify(payload.tags) : null;
  const featured = payload.featured == null ? null : payload.featured ? 1 : 0;
  await db
    .prepare(
      `UPDATE projects
       SET
        slug = COALESCE(?, slug),
        title = COALESCE(?, title),
        summary = COALESCE(?, summary),
        description = COALESCE(?, description),
        category = COALESCE(?, category),
        thumbnail = COALESCE(?, thumbnail),
        link = COALESCE(?, link),
        locale = COALESCE(?, locale),
        status = COALESCE(?, status),
        tags = COALESCE(?, tags),
        featured = COALESCE(?, featured),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = ? OR slug = ?`,
    )
    .bind(
      payload.slug ?? null,
      payload.title ?? null,
      payload.summary ?? null,
      payload.description ?? null,
      payload.category ?? null,
      payload.thumbnail ?? null,
      payload.link ?? null,
      payload.locale ?? null,
      payload.status ?? null,
      tags,
      featured,
      idOrSlug,
      idOrSlug,
    )
    .run();

  return getProject(db, idOrSlug);
}

export async function setProjectStatus(db: D1Database, idOrSlug: string, status: 'draft' | 'published') {
  await db
    .prepare(
      `UPDATE projects
       SET status = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ? OR slug = ?`,
    )
    .bind(status, idOrSlug, idOrSlug)
    .run();
  return getProject(db, idOrSlug);
}

export async function deleteProject(db: D1Database, idOrSlug: string) {
  const { success } = await db.prepare(`DELETE FROM projects WHERE id = ? OR slug = ?`).bind(idOrSlug, idOrSlug).run();
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
