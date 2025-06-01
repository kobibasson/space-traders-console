# ContractsApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptContract**](#acceptcontract) | **POST** /my/contracts/{contractId}/accept | Accept Contract|
|[**deliverContract**](#delivercontract) | **POST** /my/contracts/{contractId}/deliver | Deliver Cargo to Contract|
|[**fulfillContract**](#fulfillcontract) | **POST** /my/contracts/{contractId}/fulfill | Fulfill Contract|
|[**getContract**](#getcontract) | **GET** /my/contracts/{contractId} | Get Contract|
|[**getContracts**](#getcontracts) | **GET** /my/contracts | List Contracts|

# **acceptContract**
> AcceptContract200Response acceptContract()

Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contractId: string; //The contract ID to accept. (default to undefined)

const { status, data } = await apiInstance.acceptContract(
    contractId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractId** | [**string**] | The contract ID to accept. | defaults to undefined|


### Return type

**AcceptContract200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully accepted contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliverContract**
> DeliverContract200Response deliverContract()

Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    DeliverContractRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contractId: string; //The ID of the contract. (default to undefined)
let deliverContractRequest: DeliverContractRequest; // (optional)

const { status, data } = await apiInstance.deliverContract(
    contractId,
    deliverContractRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deliverContractRequest** | **DeliverContractRequest**|  | |
| **contractId** | [**string**] | The ID of the contract. | defaults to undefined|


### Return type

**DeliverContract200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully delivered cargo to contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fulfillContract**
> FulfillContract200Response fulfillContract()

Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contractId: string; //The ID of the contract to fulfill. (default to undefined)

const { status, data } = await apiInstance.fulfillContract(
    contractId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractId** | [**string**] | The ID of the contract to fulfill. | defaults to undefined|


### Return type

**FulfillContract200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fulfilled a contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContract**
> GetContract200Response getContract()

Get the details of a contract by ID.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contractId: string; //The contract ID (default to undefined)

const { status, data } = await apiInstance.getContract(
    contractId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractId** | [**string**] | The contract ID | defaults to undefined|


### Return type

**GetContract200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContracts**
> GetContracts200Response getContracts()

Return a paginated list of all your contracts.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)

const { status, data } = await apiInstance.getContracts(
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | What entry offset to request | (optional) defaults to 1|
| **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10|


### Return type

**GetContracts200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully listed contracts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

