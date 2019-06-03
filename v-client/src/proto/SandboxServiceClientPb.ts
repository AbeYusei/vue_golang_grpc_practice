/**
 * @fileoverview gRPC-Web generated client stub for sandbox
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  getLibraryNameParam,
  libraryName} from './sandbox_pb';

export class getLibralyNameServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfogetLibralyName = new grpcWeb.AbstractClientBase.MethodInfo(
    libraryName,
    (request: getLibraryNameParam) => {
      return request.serializeBinary();
    },
    libraryName.deserializeBinary
  );

  getLibralyName(
    request: getLibraryNameParam,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: libraryName) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/sandbox.getLibralyNameService/getLibralyName',
      request,
      metadata || {},
      this.methodInfogetLibralyName,
      callback);
  }

}

