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

// @generated by protoc-gen-es v0.2.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/example.proto (package docs, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message docs.Example
 */
export declare class Example extends Message<Example> {
  /**
   * @generated from field: string foo = 1;
   */
  foo: string;

  /**
   * @generated from field: bool bar = 2;
   */
  bar: boolean;

  /**
   * @generated from field: docs.Example baz = 3;
   */
  baz?: Example;

  constructor(data?: PartialMessage<Example>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "docs.Example";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Example;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Example;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Example;

  static conforms(value: any): value is Example;

  static equals(a: Example | PlainMessage<Example> | undefined, b: Example | PlainMessage<Example> | undefined): boolean;
}

