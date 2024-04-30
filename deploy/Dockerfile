FROM node:18.17.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY ..

ENV NODE_OPTIONS=--max-old-space-size=2048

CMD ["yarn", "start"]
