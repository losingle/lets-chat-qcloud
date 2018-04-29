var COS = require('cos-nodejs-sdk-v5');
var util = require('./util');
var fs = require('fs');

function Qcloud(options) {
    this.options = options;
    this.getUrl = this.getUrl.bind(this);
    this.save = this.save.bind(this);
}

Qcloud.prototype.getUrl = function(file) {
    var filePath = file._id + '/' + encodeURIComponent(file.name);
    var params = {
        Bucket : this.options.bucket+'-'+this.options.appId,
        Region :this.options.region,
        Key : decodeURIComponent(filePath),
        Sign: true,
    };

    var client = new COS({
        SecretId: this.options.accessKeyId,
        SecretKey: this.options.secretAccessKey
    });

    var url = client.getObjectUrl(params, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });


    return url;
};

Qcloud.prototype.save = function(options, callback) {
    var file = options.file,
        doc = options.doc,
        fileFolder = doc._id,
        filePath = fileFolder + '/' + encodeURIComponent(doc.name);

    var client = new COS({
        SecretId: this.options.accessKeyId,
        SecretKey: this.options.secretAccessKey,
        FileParallelLimit: 3,
        ChunkParallelLimit: 8,
        ChunkSize: 1024 * 1024,
    });

    var filename = decodeURIComponent(filePath);
    var that = this;
    // 调用方法
    util.createFile(file.path, 1024 * 1024, function (err) {
        client.putObject({
            Bucket : that.options.bucket+'-'+that.options.appId,
            Region :that.options.region,
            Key: filename,
            Body: fs.createReadStream(file.path),
            ContentLength: fs.statSync(file.path).size
        }, function (err, data) {
            console.log(err || data);
            fs.unlinkSync(file.path);
            data && callback(null, null, doc);
        });

    });



};

module.exports = Qcloud;
