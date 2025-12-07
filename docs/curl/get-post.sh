#!/usr/bin/env bash
ID_OR_SLUG=${1:-technical-seo}
curl -s http://localhost:8787/api/posts/${ID_OR_SLUG} | jq .
