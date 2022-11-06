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

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file which imports a proto file that uses optimize_for = CODE_SIZE.

// @generated by protoc-gen-es v0.2.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_embed_optimize_for.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import {proto2} from "@bufbuild/protobuf";
import {TestOptimizedForSize} from "./unittest_optimize_for_pb.js";

/**
 * @generated from message protobuf_unittest.TestEmbedOptimizedForSize
 */
export const TestEmbedOptimizedForSize = proto2.makeMessageType(
  "protobuf_unittest.TestEmbedOptimizedForSize",
  () => [
    { no: 1, name: "optional_message", kind: "message", T: TestOptimizedForSize, opt: true },
    { no: 2, name: "repeated_message", kind: "message", T: TestOptimizedForSize, repeated: true },
  ],
);

TestEmbedOptimizedForSize.conforms = function conforms(value) {
 return proto2.util.conforms(TestEmbedOptimizedForSize, value);
};
