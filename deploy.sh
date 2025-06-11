cd Basic-project-on-next.js
git pull origin main
npm install
npm run build
pm2 start npm --name "next-app" -- run start