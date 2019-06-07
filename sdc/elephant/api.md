### Restful API Routes

| Endpoint                 | Type   | Operation                                          |
| ------------------------ | ------ | -------------------------------------------------- |
| `/restaurants/:id`        | GET    | Get a specific restaurant                          |
| `/restaurants/:id/photos` | GET    | Get photos for a specific restaurant               |
| `/restaurants`        | POST   | Add a specific restaurant                          |
| `/photos` | POST   | Add a new photo for a specific restaurant          |
| `/restaurants`        | PUT    | Update an existing restaurant                      |
| `/photos` | PUT    | Update an existing photo for a specific restaurant |
| `/restaurants/:id`        | DELETE | Delete a specific restaurant                       |
| `/photos/:id` | DELETE | Delete a photo for a specific restaurant           |

## **PHOTOS MODULE**

Photos of restaurants

### API

##### GET

Endpoint: `/restaurants/:id`

- This request will get a specific restaurant.

**Success Response**:

- An object containing information about a restaurant with param `id`
- Code: 200
- Expected Content:

```
{
  id: 1,
  name: 'asgard'
}
```

**Error Response**:

- Code: 404 or 400

##### GET

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


##### POST

### Creating a restaurant record

Endpoint: `/restaurants`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 500

### Creating a photo record

Endpoint: `/photos`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 403
- Code: 500


##### PUT

### Updating a restaurant record

Endpoint: `/restaurants`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 500

### Updating a photo for a restaurant

Endpoint: `/photos`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 403
- Code: 500


##### DELETE

### Deleting a restaurant record

Endpoint: `/restaurants/:id`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 500

### Deleting a photo record

Endpoint: `/photos/:id`

**Success Response:**

- Code: 201

**Error Response:**

- Code: 500
