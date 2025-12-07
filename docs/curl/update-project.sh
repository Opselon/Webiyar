#!/usr/bin/env bash
# Update project fields (backend)
slug="portfolio-sample"
payload='{
  "summary": "نسخه به‌روزشده با بهبود سرعت و طراحی ریسپانسیو",
  "status": "draft",
  "featured": false
}'

curl -s -X PUT "http://localhost:8787/api/projects/${slug}" \
  -H "Content-Type: application/json" \
  -d "$payload" | jq
