<template>
  <div :class="className" style="width='20%'"/>
</template>
<script>
import echarts from 'echarts'
require('echarts/lib/chart/gauge')
import resize from './mixins/resize'
export default {
    
  methods:{
      
      option : {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
    
      series: [
        {
            name: '湿度',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 30, name: '当前湿度'}]
        }
      ]
      
      
    },
  }
}
</script>