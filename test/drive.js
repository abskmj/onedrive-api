let chai = require('chai');
chai.use(require('chai-json-schema'));

let assert = chai.assert;

let driveSchema = require('./schemas/drive.js');
let itemSchema = require('./schemas/item.js');

let accessToken = require('./config.json').accessToken;

let Drive = require('../index').Drive;
let drive = new Drive(accessToken);

describe('drive', () => {
    describe('.getDefaultDrive()', () => {
        it('should return a drive object', (done) => {
            drive.getDefaultDrive((error, response) => {
                assert.isNull(error, 'no error occurred while calling api');
                assert(response.statusCode === 200, 'api returned a success response code');
                assert.exists(response.body, 'api returned a body');
                assert.jsonSchema(JSON.parse(response.body), driveSchema);
                done();
            });
        });
    });

    describe('.getDrive()', () => {
        it('should return a drive object', (done) => {
            drive.getDefaultDrive((error, response) => {
                assert.isNull(error, 'no error occurred while calling api');
                assert(response.statusCode === 200, 'api returned a success response code');
                assert.exists(response.body, 'api returned a body');
                assert.jsonSchema(JSON.parse(response.body), driveSchema);

                drive.getDrive(JSON.parse(response.body).id, function (error, response) {
                    assert.isNull(error, 'no error occurred while calling api');
                    assert(response.statusCode === 200, 'api returned a success response code');
                    assert.exists(response.body, 'api returned a body');
                    assert.jsonSchema(JSON.parse(response.body), driveSchema);
                    done();
                });
            });
        });
    });

    describe('.listDrives()', () => {
        it('should return a list of drive objects', (done) => {
            drive.listDrives((error, response) => {
                assert.isNull(error, 'no error occurred while calling api');
                assert(response.statusCode === 200, 'api returned a success response code');
                assert.exists(response.body, 'api returned a body');

                let drives = JSON.parse(response.body).value;

                for (let index in drives) {
                    assert.jsonSchema(drives[index], driveSchema);
                }

                done();
            });
        });
    });

    describe('.getRootFolderOfDefaultDrive()', () => {
        it('should return a item object', (done) => {
            drive.getRootFolderOfDefaultDrive((error, response) => {
                assert.isNull(error, 'no error occurred while calling api');
                assert(response.statusCode === 200, 'api returned a success response code');
                assert.exists(response.body, 'api returned a body');
                assert.jsonSchema(JSON.parse(response.body), itemSchema);
                done();
            });
        });
    });

    describe('.getRootItemsOfDefaultDrive()', () => {
        it('should return a list of item objects', (done) => {
            drive.getRootItemsOfDefaultDrive((error, response) => {
                assert.isNull(error, 'no error occurred while calling api');
                assert(response.statusCode === 200, 'api returned a success response code');
                assert.exists(response.body, 'api returned a body');

                let items = JSON.parse(response.body).value;

                for (let index in items) {
                    assert.jsonSchema(items[index], itemSchema);
                }
                done();
            });
        });
    });
});