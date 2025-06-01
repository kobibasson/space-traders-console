# Meta

Meta details for pagination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Shows the total amount of items of this kind that exist. | [default to undefined]
**page** | **number** | A page denotes an amount of items, offset from the first item. Each page holds an amount of items equal to the &#x60;limit&#x60;. | [default to 1]
**limit** | **number** | The amount of items in each page. Limits how many items can be fetched at once. | [default to 10]

## Example

```typescript
import { Meta } from 'spacetraders-sdk';

const instance: Meta = {
    total,
    page,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
