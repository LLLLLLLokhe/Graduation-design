<template>
    
        <el-row>
            <el-col justify=center>
                <div class="test1" id="myChart1" :style="{width: '250px',height: '250px'}"></div>
                <div class="test1" id="myChart2" :style="{width: '250px',height: '250px'}"></div>
                <div class="test1" id="myChart3" :style="{width: '250px',height: '250px'}"></div>
                <div class="test1" id="myChart4" :style="{width: '250px',height: '250px'}"></div>
                <div class="test1" id="myChart5" :style="{width: '250px',height: '250px'}"></div>
            </el-col>
        </el-row>
        
    
</template>
<script>

export default {
    
   
    data(){
        return {};
    },
     mounted(){
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
    this.drawLine5();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart1.setOption({
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    
    series: [
        {
            name: '温度',
            type: 'gauge',
            title:{
                fontWeight: 'bolder',
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 15
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            detail: {
                formatter:'{value}°C',
                textStyle: {
                    fontSize: 20
                },
            },
            data: [{value: 20, name: '温度'}]
        }
    ]
});
    },
    drawLine2(){
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        myChart2.setOption({
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    
    series: [
        {
            name: '湿度',
            type: 'gauge',
            title:{
                fontWeight: 'bolder',
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 15
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            detail: {
                formatter:'{value}%',
                textStyle: {
                    fontSize: 20
                },
            },
            data: [{value: 50, name: '湿度'}]
        }
    ]
});
    },
    drawLine3(){
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    
    series: [
        {
            name: '二氧化碳',
            type: 'gauge',
            min: 0,
            max: 3000,
            splitNumber: 6,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            title : {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 15,
                
            },
            detail: {
                textStyle: {
                    fontSize: 15
                },
                formatter:'{value}PPM',  
            },
            data: [{value: 1000, name: '二氧化碳'}]
        }
    ]
});
    },
    drawLine4(){
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        myChart4.setOption({
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                 {
            name: '烟雾',
            type: 'gauge',
            min: 0,
            max: 1,
            splitNumber: 1,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 5,
                length: 10,        // 属性length控制线长
                lineStyle: {        // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '无';
                        case '1' : return '有';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:8
            },
            title : {
                fontWeight: 'bolder',
                fontSize: 15,
            },
            detail : {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '无';
                        case '1' : return '有';
                    }
                },
                textStyle: {
                    fontSize: 20
                },
            },
            data:[{value: 0, name: '烟雾'}]
        },
            ]
        })
    },
    drawLine5(){
        let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
        myChart5.setOption({
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                 {
            name: '可燃气体',
            type: 'gauge',
            min: 0,
            max: 1,
            splitNumber: 1,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 5,
                length: 10,        // 属性length控制线长
                lineStyle: {        // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '无';
                        case '1' : return '有';
                    }
                },
                
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:8
            },
            title : {
                fontWeight: 'bolder',
                fontSize: 15,
            },
            detail : {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '无';
                        case '1' : return '有';
                    }
                },
                textStyle: {
                    fontSize: 20
                },
            },
            data:[{value: 1, name: '可燃气体'}]
        },
            ]
        })
    },
  }
}
</script>
<style scoped>
    .test1{
        float: left;
        
    }
</style>>
