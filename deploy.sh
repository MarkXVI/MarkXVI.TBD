#!/usr/bin/env sh

# abort on errors
set -e

git checkout -B dist

# build
npm run build

touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -f ./dist .nojekyll
git commit -m 'deploy'
git push -f origin dist

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git checkout main