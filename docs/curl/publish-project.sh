#!/usr/bin/env bash
# Publish a project (backend quick toggle)
slug="portfolio-sample"
curl -s -X POST "http://localhost:8787/api/projects/${slug}/publish" | jq
