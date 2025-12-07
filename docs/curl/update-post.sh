#!/usr/bin/env bash
ID_OR_SLUG=${1:-technical-seo}
curl -s -X PUT http://localhost:8787/api/posts/${ID_OR_SLUG} \
  -H "Content-Type: application/json" \
  -d '{
    "status": "published",
    "excerpt": "نسخه نهایی برای انتشار",
    "tags": ["seo", "technical"]
  }' | jq .
