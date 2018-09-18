FROM jkilbride/node-npm-alpine:8

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY . .
