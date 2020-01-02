<template>
  <div class="chart-container">
    {{logsList}}
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/pages/data/HistoryData/LineMarker'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LineChart',
  components: { Chart },
  data() {
      return {
        
      };
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
}
</script>

<style scoped>
.chart-container{
  width: 100%;
  height: calc(100vh - 84px);
}
</style>