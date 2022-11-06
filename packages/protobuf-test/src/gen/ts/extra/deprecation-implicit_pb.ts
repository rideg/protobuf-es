// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.2.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/deprecation-implicit.proto (package spec, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message spec.ImplicitlyDeprecatedMessage
 * @deprecated
 */
export class ImplicitlyDeprecatedMessage extends Message<ImplicitlyDeprecatedMessage> {
  constructor(data?: PartialMessage<ImplicitlyDeprecatedMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "spec.ImplicitlyDeprecatedMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromJsonString(jsonString, options);
  }

  static conforms(value: any): value is ImplicitlyDeprecatedMessage {
    return proto3.util.conforms(ImplicitlyDeprecatedMessage, value);
  }

  static equals(a: ImplicitlyDeprecatedMessage | PlainMessage<ImplicitlyDeprecatedMessage> | undefined, b: ImplicitlyDeprecatedMessage | PlainMessage<ImplicitlyDeprecatedMessage> | undefined): boolean {
    return proto3.util.equals(ImplicitlyDeprecatedMessage, a, b);
  }
}

