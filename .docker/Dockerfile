# FROM node:14.17-alpine
FROM node:16-alpine

RUN apk update
RUN apk add curl

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /usr/src/app
USER node