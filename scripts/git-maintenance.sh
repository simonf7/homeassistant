#!/usr/bin/env bash
set -eu

config_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
lock_dir="$config_dir/.git-maintenance.lock"

if ! mkdir "$lock_dir" 2>/dev/null; then
  echo "Git maintenance is already running."
  exit 0
fi
trap 'rmdir "$lock_dir"' EXIT

if [ ! -d "$config_dir/.git" ]; then
  echo "Git repository not found: $config_dir/.git" >&2
  exit 1
fi

git -C "$config_dir" gc --prune=now --quiet
echo "Git maintenance completed."
