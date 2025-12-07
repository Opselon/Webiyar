#!/usr/bin/env bash
curl -s -X POST http://localhost:8787/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "technical-seo",
    "title": "سئو تکنیکال روی کلادفلر",
    "body": "محتوای JSON برای سئو تکنیکال...",
    "excerpt": "چک‌لیست سئو برای Workers",
    "locale": "fa",
    "status": "draft",
    "tags": ["seo", "cloudflare", "workers"]
  }' | jq .
