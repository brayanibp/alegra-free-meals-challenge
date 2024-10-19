// package: inventory
// file: inventory.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ProductID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductID.AsObject;
  static toObject(includeInstance: boolean, msg: ProductID): ProductID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductID;
  static deserializeBinaryFromReader(message: ProductID, reader: jspb.BinaryReader): ProductID;
}

export namespace ProductID {
  export type AsObject = {
    id: number,
  }
}

export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: number,
    name: string,
    amount: number,
  }
}

export class Inventory extends jspb.Message {
  clearListList(): void;
  getListList(): Array<Product>;
  setListList(value: Array<Product>): void;
  addList(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Inventory.AsObject;
  static toObject(includeInstance: boolean, msg: Inventory): Inventory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Inventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Inventory;
  static deserializeBinaryFromReader(message: Inventory, reader: jspb.BinaryReader): Inventory;
}

export namespace Inventory {
  export type AsObject = {
    listList: Array<Product.AsObject>,
  }
}

export class InventoryHistoryPoint extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  clearListList(): void;
  getListList(): Array<Product>;
  setListList(value: Array<Product>): void;
  addList(value?: Product, index?: number): Product;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryHistoryPoint.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryHistoryPoint): InventoryHistoryPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InventoryHistoryPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryHistoryPoint;
  static deserializeBinaryFromReader(message: InventoryHistoryPoint, reader: jspb.BinaryReader): InventoryHistoryPoint;
}

export namespace InventoryHistoryPoint {
  export type AsObject = {
    id: number,
    listList: Array<Product.AsObject>,
    createdAt: string,
  }
}

export class InventoryHistory extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<InventoryHistoryPoint>;
  setHistoryList(value: Array<InventoryHistoryPoint>): void;
  addHistory(value?: InventoryHistoryPoint, index?: number): InventoryHistoryPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryHistory.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryHistory): InventoryHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InventoryHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryHistory;
  static deserializeBinaryFromReader(message: InventoryHistory, reader: jspb.BinaryReader): InventoryHistory;
}

export namespace InventoryHistory {
  export type AsObject = {
    historyList: Array<InventoryHistoryPoint.AsObject>,
  }
}

export class IsAvailable extends jspb.Message {
  getIsAvailable(): boolean;
  setIsAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAvailable.AsObject;
  static toObject(includeInstance: boolean, msg: IsAvailable): IsAvailable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsAvailable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAvailable;
  static deserializeBinaryFromReader(message: IsAvailable, reader: jspb.BinaryReader): IsAvailable;
}

export namespace IsAvailable {
  export type AsObject = {
    isAvailable: boolean,
  }
}

