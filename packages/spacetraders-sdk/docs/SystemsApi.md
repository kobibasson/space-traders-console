# SystemsApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getConstruction**](#getconstruction) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction | Get Construction Site|
|[**getJumpGate**](#getjumpgate) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate | Get Jump Gate|
|[**getMarket**](#getmarket) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/market | Get Market|
|[**getShipyard**](#getshipyard) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard | Get Shipyard|
|[**getSystem**](#getsystem) | **GET** /systems/{systemSymbol} | Get System|
|[**getSystemWaypoints**](#getsystemwaypoints) | **GET** /systems/{systemSymbol}/waypoints | List Waypoints in System|
|[**getSystems**](#getsystems) | **GET** /systems | List Systems|
|[**getWaypoint**](#getwaypoint) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol} | Get Waypoint|
|[**supplyConstruction**](#supplyconstruction) | **POST** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply | Supply Construction Site|

# **getConstruction**
> GetConstruction200Response getConstruction()

Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)

const { status, data } = await apiInstance.getConstruction(
    systemSymbol,
    waypointSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**GetConstruction200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched construction site. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJumpGate**
> GetJumpGate200Response getJumpGate()

Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)

const { status, data } = await apiInstance.getJumpGate(
    systemSymbol,
    waypointSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**GetJumpGate200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched jump gate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMarket**
> GetMarket200Response getMarket()

Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)

const { status, data } = await apiInstance.getMarket(
    systemSymbol,
    waypointSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**GetMarket200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched the market. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipyard**
> GetShipyard200Response getShipyard()

Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)

const { status, data } = await apiInstance.getShipyard(
    systemSymbol,
    waypointSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**GetShipyard200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched the shipyard. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSystem**
> GetSystem200Response getSystem()

Get the details of a system.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to 'X1-OE')

const { status, data } = await apiInstance.getSystem(
    systemSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to 'X1-OE'|


### Return type

**GetSystem200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched the system. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSystemWaypoints**
> GetSystemWaypoints200Response getSystemWaypoints()

Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.

### Example

```typescript
import {
    SystemsApi,
    Configuration,
    GetSystemWaypointsTraitsParameter
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)
let type: WaypointType; //Filter waypoints by type. (optional) (default to undefined)
let traits: GetSystemWaypointsTraitsParameter; //Filter waypoints by one or more traits. (optional) (default to undefined)

const { status, data } = await apiInstance.getSystemWaypoints(
    systemSymbol,
    page,
    limit,
    type,
    traits
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **page** | [**number**] | What entry offset to request | (optional) defaults to 1|
| **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10|
| **type** | **WaypointType** | Filter waypoints by type. | (optional) defaults to undefined|
| **traits** | **GetSystemWaypointsTraitsParameter** | Filter waypoints by one or more traits. | (optional) defaults to undefined|


### Return type

**GetSystemWaypoints200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched all waypoints in the system. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSystems**
> GetSystems200Response getSystems()

Return a paginated list of all systems.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)

const { status, data } = await apiInstance.getSystems(
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

**GetSystems200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully listed systems. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWaypoint**
> GetWaypoint200Response getWaypoint()

View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.

### Example

```typescript
import {
    SystemsApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)

const { status, data } = await apiInstance.getWaypoint(
    systemSymbol,
    waypointSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**GetWaypoint200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched waypoint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyConstruction**
> SupplyConstruction201Response supplyConstruction()

Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.

### Example

```typescript
import {
    SystemsApi,
    Configuration,
    SupplyConstructionRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new SystemsApi(configuration);

let systemSymbol: string; //The system symbol (default to undefined)
let waypointSymbol: string; //The waypoint symbol (default to undefined)
let supplyConstructionRequest: SupplyConstructionRequest; // (optional)

const { status, data } = await apiInstance.supplyConstruction(
    systemSymbol,
    waypointSymbol,
    supplyConstructionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyConstructionRequest** | **SupplyConstructionRequest**|  | |
| **systemSymbol** | [**string**] | The system symbol | defaults to undefined|
| **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined|


### Return type

**SupplyConstruction201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully supplied construction site. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

