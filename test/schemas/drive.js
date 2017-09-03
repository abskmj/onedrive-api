module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "drive resource schema",
    "type": "object",
    "required": [
        "id"
    ],
    "properties": {
        "id": {
            "type": "string"
        },
        "driveType": {
            "type": "string"
        }
    }
}