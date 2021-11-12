/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
import { Modules } from '@adobe/exc-app/internal';
export declare type Namespace = keyof Modules;
export default class RuntimeMock {
    private mock;
    private modulesToWrap;
    constructor();
    /**
     * Mocks a specific namespace function of @adobe/exc-app
     * @param namespace - @adobe/exc-app namespace
     * @param functionName - function to be mocked within the namespace
     * @param callback - Function to use as mock
     */
    mockFunction(namespace: Namespace, functionName: string, callback: (value?: any) => any): void;
    /**
     * Mocks an entire namespace module of @adobe/exc-app
     * @param namespace - @adobe/exc-app namespace
     * @param module - mock module
     */
    mockModule(namespace: Namespace, moduleToMock: Record<string, any>): void;
    load(win?: Window & typeof globalThis): void;
}
