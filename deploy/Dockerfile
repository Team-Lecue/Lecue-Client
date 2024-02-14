FROM node:18.17.0-slim

WORKDIR /app

RUN rm -rf node_modules

COPY package.json .
COPY yarn.lock .

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=16384

RUN yarn

COPY . .


CMD ["yarn", "start"]
