# Faction

Faction details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**FactionSymbol**](FactionSymbol.md) |  | [default to undefined]
**name** | **string** | Name of the faction. | [default to undefined]
**description** | **string** | Description of the faction. | [default to undefined]
**headquarters** | **string** | The waypoint in which the faction\&#39;s HQ is located in. | [optional] [default to undefined]
**traits** | [**Array&lt;FactionTrait&gt;**](FactionTrait.md) | List of traits that define this faction. | [default to undefined]
**isRecruiting** | **boolean** | Whether or not the faction is currently recruiting new agents. | [default to undefined]

## Example

```typescript
import { Faction } from 'spacetraders-sdk';

const instance: Faction = {
    symbol,
    name,
    description,
    headquarters,
    traits,
    isRecruiting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
