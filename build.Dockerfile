FROM node:16 AS builder

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY public public
COPY src src
RUN npm run build

FROM nginx:1.21.3
COPY --from=builder /app/build /usr/share/nginx/html