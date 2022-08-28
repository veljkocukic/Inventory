# API Documentation

## Groups

### POST `/api/gropus`

```
{
    items: Array,       /required/
    name: String,       /required/
    maxItems: Number,
}
```

Single item for array:

```
{
    name: String,       /required/
    quantity: Number,   /required/
    description: String,
    image: String,
    alertLowAt: Number,
    max: Number,
    min: Number ,
}
```

### GET `/api/groups` Get all Groups

### GET `/api/groups` Get Single Group

## Items

### POST `/api/items/:groupId/add`

```
{
    name: String,       /required/
    quantity: Number,   /required/
    description: String,
    image: String,
    alertLowAt: Number,
    max: Number,
    min: Number ,
}
```

### GET `/api/items/:groupId/:itemId` Gets a single item
