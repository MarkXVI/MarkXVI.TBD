#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git checkout --orphan dist
git add -f dist/ .nojekyll
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com/MarkXVI/MarkXVI.github.io.git dist

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git checkout main
