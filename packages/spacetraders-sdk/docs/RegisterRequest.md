# RegisterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**faction** | [**FactionSymbol**](FactionSymbol.md) |  | [default to undefined]
**symbol** | **string** | Your desired agent symbol. This will be a unique name used to represent your agent, and will be the prefix for your ships. | [default to undefined]
**email** | **string** | Your email address. This is used if you reserved your call sign between resets. | [optional] [default to undefined]

## Example

```typescript
import { RegisterRequest } from 'spacetraders-sdk';

const instance: RegisterRequest = {
    faction,
    symbol,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
