## spacetraders-sdk@2.3.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install spacetraders-sdk@2.3.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.spacetraders.io/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AgentsApi* | [**getAgent**](docs/AgentsApi.md#getagent) | **GET** /agents/{agentSymbol} | Get Public Agent
*AgentsApi* | [**getAgents**](docs/AgentsApi.md#getagents) | **GET** /agents | List Agents
*AgentsApi* | [**getMyAgent**](docs/AgentsApi.md#getmyagent) | **GET** /my/agent | Get Agent
*ContractsApi* | [**acceptContract**](docs/ContractsApi.md#acceptcontract) | **POST** /my/contracts/{contractId}/accept | Accept Contract
*ContractsApi* | [**deliverContract**](docs/ContractsApi.md#delivercontract) | **POST** /my/contracts/{contractId}/deliver | Deliver Cargo to Contract
*ContractsApi* | [**fulfillContract**](docs/ContractsApi.md#fulfillcontract) | **POST** /my/contracts/{contractId}/fulfill | Fulfill Contract
*ContractsApi* | [**getContract**](docs/ContractsApi.md#getcontract) | **GET** /my/contracts/{contractId} | Get Contract
*ContractsApi* | [**getContracts**](docs/ContractsApi.md#getcontracts) | **GET** /my/contracts | List Contracts
*DataApi* | [**getSupplyChain**](docs/DataApi.md#getsupplychain) | **GET** /market/supply-chain | Get Supply Chain
*FactionsApi* | [**getFaction**](docs/FactionsApi.md#getfaction) | **GET** /factions/{factionSymbol} | Get Faction
*FactionsApi* | [**getFactions**](docs/FactionsApi.md#getfactions) | **GET** /factions | List Factions
*FleetApi* | [**createChart**](docs/FleetApi.md#createchart) | **POST** /my/ships/{shipSymbol}/chart | Create Chart
*FleetApi* | [**createShipShipScan**](docs/FleetApi.md#createshipshipscan) | **POST** /my/ships/{shipSymbol}/scan/ships | Scan Ships
*FleetApi* | [**createShipSystemScan**](docs/FleetApi.md#createshipsystemscan) | **POST** /my/ships/{shipSymbol}/scan/systems | Scan Systems
*FleetApi* | [**createShipWaypointScan**](docs/FleetApi.md#createshipwaypointscan) | **POST** /my/ships/{shipSymbol}/scan/waypoints | Scan Waypoints
*FleetApi* | [**createSurvey**](docs/FleetApi.md#createsurvey) | **POST** /my/ships/{shipSymbol}/survey | Create Survey
*FleetApi* | [**dockShip**](docs/FleetApi.md#dockship) | **POST** /my/ships/{shipSymbol}/dock | Dock Ship
*FleetApi* | [**extractResources**](docs/FleetApi.md#extractresources) | **POST** /my/ships/{shipSymbol}/extract | Extract Resources
*FleetApi* | [**extractResourcesWithSurvey**](docs/FleetApi.md#extractresourceswithsurvey) | **POST** /my/ships/{shipSymbol}/extract/survey | Extract Resources with Survey
*FleetApi* | [**getMounts**](docs/FleetApi.md#getmounts) | **GET** /my/ships/{shipSymbol}/mounts | Get Mounts
*FleetApi* | [**getMyShip**](docs/FleetApi.md#getmyship) | **GET** /my/ships/{shipSymbol} | Get Ship
*FleetApi* | [**getMyShipCargo**](docs/FleetApi.md#getmyshipcargo) | **GET** /my/ships/{shipSymbol}/cargo | Get Ship Cargo
*FleetApi* | [**getMyShips**](docs/FleetApi.md#getmyships) | **GET** /my/ships | List Ships
*FleetApi* | [**getRepairShip**](docs/FleetApi.md#getrepairship) | **GET** /my/ships/{shipSymbol}/repair | Get Repair Ship
*FleetApi* | [**getScrapShip**](docs/FleetApi.md#getscrapship) | **GET** /my/ships/{shipSymbol}/scrap | Get Scrap Ship
*FleetApi* | [**getShipCooldown**](docs/FleetApi.md#getshipcooldown) | **GET** /my/ships/{shipSymbol}/cooldown | Get Ship Cooldown
*FleetApi* | [**getShipModules**](docs/FleetApi.md#getshipmodules) | **GET** /my/ships/{shipSymbol}/modules | Get Ship Modules
*FleetApi* | [**getShipNav**](docs/FleetApi.md#getshipnav) | **GET** /my/ships/{shipSymbol}/nav | Get Ship Nav
*FleetApi* | [**installMount**](docs/FleetApi.md#installmount) | **POST** /my/ships/{shipSymbol}/mounts/install | Install Mount
*FleetApi* | [**installShipModule**](docs/FleetApi.md#installshipmodule) | **POST** /my/ships/{shipSymbol}/modules/install | Install Ship Module
*FleetApi* | [**jettison**](docs/FleetApi.md#jettison) | **POST** /my/ships/{shipSymbol}/jettison | Jettison Cargo
*FleetApi* | [**jumpShip**](docs/FleetApi.md#jumpship) | **POST** /my/ships/{shipSymbol}/jump | Jump Ship
*FleetApi* | [**navigateShip**](docs/FleetApi.md#navigateship) | **POST** /my/ships/{shipSymbol}/navigate | Navigate Ship
*FleetApi* | [**negotiateContract**](docs/FleetApi.md#negotiatecontract) | **POST** /my/ships/{shipSymbol}/negotiate/contract | Negotiate Contract
*FleetApi* | [**orbitShip**](docs/FleetApi.md#orbitship) | **POST** /my/ships/{shipSymbol}/orbit | Orbit Ship
*FleetApi* | [**patchShipNav**](docs/FleetApi.md#patchshipnav) | **PATCH** /my/ships/{shipSymbol}/nav | Patch Ship Nav
*FleetApi* | [**purchaseCargo**](docs/FleetApi.md#purchasecargo) | **POST** /my/ships/{shipSymbol}/purchase | Purchase Cargo
*FleetApi* | [**purchaseShip**](docs/FleetApi.md#purchaseship) | **POST** /my/ships | Purchase Ship
*FleetApi* | [**refuelShip**](docs/FleetApi.md#refuelship) | **POST** /my/ships/{shipSymbol}/refuel | Refuel Ship
*FleetApi* | [**removeMount**](docs/FleetApi.md#removemount) | **POST** /my/ships/{shipSymbol}/mounts/remove | Remove Mount
*FleetApi* | [**removeShipModule**](docs/FleetApi.md#removeshipmodule) | **POST** /my/ships/{shipSymbol}/modules/remove | Remove Ship Module
*FleetApi* | [**repairShip**](docs/FleetApi.md#repairship) | **POST** /my/ships/{shipSymbol}/repair | Repair Ship
*FleetApi* | [**scrapShip**](docs/FleetApi.md#scrapship) | **POST** /my/ships/{shipSymbol}/scrap | Scrap Ship
*FleetApi* | [**sellCargo**](docs/FleetApi.md#sellcargo) | **POST** /my/ships/{shipSymbol}/sell | Sell Cargo
*FleetApi* | [**shipRefine**](docs/FleetApi.md#shiprefine) | **POST** /my/ships/{shipSymbol}/refine | Ship Refine
*FleetApi* | [**siphonResources**](docs/FleetApi.md#siphonresources) | **POST** /my/ships/{shipSymbol}/siphon | Siphon Resources
*FleetApi* | [**transferCargo**](docs/FleetApi.md#transfercargo) | **POST** /my/ships/{shipSymbol}/transfer | Transfer Cargo
*FleetApi* | [**warpShip**](docs/FleetApi.md#warpship) | **POST** /my/ships/{shipSymbol}/warp | Warp Ship
*GlobalApi* | [**getStatus**](docs/GlobalApi.md#getstatus) | **GET** / | Get Status
*GlobalApi* | [**register**](docs/GlobalApi.md#register) | **POST** /register | Register New Agent
*SystemsApi* | [**getConstruction**](docs/SystemsApi.md#getconstruction) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction | Get Construction Site
*SystemsApi* | [**getJumpGate**](docs/SystemsApi.md#getjumpgate) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate | Get Jump Gate
*SystemsApi* | [**getMarket**](docs/SystemsApi.md#getmarket) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/market | Get Market
*SystemsApi* | [**getShipyard**](docs/SystemsApi.md#getshipyard) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard | Get Shipyard
*SystemsApi* | [**getSystem**](docs/SystemsApi.md#getsystem) | **GET** /systems/{systemSymbol} | Get System
*SystemsApi* | [**getSystemWaypoints**](docs/SystemsApi.md#getsystemwaypoints) | **GET** /systems/{systemSymbol}/waypoints | List Waypoints in System
*SystemsApi* | [**getSystems**](docs/SystemsApi.md#getsystems) | **GET** /systems | List Systems
*SystemsApi* | [**getWaypoint**](docs/SystemsApi.md#getwaypoint) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol} | Get Waypoint
*SystemsApi* | [**supplyConstruction**](docs/SystemsApi.md#supplyconstruction) | **POST** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply | Supply Construction Site


### Documentation For Models

 - [AcceptContract200Response](docs/AcceptContract200Response.md)
 - [AcceptContract200ResponseData](docs/AcceptContract200ResponseData.md)
 - [ActivityLevel](docs/ActivityLevel.md)
 - [Agent](docs/Agent.md)
 - [Chart](docs/Chart.md)
 - [Construction](docs/Construction.md)
 - [ConstructionMaterial](docs/ConstructionMaterial.md)
 - [Contract](docs/Contract.md)
 - [ContractDeliverGood](docs/ContractDeliverGood.md)
 - [ContractPayment](docs/ContractPayment.md)
 - [ContractTerms](docs/ContractTerms.md)
 - [Cooldown](docs/Cooldown.md)
 - [CreateChart201Response](docs/CreateChart201Response.md)
 - [CreateChart201ResponseData](docs/CreateChart201ResponseData.md)
 - [CreateShipShipScan201Response](docs/CreateShipShipScan201Response.md)
 - [CreateShipShipScan201ResponseData](docs/CreateShipShipScan201ResponseData.md)
 - [CreateShipSystemScan201Response](docs/CreateShipSystemScan201Response.md)
 - [CreateShipSystemScan201ResponseData](docs/CreateShipSystemScan201ResponseData.md)
 - [CreateShipWaypointScan201Response](docs/CreateShipWaypointScan201Response.md)
 - [CreateShipWaypointScan201ResponseData](docs/CreateShipWaypointScan201ResponseData.md)
 - [CreateSurvey201Response](docs/CreateSurvey201Response.md)
 - [CreateSurvey201ResponseData](docs/CreateSurvey201ResponseData.md)
 - [DeliverContract200Response](docs/DeliverContract200Response.md)
 - [DeliverContract200ResponseData](docs/DeliverContract200ResponseData.md)
 - [DeliverContractRequest](docs/DeliverContractRequest.md)
 - [DockShip200Response](docs/DockShip200Response.md)
 - [ExtractResources201Response](docs/ExtractResources201Response.md)
 - [ExtractResources201ResponseData](docs/ExtractResources201ResponseData.md)
 - [ExtractResourcesRequest](docs/ExtractResourcesRequest.md)
 - [ExtractResourcesWithSurvey201Response](docs/ExtractResourcesWithSurvey201Response.md)
 - [ExtractResourcesWithSurvey201ResponseData](docs/ExtractResourcesWithSurvey201ResponseData.md)
 - [Extraction](docs/Extraction.md)
 - [ExtractionYield](docs/ExtractionYield.md)
 - [Faction](docs/Faction.md)
 - [FactionSymbol](docs/FactionSymbol.md)
 - [FactionTrait](docs/FactionTrait.md)
 - [FactionTraitSymbol](docs/FactionTraitSymbol.md)
 - [FulfillContract200Response](docs/FulfillContract200Response.md)
 - [GetAgents200Response](docs/GetAgents200Response.md)
 - [GetConstruction200Response](docs/GetConstruction200Response.md)
 - [GetContract200Response](docs/GetContract200Response.md)
 - [GetContracts200Response](docs/GetContracts200Response.md)
 - [GetFaction200Response](docs/GetFaction200Response.md)
 - [GetFactions200Response](docs/GetFactions200Response.md)
 - [GetJumpGate200Response](docs/GetJumpGate200Response.md)
 - [GetMarket200Response](docs/GetMarket200Response.md)
 - [GetMounts200Response](docs/GetMounts200Response.md)
 - [GetMyAgent200Response](docs/GetMyAgent200Response.md)
 - [GetMyShip200Response](docs/GetMyShip200Response.md)
 - [GetMyShipCargo200Response](docs/GetMyShipCargo200Response.md)
 - [GetMyShips200Response](docs/GetMyShips200Response.md)
 - [GetRepairShip200Response](docs/GetRepairShip200Response.md)
 - [GetRepairShip200ResponseData](docs/GetRepairShip200ResponseData.md)
 - [GetScrapShip200Response](docs/GetScrapShip200Response.md)
 - [GetScrapShip200ResponseData](docs/GetScrapShip200ResponseData.md)
 - [GetShipCooldown200Response](docs/GetShipCooldown200Response.md)
 - [GetShipModules200Response](docs/GetShipModules200Response.md)
 - [GetShipNav200Response](docs/GetShipNav200Response.md)
 - [GetShipyard200Response](docs/GetShipyard200Response.md)
 - [GetStatus200Response](docs/GetStatus200Response.md)
 - [GetStatus200ResponseAnnouncementsInner](docs/GetStatus200ResponseAnnouncementsInner.md)
 - [GetStatus200ResponseLeaderboards](docs/GetStatus200ResponseLeaderboards.md)
 - [GetStatus200ResponseLeaderboardsMostCreditsInner](docs/GetStatus200ResponseLeaderboardsMostCreditsInner.md)
 - [GetStatus200ResponseLeaderboardsMostSubmittedChartsInner](docs/GetStatus200ResponseLeaderboardsMostSubmittedChartsInner.md)
 - [GetStatus200ResponseLinksInner](docs/GetStatus200ResponseLinksInner.md)
 - [GetStatus200ResponseServerResets](docs/GetStatus200ResponseServerResets.md)
 - [GetStatus200ResponseStats](docs/GetStatus200ResponseStats.md)
 - [GetSupplyChain200Response](docs/GetSupplyChain200Response.md)
 - [GetSupplyChain200ResponseData](docs/GetSupplyChain200ResponseData.md)
 - [GetSystem200Response](docs/GetSystem200Response.md)
 - [GetSystemWaypoints200Response](docs/GetSystemWaypoints200Response.md)
 - [GetSystemWaypointsTraitsParameter](docs/GetSystemWaypointsTraitsParameter.md)
 - [GetSystems200Response](docs/GetSystems200Response.md)
 - [GetWaypoint200Response](docs/GetWaypoint200Response.md)
 - [InstallMount201Response](docs/InstallMount201Response.md)
 - [InstallMount201ResponseData](docs/InstallMount201ResponseData.md)
 - [InstallMountRequest](docs/InstallMountRequest.md)
 - [InstallShipModule201Response](docs/InstallShipModule201Response.md)
 - [InstallShipModule201ResponseData](docs/InstallShipModule201ResponseData.md)
 - [InstallShipModule201ResponseDataTransaction](docs/InstallShipModule201ResponseDataTransaction.md)
 - [InstallShipModuleRequest](docs/InstallShipModuleRequest.md)
 - [Jettison200Response](docs/Jettison200Response.md)
 - [Jettison200ResponseData](docs/Jettison200ResponseData.md)
 - [JettisonRequest](docs/JettisonRequest.md)
 - [JumpGate](docs/JumpGate.md)
 - [JumpShip200Response](docs/JumpShip200Response.md)
 - [JumpShip200ResponseData](docs/JumpShip200ResponseData.md)
 - [JumpShipRequest](docs/JumpShipRequest.md)
 - [Market](docs/Market.md)
 - [MarketTradeGood](docs/MarketTradeGood.md)
 - [MarketTransaction](docs/MarketTransaction.md)
 - [Meta](docs/Meta.md)
 - [NavigateShip200Response](docs/NavigateShip200Response.md)
 - [NavigateShip200ResponseData](docs/NavigateShip200ResponseData.md)
 - [NavigateShipRequest](docs/NavigateShipRequest.md)
 - [NegotiateContract200Response](docs/NegotiateContract200Response.md)
 - [NegotiateContract200ResponseData](docs/NegotiateContract200ResponseData.md)
 - [OrbitShip200Response](docs/OrbitShip200Response.md)
 - [OrbitShip200ResponseData](docs/OrbitShip200ResponseData.md)
 - [PatchShipNav200Response](docs/PatchShipNav200Response.md)
 - [PatchShipNav200ResponseData](docs/PatchShipNav200ResponseData.md)
 - [PatchShipNavRequest](docs/PatchShipNavRequest.md)
 - [PurchaseCargo201Response](docs/PurchaseCargo201Response.md)
 - [PurchaseCargoRequest](docs/PurchaseCargoRequest.md)
 - [PurchaseShip201Response](docs/PurchaseShip201Response.md)
 - [PurchaseShip201ResponseData](docs/PurchaseShip201ResponseData.md)
 - [PurchaseShipRequest](docs/PurchaseShipRequest.md)
 - [RefuelShip200Response](docs/RefuelShip200Response.md)
 - [RefuelShip200ResponseData](docs/RefuelShip200ResponseData.md)
 - [RefuelShipRequest](docs/RefuelShipRequest.md)
 - [Register201Response](docs/Register201Response.md)
 - [Register201ResponseData](docs/Register201ResponseData.md)
 - [RegisterRequest](docs/RegisterRequest.md)
 - [RemoveModule201Response](docs/RemoveModule201Response.md)
 - [RemoveMount201Response](docs/RemoveMount201Response.md)
 - [RemoveMount201ResponseData](docs/RemoveMount201ResponseData.md)
 - [RemoveMountRequest](docs/RemoveMountRequest.md)
 - [RemoveShipModuleRequest](docs/RemoveShipModuleRequest.md)
 - [RepairShip200Response](docs/RepairShip200Response.md)
 - [RepairShip200ResponseData](docs/RepairShip200ResponseData.md)
 - [RepairTransaction](docs/RepairTransaction.md)
 - [ScannedShip](docs/ScannedShip.md)
 - [ScannedShipEngine](docs/ScannedShipEngine.md)
 - [ScannedShipFrame](docs/ScannedShipFrame.md)
 - [ScannedShipMountsInner](docs/ScannedShipMountsInner.md)
 - [ScannedShipReactor](docs/ScannedShipReactor.md)
 - [ScannedSystem](docs/ScannedSystem.md)
 - [ScannedWaypoint](docs/ScannedWaypoint.md)
 - [ScrapShip200Response](docs/ScrapShip200Response.md)
 - [ScrapShip200ResponseData](docs/ScrapShip200ResponseData.md)
 - [ScrapTransaction](docs/ScrapTransaction.md)
 - [SellCargo201Response](docs/SellCargo201Response.md)
 - [SellCargo201ResponseData](docs/SellCargo201ResponseData.md)
 - [SellCargoRequest](docs/SellCargoRequest.md)
 - [Ship](docs/Ship.md)
 - [ShipCargo](docs/ShipCargo.md)
 - [ShipCargoItem](docs/ShipCargoItem.md)
 - [ShipConditionEvent](docs/ShipConditionEvent.md)
 - [ShipCrew](docs/ShipCrew.md)
 - [ShipEngine](docs/ShipEngine.md)
 - [ShipFrame](docs/ShipFrame.md)
 - [ShipFuel](docs/ShipFuel.md)
 - [ShipFuelConsumed](docs/ShipFuelConsumed.md)
 - [ShipModificationTransaction](docs/ShipModificationTransaction.md)
 - [ShipModule](docs/ShipModule.md)
 - [ShipMount](docs/ShipMount.md)
 - [ShipNav](docs/ShipNav.md)
 - [ShipNavFlightMode](docs/ShipNavFlightMode.md)
 - [ShipNavRoute](docs/ShipNavRoute.md)
 - [ShipNavRouteWaypoint](docs/ShipNavRouteWaypoint.md)
 - [ShipNavStatus](docs/ShipNavStatus.md)
 - [ShipReactor](docs/ShipReactor.md)
 - [ShipRefine201Response](docs/ShipRefine201Response.md)
 - [ShipRefine201ResponseData](docs/ShipRefine201ResponseData.md)
 - [ShipRefine201ResponseDataProducedInner](docs/ShipRefine201ResponseDataProducedInner.md)
 - [ShipRefineRequest](docs/ShipRefineRequest.md)
 - [ShipRegistration](docs/ShipRegistration.md)
 - [ShipRequirements](docs/ShipRequirements.md)
 - [ShipRole](docs/ShipRole.md)
 - [ShipType](docs/ShipType.md)
 - [Shipyard](docs/Shipyard.md)
 - [ShipyardShip](docs/ShipyardShip.md)
 - [ShipyardShipCrew](docs/ShipyardShipCrew.md)
 - [ShipyardShipTypesInner](docs/ShipyardShipTypesInner.md)
 - [ShipyardTransaction](docs/ShipyardTransaction.md)
 - [Siphon](docs/Siphon.md)
 - [SiphonResources201Response](docs/SiphonResources201Response.md)
 - [SiphonResources201ResponseData](docs/SiphonResources201ResponseData.md)
 - [SiphonYield](docs/SiphonYield.md)
 - [SupplyConstruction201Response](docs/SupplyConstruction201Response.md)
 - [SupplyConstruction201ResponseData](docs/SupplyConstruction201ResponseData.md)
 - [SupplyConstructionRequest](docs/SupplyConstructionRequest.md)
 - [SupplyLevel](docs/SupplyLevel.md)
 - [Survey](docs/Survey.md)
 - [SurveyDeposit](docs/SurveyDeposit.md)
 - [System](docs/System.md)
 - [SystemFaction](docs/SystemFaction.md)
 - [SystemType](docs/SystemType.md)
 - [SystemWaypoint](docs/SystemWaypoint.md)
 - [TradeGood](docs/TradeGood.md)
 - [TradeSymbol](docs/TradeSymbol.md)
 - [TransferCargo200Response](docs/TransferCargo200Response.md)
 - [TransferCargoRequest](docs/TransferCargoRequest.md)
 - [WarpShip200Response](docs/WarpShip200Response.md)
 - [WarpShip200ResponseData](docs/WarpShip200ResponseData.md)
 - [Waypoint](docs/Waypoint.md)
 - [WaypointFaction](docs/WaypointFaction.md)
 - [WaypointModifier](docs/WaypointModifier.md)
 - [WaypointModifierSymbol](docs/WaypointModifierSymbol.md)
 - [WaypointOrbital](docs/WaypointOrbital.md)
 - [WaypointTrait](docs/WaypointTrait.md)
 - [WaypointTraitSymbol](docs/WaypointTraitSymbol.md)
 - [WaypointType](docs/WaypointType.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="AgentToken"></a>
### AgentToken

- **Type**: Bearer authentication (JWT)

<a id="AccountToken"></a>
### AccountToken

- **Type**: Bearer authentication (JWT)

