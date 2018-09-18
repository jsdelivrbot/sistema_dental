FROM resinci/npm-x86_64-ubuntu-node8

WORKDIR /usr/app/client

COPY package.json .

EXPOSE 4200

RUN npm install

COPY . .
