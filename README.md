# Plume API

## Fetch studios and rooms counts per place

* Endpoint: `GET /counts`
* Response:
```json
{
    "campusCount": 0,
    "piletRenaudCount": 0,
    "studentsPlace4UCount": 0
}
```

## Get complete studios and rooms list (not implemented yet)

* Endpoint: `GET /{place}/rooms` (place can be campus, pilet-renaud, studentsplace4u).
* Response:
```json
[RoomData, RoomData, StudioData]
```
