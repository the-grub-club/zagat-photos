### Restful API Routes

| Endpoint                 | Type   | Operation                                          |
| ------------------------ | ------ | -------------------------------------------------- |
| `/restaurants/:id/photos` | GET    | Get photos for a specific restaurant               |
| `/photos/:id` | POST   | Add a new photo for a specific restaurant          |
| `/photos/:id` | PUT    | Update an existing photo for a specific restaurant |
| `/photos/:id` | DELETE | Delete a photo for a specific restaurant           |

## **PHOTOS MODULE**

Photos of restaurants

### API

## GET

Endpoint: `/restaurants/:id/photos`

- This request will get all the photos for a specific restaurant

**Success Response**:

- An array of objects containing all the bookings for room with param `id`.
- Code: 200
- Expected Content:

```
{
  imgId: 10,
  resId: 2,
  inResId: 7,
  imgUrl: 'http://wang-guan.com/o/20.jpg'
}
```

**Error Response**:

- Code: 400
- Code: 404


## POST

### Creating a photo record

Endpoint: `/photos/:id`

**Success Response:**

- Code: 201
- Data Input: Object in application/json format

```
{
  resId: 2,
  inResId: 7,
  imgUrl: 'http://wang-guan.com/o/20.jpg'
}
```

**Error Response:**

- Code: 403
- Code: 500


## PUT

### Updating a photo for a restaurant

Endpoint: `/photos/:id`

**Success Response:**

- Code: 201
- Data Input: Object in application/json format

```
{
  resId: 2,
  inResId: 7,
  imgUrl: 'http://wang-guan.com o/20.jpg'
}
```

**Error Response:**

- Code: 403
- Code: 500


## DELETE

### Deleting a photo record

Endpoint: `/photos/:id`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 500
