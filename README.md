1. npm init -y
2. npm install typescript --save-dev
3. npm install express --save
4. npx tsc --init
5. npm install typescript -g
6. npm install @types/express --save-dev
7. npm install @types/node --save-dev
8. npm install ts-node-dev --save-dev
9. Open package.json, add > scripts: start: "node src/index.ts"
10. Open package.json, add > scripts: build: "tsc"


SEQUELIZE
npx sequelize-cli init

npx sequelize-cli model:generate --name Users --attributes username:string,password:string --underscored

npx sequelize-cli db:migrate