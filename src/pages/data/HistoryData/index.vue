<template>
  <div style="padding:0px;">
    <el-alert :closable="false" title="">
      <!-- 原则上有多少级路由嵌套就需要多少个<router-view> -->
      <router-view style="width:1200px"/>
    </el-alert>
  </div>
</template>
