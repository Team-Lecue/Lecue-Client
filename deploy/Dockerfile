FROM node:18.17.0-slim as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]
