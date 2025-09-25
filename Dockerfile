# Base stage for building the static files
FROM node:lts AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage for serving the application
# stable nginx with brotli module, without SSL or HTTP/3 etc.
# brotli compression and brotli_static are enabled by default in nginx config
# file used by fholzer/nginx-brotli.
# cf. https://github.com/fholzer/docker-nginx-brotli/tree/master
FROM docker.io/fholzer/nginx-brotli:latest AS runtime
COPY --from=base ./app/dist /usr/share/nginx/html
EXPOSE 80
