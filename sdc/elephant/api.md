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

Endpoint: `/restaurant/:id`

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

Endpoint: `/restaurant/:id/photos`

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

- Code: 404 or 400

##### POST

Endpoint: `/restaurant`

- This request will store the updated picture that the user have put into the database.

- Create a new source which updates the database and save the new data into the database.
- If a POST request is successful, it will return a http request code of 201.
- If an error occurs, it will respond with a 501(Requested HTTP operation not supported.)

```
{
    id: "3dc952a0-88ab-11e9-ade2-65e9db81cbe7",
    id_r : 10,
    pic_id: 1,
    resturant: Taco Bowls,
    url: 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg',
    timestamp: '2019-08-08',
    dislike: 0
}
```

##### POST

Endpoint: `/restaurant/:id/photos`

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
