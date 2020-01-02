<template>
<div class="my">
  <h3 style="margin-left:5%">基本资料</h3>
  <div>
    <div class="userPhoto">
      <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </div>
  <div class="userMessage">
  <el-input
  placeholder="用户123"
  v-model="userid"
  :disabled="true">
</el-input>
  <el-input v-model="uname" placeholder="昵称xxx"></el-input>
  <el-input v-model="userphone" placeholder="手机号xxxxx"></el-input>  
  </div>  
  </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        imageUrl: '',
        userid:'',
        uname:'',
        userphone:'',
        input: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #6d6464;
    
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #12171f;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .userPhoto{
    margin-left: 5%;
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 0;
  }
  .userMessage{
    /* float: right; */
    width: 300px;
    height: 200px;
    margin-left: 0px;
  }
</style>