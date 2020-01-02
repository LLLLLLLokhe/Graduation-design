<template>
<div>
  {{logsList}}
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  <el-table
    :data="logsList"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="fId"
      label="记录编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="fTime"
      label="时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="dangerous"
      label="危险等级"
      width="150">
    </el-table-column>
    <el-table-column
      prop="coo"
      label="二氧化碳"
      width="150">
    </el-table-column>
    <el-table-column
      prop="lel"
      label="可燃气体"
      width="150">
    </el-table-column>
    <el-table-column
      prop="smoke"
      label="烟雾"
      width="150">
    </el-table-column>
    <el-table-column
      prop="temperature"
      label="温度"
      width="150">
    </el-table-column>
    <el-table-column
      prop="humidity"
      label="湿度"
      width="150">
    </el-table-column>
  </el-table>
</div>
</template>

<style scoped>
  .el-table .dangerous-row {
    background: hsl(19, 100%, 83%);
  }

  .el-table .normal-row {
    background: hsl(171, 54%, 95%);
  }
</style>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    methods: {
      /*
      "tableRowClassName": function(row,rowIndex) {
        if (row.dangerous === '高'||rowIndex === 3) {
          return 'dangerous-row';
        } else if (row.dangerous === '正常') {
          return 'normal-row';
        }
        return '';
      },
      */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      let logsList = [{
          
        }]
    },
    created(){
      this.findPageLogs();
    },
    computed:{
      ...mapState('historydata',['logsList'])
    },
    methods:{
      ...mapActions('historydata',['findPageLogs'])
    }
    /*
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
    */
  }
</script>