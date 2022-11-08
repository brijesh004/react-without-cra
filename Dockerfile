FROM node:14-alpine

WORKDIR /app

COPY package.json ./app

RUN npm install && npm install -g serve

COPY . .

RUN npm run build

CMD ["serve","-s","dist"]