FROM node:16-alpine

RUN apk add --no-cache bash


WORKDIR /home/node/app
RUN chown -R 1000:1000 /home/node/app 
RUN chown -R 1000:1000 /usr/local/lib/node_modules
RUN chown -R 1000:1000 /usr/local/bin
USER 1000:1000

COPY ./package.json /home/node/app
RUN npm i -g @nestjs/cli@7.4.1

RUN yarn 

COPY . .

RUN yarn build

CMD ["yarn", "run", "start:dev"]


