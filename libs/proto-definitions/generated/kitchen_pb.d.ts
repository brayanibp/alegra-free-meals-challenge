// package: kitchen
// file: kitchen.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as inventory_pb from "./inventory_pb";

export class RecipeID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeID.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeID): RecipeID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecipeID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeID;
  static deserializeBinaryFromReader(message: RecipeID, reader: jspb.BinaryReader): RecipeID;
}

export namespace RecipeID {
  export type AsObject = {
    id: number,
  }
}

export class Recipe extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearIngredientsList(): void;
  getIngredientsList(): Array<inventory_pb.Product>;
  setIngredientsList(value: Array<inventory_pb.Product>): void;
  addIngredients(value?: inventory_pb.Product, index?: number): inventory_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    id: number,
    name: string,
    ingredientsList: Array<inventory_pb.Product.AsObject>,
  }
}

export class RecipesList extends jspb.Message {
  clearRecipesList(): void;
  getRecipesList(): Array<RecipesList>;
  setRecipesList(value: Array<RecipesList>): void;
  addRecipes(value?: RecipesList, index?: number): RecipesList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipesList.AsObject;
  static toObject(includeInstance: boolean, msg: RecipesList): RecipesList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecipesList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipesList;
  static deserializeBinaryFromReader(message: RecipesList, reader: jspb.BinaryReader): RecipesList;
}

export namespace RecipesList {
  export type AsObject = {
    recipesList: Array<RecipesList.AsObject>,
  }
}

export class KitchenOrder extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Recipe | undefined;
  setOrder(value?: Recipe): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getCompletedAt(): string;
  setCompletedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KitchenOrder.AsObject;
  static toObject(includeInstance: boolean, msg: KitchenOrder): KitchenOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KitchenOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KitchenOrder;
  static deserializeBinaryFromReader(message: KitchenOrder, reader: jspb.BinaryReader): KitchenOrder;
}

export namespace KitchenOrder {
  export type AsObject = {
    id: number,
    order?: Recipe.AsObject,
    createdAt: string,
    completedAt: string,
  }
}

export class Orders extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<KitchenOrder>;
  setOrdersList(value: Array<KitchenOrder>): void;
  addOrders(value?: KitchenOrder, index?: number): KitchenOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orders.AsObject;
  static toObject(includeInstance: boolean, msg: Orders): Orders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orders;
  static deserializeBinaryFromReader(message: Orders, reader: jspb.BinaryReader): Orders;
}

export namespace Orders {
  export type AsObject = {
    ordersList: Array<KitchenOrder.AsObject>,
  }
}

