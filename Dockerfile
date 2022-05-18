FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml /usr/src/app/

RUN RUN npm i -g pnpm --registry=https://registry.npm.taobao.org

RUN pnpm install --shamefully-hoist

RUN pnpm run build

COPY ./.output /usr/src/app/.output

EXPOSE 9000

ENTRYPOINT ["pnpm", "run", "start"]