// Copyright 2020-2022 Buf Technologies, Inc.
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
// @generated from file buf/alpha/registry/v1alpha1/download.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {Module} from "../../module/v1alpha1/module_pb.js";

/**
 * @generated from message buf.alpha.registry.v1alpha1.DownloadRequest
 */
export class DownloadRequest extends Message<DownloadRequest> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * @generated from field: string reference = 3;
   */
  reference = "";

  constructor(data?: PartialMessage<DownloadRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.DownloadRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadRequest {
    return new DownloadRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadRequest {
    return new DownloadRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadRequest {
    return new DownloadRequest().fromJsonString(jsonString, options);
  }

  static conforms(value: any): value is DownloadRequest {
    return proto3.util.conforms(DownloadRequest, value);
  }

  static equals(a: DownloadRequest | PlainMessage<DownloadRequest> | undefined, b: DownloadRequest | PlainMessage<DownloadRequest> | undefined): boolean {
    return proto3.util.equals(DownloadRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.DownloadResponse
 */
export class DownloadResponse extends Message<DownloadResponse> {
  /**
   * @generated from field: buf.alpha.module.v1alpha1.Module module = 1;
   */
  module?: Module;

  constructor(data?: PartialMessage<DownloadResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.DownloadResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module", kind: "message", T: Module },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadResponse {
    return new DownloadResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadResponse {
    return new DownloadResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadResponse {
    return new DownloadResponse().fromJsonString(jsonString, options);
  }

  static conforms(value: any): value is DownloadResponse {
    return proto3.util.conforms(DownloadResponse, value);
  }

  static equals(a: DownloadResponse | PlainMessage<DownloadResponse> | undefined, b: DownloadResponse | PlainMessage<DownloadResponse> | undefined): boolean {
    return proto3.util.equals(DownloadResponse, a, b);
  }
}

