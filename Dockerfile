FROM node:latest AS static_build

RUN mkdir /build
WORKDIR /build

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM nginx:stable

COPY --from=static_build /build/public /static
RUN mkdir /certs
