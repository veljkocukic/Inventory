# API Documentation

## Auth

### POST `/api/auth/register` REGISTRATION

#### If validation is successfull, the response will be a token to be stored as a bearrer

```
{
    username: String,       /required/ minimal length = 7
    email: String,          /required/
    password: String,       /required/ minimal length = 7
    organizationName:String,
    groups:Array

}
```

### POST `/api/auth/login` LOGIN

#### If validation is successfull, the response will be a token to be stored as a bearrer

```
{
    email: String,          /required/
    password: String,       /required/ minimal length = 7

}
```

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
