# DataApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSupplyChain**](#getsupplychain) | **GET** /market/supply-chain | Get Supply Chain|

# **getSupplyChain**
> GetSupplyChain200Response getSupplyChain()

Describes which import and exports map to each other.

### Example

```typescript
import {
    DataApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

const { status, data } = await apiInstance.getSupplyChain();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSupplyChain200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved the supply chain information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

