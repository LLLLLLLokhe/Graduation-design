<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <!--

    <el-table-column
      prop="newsDate"
      label="预警时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    -->
    <el-table-column
      prop="newsDate"
      label="预警时间"
      width="180" 
      align="center">
    </el-table-column>
    <el-table-column
      prop="newsHeader"
      label="预警类型"
      width="120" 
      align="center">
    </el-table-column>
    <el-table-column
      prop="news"
      label="预警信息"
      width="300" 
      align="center">
    </el-table-column>
    <el-table-column
      prop="newsResult"
      label="处理结果"
      width="120" 
      align="center">
    </el-table-column>
    <el-table-column
      prop="newsHandled"
      label="是否已处理"
      width="120" 
      align="center">
    </el-table-column>
    <el-table-column
      align="center" 
      label="操作"
      show-overflow-tooltip>
      <el-button @click="toggleSelection()">处理</el-button>
      &nbsp;
      <el-button @click="toggleSelection()">删除</el-button>
    </el-table-column>
  </el-table>
  <!--
  -->
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">批量处理</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="toggleSelection()">删除已处理</el-button>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }, {
          newsDate: '2016-05-03 23:23:23',
          newsHeader: '安防预警',
          news: '有人从前门进入',
          newsResult: '友人来访',
          newsHandled: 'true'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleButton(val){
        
      }
    }
  }
</script>
