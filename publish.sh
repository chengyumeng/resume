npm install;
npm run build;
git add dist --force;
git commit -m "build page";
git subtree push --prefix dist/resume origin gh-pages;
