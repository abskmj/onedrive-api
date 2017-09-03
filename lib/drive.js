var Client = require('./client');

class Drive extends Client {
    constructor(accessToken = Drive._missing('accessToken')) {
        super(accessToken);
    }

    getDrive(driveId = Drive._missing('driveId'), callback) {
        return this._requestOnedrive({
            uri: `/drives/${driveId}`
        }, callback);
    }

    getDefaultDrive(callback) {
        return this._requestOnedrive({
            uri: '/drive'
        }, callback);
    }

    listDrives(callback) {
        return this._requestOnedrive({
            uri: '/drives'
        }, callback);
    }

    getRootFolderOfDefaultDrive(callback) {
        return this._requestOnedrive({
            uri: '/drive/root'
        }, callback);
    }

    getRootItemsOfDefaultDrive(callback) {
        return this._requestOnedrive({
            uri: '/drive/root/children'
        }, callback);
    }
}

module.exports = Drive;