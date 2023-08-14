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

export class NewSale extends ethereum.Event {
  get params(): NewSale__Params {
    return new NewSale__Params(this);
  }
}

export class NewSale__Params {
  _event: NewSale;

  constructor(event: NewSale) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get clone(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get config(): NewSaleConfigStruct {
    return changetype<NewSaleConfigStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }

  get baseCurrency(): string {
    return this._event.parameters[3].value.toString();
  }

  get nativeOracle(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get nativePaymentsEnabled(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class NewSaleConfigStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get merkleRoot(): Bytes {
    return this[1].toBytes();
  }

  get saleMaximum(): BigInt {
    return this[2].toBigInt();
  }

  get userMaximum(): BigInt {
    return this[3].toBigInt();
  }

  get purchaseMinimum(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get endTime(): BigInt {
    return this[6].toBigInt();
  }

  get maxQueueTime(): BigInt {
    return this[7].toBigInt();
  }

  get URI(): string {
    return this[8].toString();
  }
}

export class FlatPriceSaleFactory__newSaleInput_configStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get merkleRoot(): Bytes {
    return this[1].toBytes();
  }

  get saleMaximum(): BigInt {
    return this[2].toBigInt();
  }

  get userMaximum(): BigInt {
    return this[3].toBigInt();
  }

  get purchaseMinimum(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get endTime(): BigInt {
    return this[6].toBigInt();
  }

  get maxQueueTime(): BigInt {
    return this[7].toBigInt();
  }

  get URI(): string {
    return this[8].toString();
  }
}

export class FlatPriceSaleFactory extends ethereum.SmartContract {
  static bind(address: Address): FlatPriceSaleFactory {
    return new FlatPriceSaleFactory("FlatPriceSaleFactory", address);
  }

  VERSION(): string {
    let result = super.call("VERSION", "VERSION():(string)", []);

    return result[0].toString();
  }

  try_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall("VERSION", "VERSION():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newSale(
    _owner: Address,
    _config: FlatPriceSaleFactory__newSaleInput_configStruct,
    _baseCurrency: string,
    _nativePaymentsEnabled: boolean,
    _nativeTokenPriceOracle: Address,
    tokens: Array<Address>,
    oracles: Array<Address>,
    decimals: Array<i32>
  ): Address {
    let result = super.call(
      "newSale",
      "newSale(address,(address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,string),string,bool,address,address[],address[],uint8[]):(address)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromTuple(_config),
        ethereum.Value.fromString(_baseCurrency),
        ethereum.Value.fromBoolean(_nativePaymentsEnabled),
        ethereum.Value.fromAddress(_nativeTokenPriceOracle),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromAddressArray(oracles),
        ethereum.Value.fromI32Array(decimals)
      ]
    );

    return result[0].toAddress();
  }

  try_newSale(
    _owner: Address,
    _config: FlatPriceSaleFactory__newSaleInput_configStruct,
    _baseCurrency: string,
    _nativePaymentsEnabled: boolean,
    _nativeTokenPriceOracle: Address,
    tokens: Array<Address>,
    oracles: Array<Address>,
    decimals: Array<i32>
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newSale",
      "newSale(address,(address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,string),string,bool,address,address[],address[],uint8[]):(address)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromTuple(_config),
        ethereum.Value.fromString(_baseCurrency),
        ethereum.Value.fromBoolean(_nativePaymentsEnabled),
        ethereum.Value.fromAddress(_nativeTokenPriceOracle),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromAddressArray(oracles),
        ethereum.Value.fromI32Array(decimals)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class NewSaleCall extends ethereum.Call {
  get inputs(): NewSaleCall__Inputs {
    return new NewSaleCall__Inputs(this);
  }

  get outputs(): NewSaleCall__Outputs {
    return new NewSaleCall__Outputs(this);
  }
}

export class NewSaleCall__Inputs {
  _call: NewSaleCall;

  constructor(call: NewSaleCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _config(): NewSaleCall_configStruct {
    return changetype<NewSaleCall_configStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get _baseCurrency(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _nativePaymentsEnabled(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _nativeTokenPriceOracle(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[5].value.toAddressArray();
  }

  get oracles(): Array<Address> {
    return this._call.inputValues[6].value.toAddressArray();
  }

  get decimals(): Array<i32> {
    return this._call.inputValues[7].value.toI32Array();
  }
}

export class NewSaleCall__Outputs {
  _call: NewSaleCall;

  constructor(call: NewSaleCall) {
    this._call = call;
  }

  get sale(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class NewSaleCall_configStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get merkleRoot(): Bytes {
    return this[1].toBytes();
  }

  get saleMaximum(): BigInt {
    return this[2].toBigInt();
  }

  get userMaximum(): BigInt {
    return this[3].toBigInt();
  }

  get purchaseMinimum(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get endTime(): BigInt {
    return this[6].toBigInt();
  }

  get maxQueueTime(): BigInt {
    return this[7].toBigInt();
  }

  get URI(): string {
    return this[8].toString();
  }
}
