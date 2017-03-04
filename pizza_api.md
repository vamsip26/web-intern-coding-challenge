Using the Pizza API
===========================

The API is hosted at `http://shipt-pizza-api.herokuapp.com`.

Alternatively, if you're feeling frisky, you can clone the repository yourself
and run the API locally:

```
git clone https://github.com/newshipt/pizza.git
cd pizza
bundle install
rackup
```

⚠️ **NOTE**: the API is built using the Ruby framework Sinatra. If you plan on
running it locally, you will need to make sure you have `ruby` installed on your
system.


Endpoints
---------------

Currently there are three API endpoints

- INDEX: returns all locations `api/v1/pizzerias`
- SHOW: returns specific location by id `api/v1/pizzerias/:some_pizzeria_id`
- SEARCH: returns all properties for valid params `api/v1/properties/search?some_param=some query`

The first two are pretty self-explanatory.

Search will currently allow for any property param listed below:

- city
- pizzeria
- website
- address
- marker-size
- marker-color
- marker-symbol

EXAMPLE SEARCH QUERY: `api/v1/properties/search?pizzeria=lucky pie`

Search will dynamically take params allowing you to filter your results to the 'n'th degree.
- e.g. `api/v1/properties/search?city=oakland&pizzeria=nicks`

If you give it an invalid param, e.g `api/v1/properties/search?cats=grumpy`, or
there are no results for the query, e.g, `api/v1/properties/search?city=middle
of nowhere`, the API will return an empty array.


### Example JSON Return

Given this search param: `http://localhost:4567/api/v1/properties/search?city=oakland`

```json
[
  {
    "type": "Feature",
    "properties": {
      "city": "Oakland",
      "pizzeria": "Hi-Life",
      "website": "http://www.hilifeoakland.com",
      "address": "400 15th St",
      "marker-size": "medium",
      "marker-color": "ffff00",
      "marker-symbol": "restaurant"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.2694895,
        37.805068
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "city": "Oakland",
      "pizzeria": "Zachary's",
      "website": "http://zacharys.com/locations/oakland",
      "address": "5801 College Ave.",
      "marker-size": "medium",
      "marker-color": "ffff00",
      "marker-symbol": "restaurant"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.2521705,
        37.8462724
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "city": "Oakland",
      "pizzeria": "Nicks",
      "website": "http://oaklandstylepizza.com/",
      "address": "6211 Shattuck Ave.",
      "marker-size": "medium",
      "marker-color": "ffff00",
      "marker-symbol": "restaurant"
    },
    "geometry": {
    "type": "Point",
    "coordinates": [
      -122.2657076,
      37.8482871
      ]
    }
  }
]
```
