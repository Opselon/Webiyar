#!/usr/bin/env bash
# Create a new project (backend)
payload='{
  "slug": "portfolio-sample",
  "title": "طراحی سایت شرکتی مدرن",
  "summary": "لندینگ مینیمال با سئوی تکنیکال کامل",
  "category": "web-design",
  "link": "https://example.com",
  "thumbnail": "https://placehold.co/800x600",
  "tags": ["corporate", "seo"],
  "status": "draft",
  "featured": true
}'

curl -s -X POST http://localhost:8787/api/projects \
  -H "Content-Type: application/json" \
  -d "$payload" | jq
