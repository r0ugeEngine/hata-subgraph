// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ListingAccepted extends ethereum.Event {
  get params(): ListingAccepted__Params {
    return new ListingAccepted__Params(this);
  }
}

export class ListingAccepted__Params {
  _event: ListingAccepted;

  constructor(event: ListingAccepted) {
    this._event = event;
  }

  get _propertyID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _tenant(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _rentStart(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _rentUntil(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ListingCreated extends ethereum.Event {
  get params(): ListingCreated__Params {
    return new ListingCreated__Params(this);
  }
}

export class ListingCreated__Params {
  _event: ListingCreated;

  constructor(event: ListingCreated) {
    this._event = event;
  }

  get _propertyID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _payment(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class Marketplace__getListingResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get payment(): i32 {
    return this[1].toI32();
  }

  get status(): i32 {
    return this[2].toI32();
  }

  get tenant(): Address {
    return this[3].toAddress();
  }

  get rentStart(): BigInt {
    return this[4].toBigInt();
  }

  get rentFinish(): BigInt {
    return this[5].toBigInt();
  }

  get isNative(): boolean {
    return this[6].toBoolean();
  }
}

export class Marketplace__getListingWithDataResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get payment(): i32 {
    return this[1].toI32();
  }

  get status(): i32 {
    return this[2].toI32();
  }

  get tenant(): Address {
    return this[3].toAddress();
  }

  get rentStart(): BigInt {
    return this[4].toBigInt();
  }

  get rentFinish(): BigInt {
    return this[5].toBigInt();
  }

  get isNative(): boolean {
    return this[6].toBoolean();
  }
}

export class Marketplace__getListingWithDataResultValue1Struct extends ethereum.Tuple {
  get propertyID(): Bytes {
    return this[0].toBytes();
  }

  get location(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get landlord(): Address {
    return this[3].toAddress();
  }

  get area(): i32 {
    return this[4].toI32();
  }

  get previewCID(): string {
    return this[5].toString();
  }

  get folderCID(): string {
    return this[6].toString();
  }
}

export class Marketplace__getListingWithDataResult {
  value0: Marketplace__getListingWithDataResultValue0Struct;
  value1: Marketplace__getListingWithDataResultValue1Struct;

  constructor(
    value0: Marketplace__getListingWithDataResultValue0Struct,
    value1: Marketplace__getListingWithDataResultValue1Struct
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    return map;
  }

  getValue0(): Marketplace__getListingWithDataResultValue0Struct {
    return this.value0;
  }

  getValue1(): Marketplace__getListingWithDataResultValue1Struct {
    return this.value1;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  getActiveProperty(): Array<Bytes> {
    let result = super.call(
      "getActiveProperty",
      "getActiveProperty():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getActiveProperty(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getActiveProperty",
      "getActiveProperty():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getListing(_propertyID: Bytes): Marketplace__getListingResultValue0Struct {
    let result = super.call(
      "getListing",
      "getListing(bytes32):((uint256,uint8,uint8,address,uint256,uint256,bool))",
      [ethereum.Value.fromFixedBytes(_propertyID)]
    );

    return changetype<Marketplace__getListingResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListing(
    _propertyID: Bytes
  ): ethereum.CallResult<Marketplace__getListingResultValue0Struct> {
    let result = super.tryCall(
      "getListing",
      "getListing(bytes32):((uint256,uint8,uint8,address,uint256,uint256,bool))",
      [ethereum.Value.fromFixedBytes(_propertyID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Marketplace__getListingResultValue0Struct>(value[0].toTuple())
    );
  }

  getListingWithData(
    _propertyID: Bytes
  ): Marketplace__getListingWithDataResult {
    let result = super.call(
      "getListingWithData",
      "getListingWithData(bytes32):((uint256,uint8,uint8,address,uint256,uint256,bool),(bytes32,string,string,address,uint16,string,string))",
      [ethereum.Value.fromFixedBytes(_propertyID)]
    );

    return changetype<Marketplace__getListingWithDataResult>(
      new Marketplace__getListingWithDataResult(
        changetype<Marketplace__getListingWithDataResultValue0Struct>(
          result[0].toTuple()
        ),
        changetype<Marketplace__getListingWithDataResultValue1Struct>(
          result[1].toTuple()
        )
      )
    );
  }

  try_getListingWithData(
    _propertyID: Bytes
  ): ethereum.CallResult<Marketplace__getListingWithDataResult> {
    let result = super.tryCall(
      "getListingWithData",
      "getListingWithData(bytes32):((uint256,uint8,uint8,address,uint256,uint256,bool),(bytes32,string,string,address,uint16,string,string))",
      [ethereum.Value.fromFixedBytes(_propertyID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Marketplace__getListingWithDataResult>(
        new Marketplace__getListingWithDataResult(
          changetype<Marketplace__getListingWithDataResultValue0Struct>(
            value[0].toTuple()
          ),
          changetype<Marketplace__getListingWithDataResultValue1Struct>(
            value[1].toTuple()
          )
        )
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _registry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptListingCall extends ethereum.Call {
  get inputs(): AcceptListingCall__Inputs {
    return new AcceptListingCall__Inputs(this);
  }

  get outputs(): AcceptListingCall__Outputs {
    return new AcceptListingCall__Outputs(this);
  }
}

export class AcceptListingCall__Inputs {
  _call: AcceptListingCall;

  constructor(call: AcceptListingCall) {
    this._call = call;
  }

  get _propertyID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _tenant(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rentStart(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _rentFinish(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AcceptListingCall__Outputs {
  _call: AcceptListingCall;

  constructor(call: AcceptListingCall) {
    this._call = call;
  }
}

export class CreateListingCall extends ethereum.Call {
  get inputs(): CreateListingCall__Inputs {
    return new CreateListingCall__Inputs(this);
  }

  get outputs(): CreateListingCall__Outputs {
    return new CreateListingCall__Outputs(this);
  }
}

export class CreateListingCall__Inputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }

  get _propertyID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _payment(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _isNative(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CreateListingCall__Outputs {
  _call: CreateListingCall;

  constructor(call: CreateListingCall) {
    this._call = call;
  }
}

export class FinishListingCall extends ethereum.Call {
  get inputs(): FinishListingCall__Inputs {
    return new FinishListingCall__Inputs(this);
  }

  get outputs(): FinishListingCall__Outputs {
    return new FinishListingCall__Outputs(this);
  }
}

export class FinishListingCall__Inputs {
  _call: FinishListingCall;

  constructor(call: FinishListingCall) {
    this._call = call;
  }

  get _propertyID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class FinishListingCall__Outputs {
  _call: FinishListingCall;

  constructor(call: FinishListingCall) {
    this._call = call;
  }
}
