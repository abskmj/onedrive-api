# OneDrive API Wrapper for Nodejs
This is a wrapper for [OneDrive APIs](https://dev.onedrive.com/getting-started.htm) implemented using ES6 classes.

Each set of APIs related to drive, items are implemented inside separate clients. All API calls are made using [Request NPM](https://www.npmjs.com/package/request), therefore all client methods will return a `response` object of `request` module.

# DriveClient

| Method | Description |
| :--- | :--- |
| `constructor(accessToken)` | Create an instance of client by passing an valid access token. |
| `getDefaultDrive(callback)` | Get meta data for the default drive |
| `getDrive(driveId,callback)` | Get meta data for a drive by its ID |
| `listDrives(callback)` | Get an array of drives with meta data |
| `getRootFolderOfDefaultDrive(callback)` | Get meta data of root folder of the default drive | 
| `getRootItemsOfDefaultDrive(callback)` | Get an array of items in root folder of the defaut drive |


## Example using Callback

```javascript
let Drive = require('../index').Drive;
let drive = new Drive(accessToken);

drive.getDefaultDrive((error, response) => {
    if(error){
        return console.error(error);
    }

    if(response.statusCode === 200){
        console.log(response.body);
    }
    else{
        console.log(response.statusCode);
    }
});
```

## Example using Promise

```javascript
let Drive = require('../index').Drive;
let drive = new Drive(accessToken);

drive.getDefaultDrive().then((response) => {
    if(response.statusCode === 200){
        console.log(response.body);
    }
    else{
        console.log(response.statusCode);
    }
}, (error) => {
    console.error(error);
});
```