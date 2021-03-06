/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

describe('Plugin object (window.plugins)', function () {
	it("should exist", function() {
        expect(window.plugins).toBeDefined();
	});

	it("should contain a barcodeScanner object", function() {
        expect(window.plugins.barcodeScanner).toBeDefined();
		expect(typeof window.plugins.barcodeScanner == 'object').toBe(true);
	});

    it("should contain a scan function", function() {
        expect(window.plugins.barcodeScanner.scan).toBeDefined();
        expect(typeof window.plugins.barcodeScanner.scan == 'function').toBe(true);
    });

    it("should contain an encode function", function() {
        expect(window.plugins.barcodeScanner.encode).toBeDefined();
        expect(typeof window.plugins.barcodeScanner.encode == 'function').toBe(true);
    });

    it("should contain three DestinationType constants", function() {
        expect(BarcodeScanner.Encode.TEXT_TYPE).toBe("TEXT_TYPE");
        expect(BarcodeScanner.Encode.EMAIL_TYPE).toBe("EMAIL_TYPE");
        expect(BarcodeScanner.Encode.PHONE_TYPE).toBe("PHONE_TYPE");
        expect(BarcodeScanner.Encode.SMS_TYPE).toBe("SMS_TYPE");
    });
    /*
    it("should call scan successfully", function() {
        window.plugins.barcodeScanner.scan(function() {}, function() {});
    });
    */
});
