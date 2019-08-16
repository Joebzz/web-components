# sw-film-details



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description          | Type     | Default     |
| -------- | --------- | -------------------- | -------- | ----------- |
| `filmId` | `film-id` | The id for the film  | `number` | `1`         |
| `url`    | `url`     | The URL for the film | `string` | `undefined` |


## Dependencies

### Used by

 - [sw-film-list](..\sw-film-list)

### Depends on

- [sw-person-details](..\sw-person-details)

### Graph
```mermaid
graph TD;
  sw-film-details --> sw-person-details
  sw-film-list --> sw-film-details
  style sw-film-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
