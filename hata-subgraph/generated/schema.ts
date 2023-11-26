// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PriceUpdate extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PriceUpdate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type PriceUpdate must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PriceUpdate", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): PriceUpdate | null {
    return changetype<PriceUpdate | null>(
      store.get_in_block("PriceUpdate", id.toHexString())
    );
  }

  static load(id: Bytes): PriceUpdate | null {
    return changetype<PriceUpdate | null>(
      store.get("PriceUpdate", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class Property extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Property entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Property must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Property", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Property | null {
    return changetype<Property | null>(
      store.get_in_block("Property", id.toHexString())
    );
  }

  static load(id: Bytes): Property | null {
    return changetype<Property | null>(store.get("Property", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get landlord(): Bytes {
    let value = this.get("landlord");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set landlord(value: Bytes) {
    this.set("landlord", Value.fromBytes(value));
  }

  get propertyID(): Bytes {
    let value = this.get("propertyID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set propertyID(value: Bytes) {
    this.set("propertyID", Value.fromBytes(value));
  }

  get title(): string {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get area(): i32 {
    let value = this.get("area");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set area(value: i32) {
    this.set("area", Value.fromI32(value));
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (!value) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(<BigInt>value));
    }
  }
}
