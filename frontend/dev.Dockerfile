FROM node:21-alpine

WORKDIR /app

ADD package.json pnpm-lock.yaml ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN pnpm install

ADD .eslintrc.cjs .prettierrc.json 

CMD [ "pnpm", "dev" ]
