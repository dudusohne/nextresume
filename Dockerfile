FROM node:16.14.2 as build-stage

WORKDIR /usr/

COPY . ./
RUN yarn
RUN yarn build

FROM bitnami/nginx:1.17

COPY --from=build-stage /usr/dist/ /opt/bitnami/nginx/html
COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf
