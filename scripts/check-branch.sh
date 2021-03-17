#!/usr/bin/env bash

# This script throws an error when we try to execute "yarn version" while not being on "main" branch.

current_branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$current_branch" != "main" ]]; then
  echo "The current branch is \"${current_branch}\". Please switch to main branch before issuing a new version."
  exit 1
fi

echo "The current branch is \"$current_branch\". Issuing a new version."
