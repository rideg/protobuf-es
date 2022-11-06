// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v0.2.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_arena.proto (package proto2_arena_unittest, syntax proto2)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto2} from "@bufbuild/protobuf";

/**
 * @generated from message proto2_arena_unittest.NestedMessage
 */
export class NestedMessage extends Message<NestedMessage> {
  /**
   * @generated from field: optional int32 d = 1;
   */
  d?: number;

  constructor(data?: PartialMessage<NestedMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime = proto2;
  static readonly typeName = "proto2_arena_unittest.NestedMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "d", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NestedMessage {
    return new NestedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NestedMessage {
    return new NestedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NestedMessage {
    return new NestedMessage().fromJsonString(jsonString, options);
  }

  static conforms(value: any): value is NestedMessage {
    return proto2.util.conforms(NestedMessage, value);
  }

  static equals(a: NestedMessage | PlainMessage<NestedMessage> | undefined, b: NestedMessage | PlainMessage<NestedMessage> | undefined): boolean {
    return proto2.util.equals(NestedMessage, a, b);
  }
}

/**
 * @generated from message proto2_arena_unittest.ArenaMessage
 */
export class ArenaMessage extends Message<ArenaMessage> {
  /**
   * @generated from field: repeated proto2_arena_unittest.NestedMessage repeated_nested_message = 1;
   */
  repeatedNestedMessage: NestedMessage[] = [];

  constructor(data?: PartialMessage<ArenaMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime = proto2;
  static readonly typeName = "proto2_arena_unittest.ArenaMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "repeated_nested_message", kind: "message", T: NestedMessage, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArenaMessage {
    return new ArenaMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArenaMessage {
    return new ArenaMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArenaMessage {
    return new ArenaMessage().fromJsonString(jsonString, options);
  }

  static conforms(value: any): value is ArenaMessage {
    return proto2.util.conforms(ArenaMessage, value);
  }

  static equals(a: ArenaMessage | PlainMessage<ArenaMessage> | undefined, b: ArenaMessage | PlainMessage<ArenaMessage> | undefined): boolean {
    return proto2.util.equals(ArenaMessage, a, b);
  }
}

