/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { GetSupplyChain200Response } from '../models';
/**
 * DataApi - axios parameter creator
 * @export
 */
export const DataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Describes which import and exports map to each other.
         * @summary Get Supply Chain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplyChain: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/market/supply-chain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataApi - functional programming interface
 * @export
 */
export const DataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataApiAxiosParamCreator(configuration)
    return {
        /**
         * Describes which import and exports map to each other.
         * @summary Get Supply Chain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupplyChain(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSupplyChain200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupplyChain(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DataApi.getSupplyChain']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DataApi - factory interface
 * @export
 */
export const DataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataApiFp(configuration)
    return {
        /**
         * Describes which import and exports map to each other.
         * @summary Get Supply Chain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplyChain(options?: RawAxiosRequestConfig): AxiosPromise<GetSupplyChain200Response> {
            return localVarFp.getSupplyChain(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataApi - object-oriented interface
 * @export
 * @class DataApi
 * @extends {BaseAPI}
 */
export class DataApi extends BaseAPI {
    /**
     * Describes which import and exports map to each other.
     * @summary Get Supply Chain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    public getSupplyChain(options?: RawAxiosRequestConfig) {
        return DataApiFp(this.configuration).getSupplyChain(options).then((request) => request(this.axios, this.basePath));
    }
}

