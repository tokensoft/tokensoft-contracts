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

export class SetMerkleRoot extends ethereum.Event {
  get params(): SetMerkleRoot__Params {
    return new SetMerkleRoot__Params(this);
  }
}

export class SetMerkleRoot__Params {
  _event: SetMerkleRoot;

  constructor(event: SetMerkleRoot) {
    this._event = event;
  }

  get merkleRoot(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class IMerkleSet extends ethereum.SmartContract {
  static bind(address: Address): IMerkleSet {
    return new IMerkleSet("IMerkleSet", address);
  }

  getMerkleRoot(): Bytes {
    let result = super.call("getMerkleRoot", "getMerkleRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_getMerkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getMerkleRoot",
      "getMerkleRoot():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}
