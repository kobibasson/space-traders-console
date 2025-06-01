# FactionsApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFaction**](#getfaction) | **GET** /factions/{factionSymbol} | Get Faction|
|[**getFactions**](#getfactions) | **GET** /factions | List Factions|

# **getFaction**
> GetFaction200Response getFaction()

View the details of a faction.

### Example

```typescript
import {
    FactionsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FactionsApi(configuration);

let factionSymbol: string; //The faction symbol (default to undefined)

const { status, data } = await apiInstance.getFaction(
    factionSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **factionSymbol** | [**string**] | The faction symbol | defaults to undefined|


### Return type

**GetFaction200Response**

### Authorization

[AccountToken](../README.md#AccountToken), [AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched a faction. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFactions**
> GetFactions200Response getFactions()

Return a paginated list of all the factions in the game.

### Example

```typescript
import {
    FactionsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FactionsApi(configuration);

let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)

const { status, data } = await apiInstance.getFactions(
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

**GetFactions200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched factions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

