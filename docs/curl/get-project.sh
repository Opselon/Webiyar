#!/usr/bin/env bash
# Fetch single project by slug or id (public/front)
slug="portfolio-sample"
curl -s "http://localhost:8787/api/projects/${slug}" | jq
