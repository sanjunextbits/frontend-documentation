#!/usr/bin/env sh
open https://sanjunextbits.github.io/frontend-documentation/
# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/sanjunextbits/frontend-documentation.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/sanjunextbits/frontend-documentation.git master:gh-pages
# git push -f git@github.com:sanjunextbits/frontend-documentation.git master:gh-pages
cd -
