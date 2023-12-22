# Fetching the latest node image on apline linux
FROM node:20.10-alpine3.19 AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /frontend/

COPY ./package.json /frontend
COPY ./yarn.lock /frontend

RUN npm install --include=dev

COPY . .
# Building our application

RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /frontend/dist /var/www/html/forntend

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf