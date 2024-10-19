// package: order
// file: order.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as kitchen_pb from "./kitchen_pb";

export class OrderID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderID.AsObject;
  static toObject(includeInstance: boolean, msg: OrderID): OrderID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderID;
  static deserializeBinaryFromReader(message: OrderID, reader: jspb.BinaryReader): OrderID;
}

export namespace OrderID {
  export type AsObject = {
    id: number,
  }
}

export class Order extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMeal(): boolean;
  clearMeal(): void;
  getMeal(): kitchen_pb.Recipe | undefined;
  setMeal(value?: kitchen_pb.Recipe): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: number,
    meal?: kitchen_pb.Recipe.AsObject,
  }
}

export class OrderList extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<kitchen_pb.Recipe>;
  setOrdersList(value: Array<kitchen_pb.Recipe>): void;
  addOrders(value?: kitchen_pb.Recipe, index?: number): kitchen_pb.Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderList.AsObject;
  static toObject(includeInstance: boolean, msg: OrderList): OrderList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderList;
  static deserializeBinaryFromReader(message: OrderList, reader: jspb.BinaryReader): OrderList;
}

export namespace OrderList {
  export type AsObject = {
    ordersList: Array<kitchen_pb.Recipe.AsObject>,
  }
}

