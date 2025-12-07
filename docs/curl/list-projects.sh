#!/usr/bin/env bash
# List latest projects (public/front)
curl -s http://localhost:8787/api/projects | jq
