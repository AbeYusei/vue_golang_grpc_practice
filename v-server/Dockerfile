FROM golang:1.12-alpine

ENV GO111MODULE=on

WORKDIR /go/src/v-server
COPY . .
RUN apk add --no-cache git \
  && go get -u github.com/pilu/fresh
# CMD ["fresh"]
EXPOSE 9999



# FROM golang:1.12-alpine as build

# ENV GO111MODULE=on

# WORKDIR /go/app

# COPY . .

# RUN apk add --no-cache git \
#  && go build -o app