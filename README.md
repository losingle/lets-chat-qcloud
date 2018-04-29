# Let's Chat - QCloud Plugin

Add QCloud file support to [Let's Chat](http://sdelements.github.io/lets-chat/).

### Install

```
npm install lets-chat-qcloud
```

### Configure

##### YAML

Add (and customize) these settings to your ```settings.yml``` file:

```yml
files:
  enable: true
  provider: qcloud

  qcloud:
    appId: appId
    accessKeyId: AK....
    secretAccessKey: C2C....
    bucket: bucket-name
    region: region-xml-name

```

##### Environment Variables

Alternatively, configure using environment variables:

| YAML Path | Env Variable |
|-----------|--------------|
| files.enable | LCB_FILES_ENABLE |
| files.provider | LCB_FILES_PROVIDER |
| files.qcloud.accessKeyId | LCB_FILES_QCLOUD_ACCESS_KEY_ID |
| files.qcloud.secretAccessKey | LCB_FILES_QCLOUD_SECRET_ACCESS_KEY |
| files.qcloud.bucket | LCB_FILES_QCLOUD_BUCKET |
| files.qcloud.region | LCB_FILES_QCLOUD_REGION |



##### Welcome to register QCloud for my customer

[qcloud.com](https://partners.cloud.tencent.com/invitation/1000011929795994fcc1b6900)

