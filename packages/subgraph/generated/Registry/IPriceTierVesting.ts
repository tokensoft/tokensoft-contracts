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

export class SetPriceTierConfig extends ethereum.Event {
  get params(): SetPriceTierConfig__Params {
    return new SetPriceTierConfig__Params(this);
  }
}

export class SetPriceTierConfig__Params {
  _event: SetPriceTierConfig;

  constructor(event: SetPriceTierConfig) {
    this._event = event;
  }

  get start(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get end(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get oracle(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tiers(): Array<SetPriceTierConfigTiersStruct> {
    return this._event.parameters[3].value.toTupleArray<
      SetPriceTierConfigTiersStruct
    >();
  }
}

export class SetPriceTierConfigTiersStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get vestedFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class IPriceTierVesting__getPriceTierResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get vestedFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class IPriceTierVesting__getPriceTiersResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get vestedFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class IPriceTierVesting extends ethereum.SmartContract {
  static bind(address: Address): IPriceTierVesting {
    return new IPriceTierVesting("IPriceTierVesting", address);
  }

  getEnd(): BigInt {
    let result = super.call("getEnd", "getEnd():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getEnd(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getEnd", "getEnd():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOracle(): Address {
    let result = super.call("getOracle", "getOracle():(address)", []);

    return result[0].toAddress();
  }

  try_getOracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOracle", "getOracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPriceTier(i: BigInt): IPriceTierVesting__getPriceTierResultValue0Struct {
    let result = super.call(
      "getPriceTier",
      "getPriceTier(uint256):((uint128,uint128))",
      [ethereum.Value.fromUnsignedBigInt(i)]
    );

    return changetype<IPriceTierVesting__getPriceTierResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getPriceTier(
    i: BigInt
  ): ethereum.CallResult<IPriceTierVesting__getPriceTierResultValue0Struct> {
    let result = super.tryCall(
      "getPriceTier",
      "getPriceTier(uint256):((uint128,uint128))",
      [ethereum.Value.fromUnsignedBigInt(i)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IPriceTierVesting__getPriceTierResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getPriceTiers(): Array<IPriceTierVesting__getPriceTiersResultValue0Struct> {
    let result = super.call(
      "getPriceTiers",
      "getPriceTiers():((uint128,uint128)[])",
      []
    );

    return result[0].toTupleArray<
      IPriceTierVesting__getPriceTiersResultValue0Struct
    >();
  }

  try_getPriceTiers(): ethereum.CallResult<
    Array<IPriceTierVesting__getPriceTiersResultValue0Struct>
  > {
    let result = super.tryCall(
      "getPriceTiers",
      "getPriceTiers():((uint128,uint128)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        IPriceTierVesting__getPriceTiersResultValue0Struct
      >()
    );
  }

  getStart(): BigInt {
    let result = super.call("getStart", "getStart():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getStart", "getStart():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class SetPriceTiersCall extends ethereum.Call {
  get inputs(): SetPriceTiersCall__Inputs {
    return new SetPriceTiersCall__Inputs(this);
  }

  get outputs(): SetPriceTiersCall__Outputs {
    return new SetPriceTiersCall__Outputs(this);
  }
}

export class SetPriceTiersCall__Inputs {
  _call: SetPriceTiersCall;

  constructor(call: SetPriceTiersCall) {
    this._call = call;
  }

  get _start(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _end(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _oracle(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _tiers(): Array<SetPriceTiersCall_tiersStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      SetPriceTiersCall_tiersStruct
    >();
  }
}

export class SetPriceTiersCall__Outputs {
  _call: SetPriceTiersCall;

  constructor(call: SetPriceTiersCall) {
    this._call = call;
  }
}

export class SetPriceTiersCall_tiersStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get vestedFraction(): BigInt {
    return this[1].toBigInt();
  }
}
