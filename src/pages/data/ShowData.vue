
Use /* eslint-disable */ to ignore all warnings in a file.
<template>
  <div class='data-ShowData'>
    <el-row class="float">
      <el-button type="primary" round>刷新数据</el-button>
    </el-row>
    <el-row>
       <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        选择自动刷新时间<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>30秒</el-dropdown-item>
        <el-dropdown-item>1分钟</el-dropdown-item>
        <el-dropdown-item>5分钟</el-dropdown-item>
        <el-dropdown-item>10分钟</el-dropdown-item>
        <el-dropdown-item>30分钟</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-row>
  </div>
  
</template>
<script>
export default {
  name: 'ShowData',
  components: { chart1, chart2 },
}
</script>
<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    float: left;
    margin-left: 50px;
    margin-top: 20px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .float{
    float: left;
    margin-left: 400px;
    margin-top: 10px;
  }
</style>