# Construction

The construction details of a waypoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The symbol of the waypoint. | [default to undefined]
**materials** | [**Array&lt;ConstructionMaterial&gt;**](ConstructionMaterial.md) | The materials required to construct the waypoint. | [default to undefined]
**isComplete** | **boolean** | Whether the waypoint has been constructed. | [default to undefined]

## Example

```typescript
import { Construction } from 'spacetraders-sdk';

const instance: Construction = {
    symbol,
    materials,
    isComplete,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
