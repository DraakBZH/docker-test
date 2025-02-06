FROM node:22-alpine

RUN mkdir /home/node/app
RUN mkdir /home/node/app/public

WORKDIR /home/node/app

COPY server.js ./
COPY public ./public/
COPY package.json ./

RUN npm install


CMD ["node", "server.js"]
