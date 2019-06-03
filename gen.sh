#!bin/sh

CLIENT_OUTDIR=v-client/src/proto
SERVER_OUTPUT_DIR=v-server/sandbox

mkdir -p ${CLIENT_OUTDIR} ${SERVER_OUTPUT_DIR}

protoc --proto_path=proto sandbox.proto \
    --js_out=import_style=commonjs:${CLIENT_OUTDIR} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTDIR} \
    --go_out=plugins=grpc:${SERVER_OUTPUT_DIR}