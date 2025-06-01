# GetStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | The current status of the game server. | [default to undefined]
**version** | **string** | The current version of the API. | [default to undefined]
**resetDate** | **string** | The date when the game server was last reset. | [default to undefined]
**description** | **string** |  | [default to undefined]
**stats** | [**GetStatus200ResponseStats**](GetStatus200ResponseStats.md) |  | [default to undefined]
**leaderboards** | [**GetStatus200ResponseLeaderboards**](GetStatus200ResponseLeaderboards.md) |  | [default to undefined]
**serverResets** | [**GetStatus200ResponseServerResets**](GetStatus200ResponseServerResets.md) |  | [default to undefined]
**announcements** | [**Array&lt;GetStatus200ResponseAnnouncementsInner&gt;**](GetStatus200ResponseAnnouncementsInner.md) |  | [default to undefined]
**links** | [**Array&lt;GetStatus200ResponseLinksInner&gt;**](GetStatus200ResponseLinksInner.md) |  | [default to undefined]

## Example

```typescript
import { GetStatus200Response } from 'spacetraders-sdk';

const instance: GetStatus200Response = {
    status,
    version,
    resetDate,
    description,
    stats,
    leaderboards,
    serverResets,
    announcements,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
