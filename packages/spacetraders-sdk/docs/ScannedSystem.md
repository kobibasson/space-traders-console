# ScannedSystem

Details of a system was that scanned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol of the system. | [default to undefined]
**sectorSymbol** | **string** | Symbol of the system\&#39;s sector. | [default to undefined]
**type** | [**SystemType**](SystemType.md) |  | [default to undefined]
**x** | **number** | Position in the universe in the x axis. | [default to undefined]
**y** | **number** | Position in the universe in the y axis. | [default to undefined]
**distance** | **number** | The system\&#39;s distance from the scanning ship. | [default to undefined]

## Example

```typescript
import { ScannedSystem } from 'spacetraders-sdk';

const instance: ScannedSystem = {
    symbol,
    sectorSymbol,
    type,
    x,
    y,
    distance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
