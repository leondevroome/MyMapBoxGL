//mapbox token
//mapboxgl.accessToken = 'pk.eyJ1Ijoib21lZ2FjeWJyYW4iLCJhIjoiY2pzMXNhZW93MXF5YzQzbjFlaHBndWFqNyJ9.gKN6PF8m8OyO-8r5txyd0A';

var mygeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Odeonpark"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.226037502288818,
          52.374197504294074
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Aeres Hogeschool"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.2187418937683105,
          52.37147263072025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Station Almere Centrum"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.219085216522217,
          52.3752585874657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gemeente Almere"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.22174596786499,
          52.37161673882133
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Supermarkt"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.2168965339660645,
          52.3709879000206
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Subway"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.21975040435791,
          52.37464290033491
        ]
      }
    }
  ]
}

var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
    "sources":{
      "wm_visdata": {
            "type": "vector",
            "url": "https://ta.webmapper.nl/wm/styles/tile.json"
        },
    "cartiqo":{
        "type": "vector",
        "tiles":  [
            "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
        ]
    }
},
"layers":[
  {
    "id": "admin-hover",
    "type": "line",
    "source": "cartiqo",
    "source-layer": "boundaries",
    "maxzoom": 22,
    "minzoom": 0,
    "filter": ["==", "originalid", ""],
    "paint": {
        "line-color": "#eeee00",
        "line-width": 15
    }
},
    {
        "id":  "background",
        "type": "background",
        "paint": {
            "background-color":"#FFFFFF"
            }
    },

    {
        "id": "admin",
        "type": "line",
        "source": "cartiqo",
        "source-layer": "boundaries",
        "maxzoom": 22,
        "minzoom": 0,
        "filter": ["==", "type", "province"],
        "paint": {
            "line-color": "#54D8CC",
            "line-width": 5
        }
    },
    {
      "id": "buildings",
      "type": "fill",
      "source": "cartiqo",
      "source-layer":"builtup",
      "paint": {
          "fill-color": "#c0c0c0",
          "fill-outline-color": "#ffffff"
      }
  },
  {
    "id": "infrastructure",
    "type": "fill",
    "source": "cartiqo",
    "source-layer":"infrastructure",
    "paint": {
        "fill-color": "#e34040",
    }
},
  {
            "id": "infrastructure_areas",
            "source": "wm_visdata",
            "source-layer": "infrastructure",
            "type": "fill",
            "filter":[ "all",
                 [
                    "!=",
                    ["get","type"],
                    "road"
                ],
                [
                    "==",
                    ["get","tunnel"],
                    "false"
                ]
            ],
            "paint": {
                "fill-color": [
                    "match",
                    [
                        "get",
                        "type"
                    ],
                    "railway",
                    "#fbfbfb",
                    "#fbfbfb"
                ]
            }
        },
        {
            "id": "infrastructure_road-casing",
            "source": "wm_visdata",
            "source-layer": "infrastructure",
            "type": "line",
            "filter": [
                "==",
                ["get","type"],
                "road"
            ],
            "paint": {
                "line-color": "hsl(0,0%,82%)",
                "line-width": 1.5
            }
        },
        {
            "id": "infrastructure_road",
            "source": "wm_visdata",
            "source-layer": "infrastructure",
            "type": "fill",
            "filter": [
                "==",
                [
                    "get",
                    "type"
                ],
                "road"
            ],
            "paint": {
                "fill-color": "#fbfbfb"
            }
        },
        {
            "id": "infrastructure_parking-casing",
            "source": "wm_visdata",
            "source-layer": "infrastructure",
            "type": "line",
            "filter": [
                "==",
                [
                    "get",
                    "type"
                ],
                "parking"
            ],
            "paint": {
                "line-color": "hsl(0,0%,82%)",
                "line-width": 1.5
            }
        },
        {
            "id": "infrastructure_parking",
            "source": "wm_visdata",
            "source-layer": "infrastructure",
            "type": "fill",
            "filter": [
                "==",
                [
                    "get",
                    "type"
                ],
                "parking"
            ],
            "paint": {
                "fill-color": "#f4f4f4"
            }
        },
    {
      "id": "natural",
      "type": "fill",
      "source": "cartiqo",
      "source-layer":"natural",
      "minzoom": 7,
      "maxzoom": 20,
      "paint": {
          "fill-color": "#008000",
          "fill-outline-color":"#FFFFFF"
        }
      },
      {
        "id": "agriculture",
        "type": "fill",
        "source": "cartiqo",
        "source-layer":"agricultural",
        "paint": {
            "fill-color": "#00FF00",
            "fill-outline-color":"#FFFFFF"
          }
        },
      {
        "id": "water",
        "type": "fill",
        "source": "cartiqo",
        "source-layer":"water",
        "paint": {
            "fill-color": "#8686ff",
        }
    },

  {
      "id": "roads",
      "type": "line",
      "source": "cartiqo",
      "source-layer":"roads",
      "paint": {
        "line-width": [
                    "interpolate",
                    [
                        "exponential",
                        1.2
                    ],
                    [
                        "zoom"
                    ],
                    13,
                    0,
                    13.5,
                    0.6,
                    14,
                    1.5,
                    20,
                    12
                ],
          "line-color": "#ff9900",
      }
  },

  {
      "id": "railways",
      "type": "line",
      "source": "cartiqo",
      "source-layer":"railways",
      "paint": {
          "line-color": "#FFFF00",
      }
  },
  {
      "id": "place-labels",
      "type": "symbol",
      "source": "cartiqo",
      "source-layer": "labels",
      "filter":
          [
              "==",
              "type",
              "place"
          ],
      "minzoom": 8,
      "maxzoom": 16,
      "layout": {
          "text-allow-overlap": false,
          "text-padding": 1,
          "text-size": 16,
          "text-font":  ["Comfortaa"],
          "text-field": "{name}",
      },
      "paint": {
          "text-halo-blur": 0.5,
          "text-color":"#1d464d",
          "text-halo-width": 1,
          "text-halo-color": "#fff"
      }
  }
]

}

var map = new mapboxgl.Map({
    container: 'map',
    style: mystyle,
    hash: true,
    zoom: 15.99,
    pitch: 50.50,
    bearing: -15.15,
    center: [ 5.227271, 52.374074]
});

// On Load add GeoJSON SOURCE and LAYER
map.on('load', function (e) {
    // ADD GEOJSON SOURCE
    map.addSource('punten', {
        'type': 'geojson',
        'data': mygeoJSON
    });
    // ADD an extra layer
    map.addLayer({
        'id': 'geojson-points',
        'type': 'circle',
        'source': 'punten',
        'layout': {},
        'paint': {
            'circle-color': '#dd3535',
            'circle-radius': 10
        }
    });
});


// Get polygon information
map.on('click', 'geojson-points', function (e) {
console.log(e.features[0]);
new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.name)
    .addTo(map);

});
