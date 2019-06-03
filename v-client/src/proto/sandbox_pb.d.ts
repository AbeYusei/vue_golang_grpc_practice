import * as jspb from "google-protobuf"

export class getLibraryNameParam extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): getLibraryNameParam.AsObject;
  static toObject(includeInstance: boolean, msg: getLibraryNameParam): getLibraryNameParam.AsObject;
  static serializeBinaryToWriter(message: getLibraryNameParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): getLibraryNameParam;
  static deserializeBinaryFromReader(message: getLibraryNameParam, reader: jspb.BinaryReader): getLibraryNameParam;
}

export namespace getLibraryNameParam {
  export type AsObject = {
  }
}

export class libraryName extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): libraryName.AsObject;
  static toObject(includeInstance: boolean, msg: libraryName): libraryName.AsObject;
  static serializeBinaryToWriter(message: libraryName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): libraryName;
  static deserializeBinaryFromReader(message: libraryName, reader: jspb.BinaryReader): libraryName;
}

export namespace libraryName {
  export type AsObject = {
    name: string,
  }
}

