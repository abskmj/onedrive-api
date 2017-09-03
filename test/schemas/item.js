module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "identitySet": require('./identitySet')
    },
    "title": "item resource schema",
    "type": "object",
    "required": [
        "id"
    ],
    "properties": {
        "id": {
            "type": "string"
        },
        "createdBy": {
            "$ref": "#/definitions/identitySet"
        },
        "createdDateTime": {
            "type": "string"
        }
    }
}