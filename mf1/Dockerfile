FROM node:lts-buster as build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:mainline-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage \
    /app/dist \
    /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]