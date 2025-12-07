#!/usr/bin/env bash
# Delete project (backend)
slug="portfolio-sample"
curl -s -X DELETE "http://localhost:8787/api/projects/${slug}" | jq
