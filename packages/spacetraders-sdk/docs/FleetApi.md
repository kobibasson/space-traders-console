# FleetApi

All URIs are relative to *https://api.spacetraders.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createChart**](#createchart) | **POST** /my/ships/{shipSymbol}/chart | Create Chart|
|[**createShipShipScan**](#createshipshipscan) | **POST** /my/ships/{shipSymbol}/scan/ships | Scan Ships|
|[**createShipSystemScan**](#createshipsystemscan) | **POST** /my/ships/{shipSymbol}/scan/systems | Scan Systems|
|[**createShipWaypointScan**](#createshipwaypointscan) | **POST** /my/ships/{shipSymbol}/scan/waypoints | Scan Waypoints|
|[**createSurvey**](#createsurvey) | **POST** /my/ships/{shipSymbol}/survey | Create Survey|
|[**dockShip**](#dockship) | **POST** /my/ships/{shipSymbol}/dock | Dock Ship|
|[**extractResources**](#extractresources) | **POST** /my/ships/{shipSymbol}/extract | Extract Resources|
|[**extractResourcesWithSurvey**](#extractresourceswithsurvey) | **POST** /my/ships/{shipSymbol}/extract/survey | Extract Resources with Survey|
|[**getMounts**](#getmounts) | **GET** /my/ships/{shipSymbol}/mounts | Get Mounts|
|[**getMyShip**](#getmyship) | **GET** /my/ships/{shipSymbol} | Get Ship|
|[**getMyShipCargo**](#getmyshipcargo) | **GET** /my/ships/{shipSymbol}/cargo | Get Ship Cargo|
|[**getMyShips**](#getmyships) | **GET** /my/ships | List Ships|
|[**getRepairShip**](#getrepairship) | **GET** /my/ships/{shipSymbol}/repair | Get Repair Ship|
|[**getScrapShip**](#getscrapship) | **GET** /my/ships/{shipSymbol}/scrap | Get Scrap Ship|
|[**getShipCooldown**](#getshipcooldown) | **GET** /my/ships/{shipSymbol}/cooldown | Get Ship Cooldown|
|[**getShipModules**](#getshipmodules) | **GET** /my/ships/{shipSymbol}/modules | Get Ship Modules|
|[**getShipNav**](#getshipnav) | **GET** /my/ships/{shipSymbol}/nav | Get Ship Nav|
|[**installMount**](#installmount) | **POST** /my/ships/{shipSymbol}/mounts/install | Install Mount|
|[**installShipModule**](#installshipmodule) | **POST** /my/ships/{shipSymbol}/modules/install | Install Ship Module|
|[**jettison**](#jettison) | **POST** /my/ships/{shipSymbol}/jettison | Jettison Cargo|
|[**jumpShip**](#jumpship) | **POST** /my/ships/{shipSymbol}/jump | Jump Ship|
|[**navigateShip**](#navigateship) | **POST** /my/ships/{shipSymbol}/navigate | Navigate Ship|
|[**negotiateContract**](#negotiatecontract) | **POST** /my/ships/{shipSymbol}/negotiate/contract | Negotiate Contract|
|[**orbitShip**](#orbitship) | **POST** /my/ships/{shipSymbol}/orbit | Orbit Ship|
|[**patchShipNav**](#patchshipnav) | **PATCH** /my/ships/{shipSymbol}/nav | Patch Ship Nav|
|[**purchaseCargo**](#purchasecargo) | **POST** /my/ships/{shipSymbol}/purchase | Purchase Cargo|
|[**purchaseShip**](#purchaseship) | **POST** /my/ships | Purchase Ship|
|[**refuelShip**](#refuelship) | **POST** /my/ships/{shipSymbol}/refuel | Refuel Ship|
|[**removeMount**](#removemount) | **POST** /my/ships/{shipSymbol}/mounts/remove | Remove Mount|
|[**removeShipModule**](#removeshipmodule) | **POST** /my/ships/{shipSymbol}/modules/remove | Remove Ship Module|
|[**repairShip**](#repairship) | **POST** /my/ships/{shipSymbol}/repair | Repair Ship|
|[**scrapShip**](#scrapship) | **POST** /my/ships/{shipSymbol}/scrap | Scrap Ship|
|[**sellCargo**](#sellcargo) | **POST** /my/ships/{shipSymbol}/sell | Sell Cargo|
|[**shipRefine**](#shiprefine) | **POST** /my/ships/{shipSymbol}/refine | Ship Refine|
|[**siphonResources**](#siphonresources) | **POST** /my/ships/{shipSymbol}/siphon | Siphon Resources|
|[**transferCargo**](#transfercargo) | **POST** /my/ships/{shipSymbol}/transfer | Transfer Cargo|
|[**warpShip**](#warpship) | **POST** /my/ships/{shipSymbol}/warp | Warp Ship|

# **createChart**
> CreateChart201Response createChart()

Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits. Charting a waypoint gives you a one time reward of credits based on the rarity of the waypoint\'s traits.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.createChart(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**CreateChart201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createShipShipScan**
> CreateShipShipScan201Response createShipShipScan()

Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.createShipShipScan(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**CreateShipShipScan201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully scanned for nearby ships. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createShipSystemScan**
> CreateShipSystemScan201Response createShipSystemScan()

Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.createShipSystemScan(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**CreateShipSystemScan201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully scanned for nearby systems. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createShipWaypointScan**
> CreateShipWaypointScan201Response createShipWaypointScan()

Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.createShipWaypointScan(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**CreateShipWaypointScan201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully scanned for nearby waypoints. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSurvey**
> CreateSurvey201Response createSurvey()

Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.createSurvey(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**CreateSurvey201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Surveys has been created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dockShip**
> DockShip200Response dockShip()

Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.dockShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**DockShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ship has successfully docked at its current location. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractResources**
> ExtractResources201Response extractResources()

Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    ExtractResourcesRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let extractResourcesRequest: ExtractResourcesRequest; // (optional)

const { status, data } = await apiInstance.extractResources(
    shipSymbol,
    extractResourcesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extractResourcesRequest** | **ExtractResourcesRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**ExtractResources201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Extracted successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractResourcesWithSurvey**
> ExtractResourcesWithSurvey201Response extractResourcesWithSurvey()

Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    Survey
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let survey: Survey; // (optional)

const { status, data } = await apiInstance.extractResourcesWithSurvey(
    shipSymbol,
    survey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **survey** | **Survey**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**ExtractResourcesWithSurvey201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Extracted successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMounts**
> GetMounts200Response getMounts()

Get the mounts installed on a ship.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship\'s symbol. (default to undefined)

const { status, data } = await apiInstance.getMounts(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship\&#39;s symbol. | defaults to undefined|


### Return type

**GetMounts200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Got installed mounts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyShip**
> GetMyShip200Response getMyShip()

Retrieve the details of a ship under your agent\'s ownership.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.getMyShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**GetMyShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyShipCargo**
> GetMyShipCargo200Response getMyShipCargo()

Retrieve the cargo of a ship under your agent\'s ownership.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.getMyShipCargo(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**GetMyShipCargo200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched ship\&#39;s cargo. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyShips**
> GetMyShips200Response getMyShips()

Return a paginated list of all of ships under your agent\'s ownership.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let page: number; //What entry offset to request (optional) (default to 1)
let limit: number; //How many entries to return per page (optional) (default to 10)

const { status, data } = await apiInstance.getMyShips(
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

**GetMyShips200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully listed ships. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRepairShip**
> GetRepairShip200Response getRepairShip()

Get the cost of repairing a ship.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.getRepairShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**GetRepairShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved the cost of repairing a ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScrapShip**
> GetScrapShip200Response getScrapShip()

Get the amount of value that will be returned when scrapping a ship.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.getScrapShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**GetScrapShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved the amount of value that will be returned when scrapping a ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipCooldown**
> GetShipCooldown200Response getShipCooldown()

Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.getShipCooldown(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**GetShipCooldown200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched ship\&#39;s cooldown. |  -  |
|**204** | No cooldown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipModules**
> GetShipModules200Response getShipModules()

Get the modules installed on a ship.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship (default to undefined)

const { status, data } = await apiInstance.getShipModules(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined|


### Return type

**GetShipModules200Response**

### Authorization

[AccountToken](../README.md#AccountToken), [AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved ship modules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipNav**
> GetShipNav200Response getShipNav()

Get the current nav status of a ship.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.getShipNav(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**GetShipNav200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The current nav status of the ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **installMount**
> InstallMount201Response installMount()

Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 

### Example

```typescript
import {
    FleetApi,
    Configuration,
    InstallMountRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship\'s symbol. (default to undefined)
let installMountRequest: InstallMountRequest; // (optional)

const { status, data } = await apiInstance.installMount(
    shipSymbol,
    installMountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **installMountRequest** | **InstallMountRequest**|  | |
| **shipSymbol** | [**string**] | The ship\&#39;s symbol. | defaults to undefined|


### Return type

**InstallMount201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully installed the mount. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **installShipModule**
> InstallShipModule201Response installShipModule()

Install a module on a ship. The module must be in your cargo.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    InstallShipModuleRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship (default to undefined)
let installShipModuleRequest: InstallShipModuleRequest; // (optional)

const { status, data } = await apiInstance.installShipModule(
    shipSymbol,
    installShipModuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **installShipModuleRequest** | **InstallShipModuleRequest**|  | |
| **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined|


### Return type

**InstallShipModule201Response**

### Authorization

[AccountToken](../README.md#AccountToken), [AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully installed the module on the ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jettison**
> Jettison200Response jettison()

Jettison cargo from your ship\'s cargo hold.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    JettisonRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let jettisonRequest: JettisonRequest; // (optional)

const { status, data } = await apiInstance.jettison(
    shipSymbol,
    jettisonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jettisonRequest** | **JettisonRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**Jettison200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Jettison successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jumpShip**
> JumpShip200Response jumpShip()

Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints

### Example

```typescript
import {
    FleetApi,
    Configuration,
    JumpShipRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let jumpShipRequest: JumpShipRequest; // (optional)

const { status, data } = await apiInstance.jumpShip(
    shipSymbol,
    jumpShipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jumpShipRequest** | **JumpShipRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**JumpShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Jump successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **navigateShip**
> NavigateShip200Response navigateShip()

Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    NavigateShipRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let navigateShipRequest: NavigateShipRequest; // (optional)

const { status, data } = await apiInstance.navigateShip(
    shipSymbol,
    navigateShipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **navigateShipRequest** | **NavigateShipRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**NavigateShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **negotiateContract**
> NegotiateContract200Response negotiateContract()

Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship\'s symbol. (default to undefined)

const { status, data } = await apiInstance.negotiateContract(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship\&#39;s symbol. | defaults to undefined|


### Return type

**NegotiateContract200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully negotiated a new contract. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orbitShip**
> OrbitShip200Response orbitShip()

Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)

const { status, data } = await apiInstance.orbitShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**OrbitShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ship has successfully moved into orbit at its current location. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchShipNav**
> PatchShipNav200Response patchShipNav()

Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    PatchShipNavRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let patchShipNavRequest: PatchShipNavRequest; // (optional)

const { status, data } = await apiInstance.patchShipNav(
    shipSymbol,
    patchShipNavRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchShipNavRequest** | **PatchShipNavRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**PatchShipNav200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated data of the ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchaseCargo**
> PurchaseCargo201Response purchaseCargo()

Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    PurchaseCargoRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship\'s symbol. (default to undefined)
let purchaseCargoRequest: PurchaseCargoRequest; // (optional)

const { status, data } = await apiInstance.purchaseCargo(
    shipSymbol,
    purchaseCargoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **purchaseCargoRequest** | **PurchaseCargoRequest**|  | |
| **shipSymbol** | [**string**] | The ship\&#39;s symbol. | defaults to undefined|


### Return type

**PurchaseCargo201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Purchased goods successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchaseShip**
> PurchaseShip201Response purchaseShip()

Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    PurchaseShipRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let purchaseShipRequest: PurchaseShipRequest; // (optional)

const { status, data } = await apiInstance.purchaseShip(
    purchaseShipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **purchaseShipRequest** | **PurchaseShipRequest**|  | |


### Return type

**PurchaseShip201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Purchased ship successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refuelShip**
> RefuelShip200Response refuelShip()

Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    RefuelShipRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let refuelShipRequest: RefuelShipRequest; // (optional)

const { status, data } = await apiInstance.refuelShip(
    shipSymbol,
    refuelShipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refuelShipRequest** | **RefuelShipRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**RefuelShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refueled successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeMount**
> RemoveMount201Response removeMount()

Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    RemoveMountRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship\'s symbol. (default to undefined)
let removeMountRequest: RemoveMountRequest; // (optional)

const { status, data } = await apiInstance.removeMount(
    shipSymbol,
    removeMountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeMountRequest** | **RemoveMountRequest**|  | |
| **shipSymbol** | [**string**] | The ship\&#39;s symbol. | defaults to undefined|


### Return type

**RemoveMount201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully removed the mount. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeShipModule**
> RemoveModule201Response removeShipModule()

Remove a module from a ship. The module will be placed in cargo.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    RemoveShipModuleRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship (default to undefined)
let removeShipModuleRequest: RemoveShipModuleRequest; // (optional)

const { status, data } = await apiInstance.removeShipModule(
    shipSymbol,
    removeShipModuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeShipModuleRequest** | **RemoveShipModuleRequest**|  | |
| **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined|


### Return type

**RemoveModule201Response**

### Authorization

[AccountToken](../README.md#AccountToken), [AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successfully removed the module from the ship. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairShip**
> RepairShip200Response repairShip()

Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.repairShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**RepairShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ship repaired successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scrapShip**
> ScrapShip200Response scrapShip()

Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.scrapShip(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**ScrapShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ship scrapped successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sellCargo**
> SellCargo201Response sellCargo()

Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    SellCargoRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //Symbol of a ship. (default to undefined)
let sellCargoRequest: SellCargoRequest; // (optional)

const { status, data } = await apiInstance.sellCargo(
    shipSymbol,
    sellCargoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellCargoRequest** | **SellCargoRequest**|  | |
| **shipSymbol** | [**string**] | Symbol of a ship. | defaults to undefined|


### Return type

**SellCargo201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Cargo was successfully sold. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipRefine**
> ShipRefine201Response shipRefine()

Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 100 basic goods will be converted into 10 processed goods.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    ShipRefineRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The symbol of the ship. (default to undefined)
let shipRefineRequest: ShipRefineRequest; // (optional)

const { status, data } = await apiInstance.shipRefine(
    shipSymbol,
    shipRefineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipRefineRequest** | **ShipRefineRequest**|  | |
| **shipSymbol** | [**string**] | The symbol of the ship. | defaults to undefined|


### Return type

**ShipRefine201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The ship has successfully refined goods. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **siphonResources**
> SiphonResources201Response siphonResources()

Siphon gases or other resources from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.

### Example

```typescript
import {
    FleetApi,
    Configuration
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)

const { status, data } = await apiInstance.siphonResources(
    shipSymbol
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**SiphonResources201Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Siphon successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferCargo**
> TransferCargo200Response transferCargo()

Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    TransferCargoRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The transferring ship\'s symbol. (default to undefined)
let transferCargoRequest: TransferCargoRequest; // (optional)

const { status, data } = await apiInstance.transferCargo(
    shipSymbol,
    transferCargoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferCargoRequest** | **TransferCargoRequest**|  | |
| **shipSymbol** | [**string**] | The transferring ship\&#39;s symbol. | defaults to undefined|


### Return type

**TransferCargo200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transfer successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warpShip**
> WarpShip200Response warpShip()

Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.

### Example

```typescript
import {
    FleetApi,
    Configuration,
    NavigateShipRequest
} from 'spacetraders-sdk';

const configuration = new Configuration();
const apiInstance = new FleetApi(configuration);

let shipSymbol: string; //The ship symbol. (default to undefined)
let navigateShipRequest: NavigateShipRequest; // (optional)

const { status, data } = await apiInstance.warpShip(
    shipSymbol,
    navigateShipRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **navigateShipRequest** | **NavigateShipRequest**|  | |
| **shipSymbol** | [**string**] | The ship symbol. | defaults to undefined|


### Return type

**WarpShip200Response**

### Authorization

[AgentToken](../README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

