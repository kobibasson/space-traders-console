# AgentsApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAgent**](#getagent) | **GET** /agents/{agentSymbol} | Get Public Agent|
|[**getAgents**](#getagents) | **GET** /agents | List Agents|
|[**getMyAgent**](#getmyagent) | **GET** /my/agent | Get Agent|

# **getAgent**
> GetMyAgent200Response getAgent()

Fetch agent details.

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let agentSymbol: string; //The agent symbol (default to 'FEBA66')

const { status, data } = await apiInstance.getAgent(
    agentSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentSymbol** | [**string**] | The agent symbol | defaults to 'FEBA66'|


### Return type

**GetMyAgent200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched agent details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAgents**
> GetAgents200Response getAgents()

Fetch agents details.

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)

const { status, data } = await apiInstance.getAgents(
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

**GetAgents200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched agents details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyAgent**
> GetMyAgent200Response getMyAgent()

Fetch your agent\'s details.

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

const { status, data } = await apiInstance.getMyAgent();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetMyAgent200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched agent details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

