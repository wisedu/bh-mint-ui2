<template>
  <div class="page-field" style="margin-top:45px;">
    <div>
      <!-- <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field> -->
      <mt-file-list :file-list="fileList" label="这里是传进来的标题" @tokenChange="tokenChange" token="123456789"></mt-file-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'page-field',
  data() {
    return {
      fileList: [{
    "id": "7b222cae0a124f3e9575475d262fa43e",
    "name": "51285f66d016092470269b6ad00735fae7cd3491.jpg",
    "deleteUrl": "#",
    "fileUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/7b222cae0a124f3e9575475d262fa43e.do",
    "middleWid": "7b222cae0a124f3e9575475d262fa43e_1",
    "smallWid": "7b222cae0a124f3e9575475d262fa43e_2",
    "middleSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/7b222cae0a124f3e9575475d262fa43e_1.do",
    "smallSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/7b222cae0a124f3e9575475d262fa43e_2.do",
    "ts": "2016-12-20 16:59:38",
    "size": "41212",
    "orderNum": 1,
    "isImage": true
  }, {
    "id": "3efd9d5c00a44181bc9523d06e37201c",
    "name": "51285f66d016092470269b6ad00735fae7cd3491.jpg",
    "deleteUrl": "#",
    "fileUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/3efd9d5c00a44181bc9523d06e37201c.do",
    "middleWid": "3efd9d5c00a44181bc9523d06e37201c_1",
    "smallWid": "3efd9d5c00a44181bc9523d06e37201c_2",
    "middleSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/3efd9d5c00a44181bc9523d06e37201c_1.do",
    "smallSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/3efd9d5c00a44181bc9523d06e37201c_2.do",
    "ts": "2017-01-06 17:20:15",
    "size": "41212",
    "orderNum": 2,
    "isImage": true
  }, {
    "id": "48b1342891d44d0fb44ca6d9e905b65f",
    "name": "6e6bd46aly1farl3bouo8j20fk0fkq3s0.jpg",
    "deleteUrl": "#",
    "fileUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/48b1342891d44d0fb44ca6d9e905b65f.do",
    "middleWid": "48b1342891d44d0fb44ca6d9e905b65f_1",
    "smallWid": "48b1342891d44d0fb44ca6d9e905b65f_2",
    "middleSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/48b1342891d44d0fb44ca6d9e905b65f_1.do",
    "smallSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/48b1342891d44d0fb44ca6d9e905b65f_2.do",
    "ts": "2017-01-06 17:02:37",
    "size": "38516",
    "orderNum": 3,
    "isImage": true
  }, {
    "id": "9a57b7ab333e4d6caddbd3620f923a2f",
    "name": "51285f66d016092470269b6ad00735fae7cd3491.jpg",
    "deleteUrl": "#",
    "fileUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/9a57b7ab333e4d6caddbd3620f923a2f.do",
    "middleWid": "9a57b7ab333e4d6caddbd3620f923a2f_1",
    "smallWid": "9a57b7ab333e4d6caddbd3620f923a2f_2",
    "middleSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/9a57b7ab333e4d6caddbd3620f923a2f_1.do",
    "smallSizeImageUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/9a57b7ab333e4d6caddbd3620f923a2f_2.do",
    "ts": "2017-01-06 17:21:04",
    "size": "41212",
    "orderNum": 4,
    "isImage": true
  }, {
    "id": "653e90f3d8b048ee979f557f9249cfc5",
    "name": "emapDebug.js",
    "deleteUrl": "#",
    "fileUrl": "/emap/sys/emapcomponent/file/getAttachmentFile/653e90f3d8b048ee979f557f9249cfc5.do",
    "ts": "2017-01-06 17:02:42",
    "size": "1291",
    "orderNum": 5,
    "isImage": false
  }]
    };
  },
  methods: {
    tokenChange(val) {
      console.log(val);
    }
    // getFileList() {
    //   axios.get('/mock/fileList.json').then(resp => {
    //     let respData = resp.data;
    //     if (respData.success === true) {
    //       this.fileList = respData.items;
    //     }
    //   });
    // }
  },
  mounted() {
    // this.getFileList();
  }
};
</script>
