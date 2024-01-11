FROM node:18.17.0-slim as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

FROM node:18.17.0-slim

WORKDIR /app

# build 폴더 복사 , 다른 phase 에서 가져옴
COPY --from=builder /app/build ./builder
RUN npm install -g serve

CMD ["serve", "-s", "build"]
