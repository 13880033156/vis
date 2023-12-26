//GDP表
(function(){
//     //实例化对象
 var myChart =echarts.init(document.querySelector(".bar .chart"));
    //指定配置项和数据
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
  
      legend: {
        data: ['巴GDP', '以GDP', '巴GDP增长率','以GDP增长率'],
        textStyle: {
          color: 'white'
      }
      },
      xAxis: [
        {
          type: 'category',
          data:  ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021','2022'],
          axisPointer: {
            type: 'shadow'
          },
          "axisLine": {
            "lineStyle": {
                "color": "white" // 设置 x 轴线的颜色为红色
            }
        }
        }
      ],
      yAxis: [
        {
          type: 'log',
          name: 'GDP',
          "axisLine": {
            "lineStyle": {
                "color": "white" 
            }
        }
        },
        {
          type: 'value',
          name: 'GDP增长率',
          axisLabel: {
            formatter: '{value} %'
          },
          "axisLine": {
            "lineStyle": {
                "color": "white" 
            }
        }
        }
      ],
      series: [
        {
          name: '以GDP',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 十亿美元';
            }
            
          },
          data: [
            136.035,134.637,125.06,131.299,139.974,147.084,158.67,184.053,220.53,211.968,238.364,266.792,262.282,297.733,314.33,303.414,322.103,358.245,376.692,402.471,413.268,488.527,522.033
          ]
        },
        {
          name: '巴GDP',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 十亿美元';
            }
          },
          data: [
            4.314, 4.004, 3.556, 3.968, 4.603, 5.126, 5.348, 5.816, 7.31, 8.086, 9.681,11.186,12.208,13.516,13.99,13.972,15.405,16.128,16.277,17.134,15.532,18.109,19.112
          ]
        },
        {
          name: '巴GDP增长率',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' %';
            }
          },
          data: [-8.56, -9.31, -12.49, 14.02, 10.34, 11.29, -3.9, 6.59, 7.43, 8.59, 8.1, 9.6,6.1,2.22,-0.16,3.72,4.71,3.14,0.91,0.95,-11.32,7.05]
        },
        {
          name: '以GDP增长率',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' %';
            }
          },
          data: [8.67,0.06,-0.01,1.39,4.78,4.13,5.58,6.03,3.25,0.88,5.67,5.56,2.59,4.42,3.92,2.49,4.52,4.28,4.07,4.16,-1.86,8.61]
        }

      ]
    };
      //把配置项给实例对象
      myChart.setOption(option);
      //让图标跟随屏幕自动去适应
      window.addEventListener("resize",function(){
        myChart.resize();
      });
})();





//人口
(function(){
  //     //实例化对象
   var myChart =echarts.init(document.querySelector(".bar2 .chart"));
      //指定配置项和数据
      var option = {
       
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['以色列', '巴勒斯坦'],
          textStyle: {
            color: 'white'
        }
        },
       
        calculable: true,
        xAxis: [
          {
            type: 'category',
            "axisLine": {
              "lineStyle": {
                  "color": "white" 
              }
          },
            // prettier-ignore
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021','2022']
          }
        ],
        yAxis: [
          {
            type: 'value',
            "axisLine": {
              "lineStyle": {
                  "color": "white" 
              }
          }
          }
        ],
        series: [
          {
            name: '以色列',
            type: 'line',
            data: [
              604.9,616.5,626.3,668.4,683,692.5,711.2,729.5,741.3,760.2,774.6,790.7,808.1,819.2,829.9,843.1,854.8,871.2,897.2,913.6,922.7,939,950.6
            ],
          },
          {
            name: '巴勒斯坦',
            type: 'line',
            data: [
              337.4, 340, 342.1,369.3, 379.1, 389, 376.2,  386.5, 396.6, 401.8,407,419.8,429.7,440.4,453,469.2,476.8,481.6,485.7,489.5,493.4,536.8,504.3
            ],
          }
        ]
      };
        //把配置项给实例对象
        myChart.setOption(option);
        //让图标跟随屏幕自动去适应
        window.addEventListener("resize",function(){
          myChart.resize();
        });
  })();


  //出生率死亡率
   // 确保页面加载完成后执行初始化
   document.addEventListener("DOMContentLoaded", function() {
    // 初始化 ECharts 图表
    var birthChartContainer = document.querySelector(".birthChartContainer");
    var birthChart = echarts.init(birthChartContainer);

    // 假设这里是你的图表配置
    var birthOption = {
      
        // 其他出生率图表配置...
        xAxis: {
type: 'category',
data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
"axisLine": {
  "lineStyle": {
      "color": "white" 
  }
}
},
yAxis: {
type: 'value',
"axisLine": {
  "lineStyle": {
      "color": "white" 
  }
}
},
series: [
{
data: [150, 230, 224, 218, 135, 147, 260],
type: 'line'
}
]
    };

    // 使用 setOption 设置图表的配置项
    birthChart.setOption(birthOption);
});







// 出生率死亡率
function changeChart() {
    var selector = document.getElementById('chartSelector');
    var selectedValue = selector.value;

    // 根据用户的选择显示对应的图表
    if (selectedValue === 'div1') {
        document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
    } else if (selectedValue === 'div2') {
        document.getElementById('div1').style.display = 'none';
        document.getElementById('div2').style.display = 'block';

        // 初始化 ECharts 图表
        var deathChartContainer = document.querySelector(".deathChartContainer");
        var deathChart = echarts.init(deathChartContainer);

        // 假设这里是你的图表配置
        var deathOption = {
          
            // 其他婴儿死亡率图表配置...
            xAxis: {
type: 'category',
data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
"axisLine": {
  "lineStyle": {
      "color": "white" 
  }
}
},
yAxis: {
type: 'value',
"axisLine": {
  "lineStyle": {
      "color": "white" 
  }
}
},
series: [
{
data: [150, 230, 224, 218, 135, 147, 260],
type: 'bar'
}
]
        };

        // 使用 setOption 设置图表的配置项
        deathChart.setOption(deathOption);
    }
};



//遇难人口
(function(){
  //     //实例化对象
   var myChart =echarts.init(document.querySelector(".dchart"));
      //指定配置项和数据
      var   option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                 formatter: function (params, ticket, callback) {
                                   console.log(params)
                                   var res = params[0].name ;
                                   for (var i = 0, l = params.length; i < l; i++) {
                                       res += '&lt;br/&gt;' + params[i].seriesName + ' : ' + Math.abs(params[i].value) ;     
                                       }
                                   setTimeout(function () {
                                       // 仅为了模拟异步回调
                                       callback(ticket, res);
                                   }, 500)
                                   return 'loading...';
                               }
            },
            legend: {
                data:[ '巴勒斯坦男', '巴勒斯坦女','以色列男','以色列女'],
                textStyle: {
                  color: 'white'
              }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    axisLabel : { formatter: function (value){return Math.abs(value);//显示的数值都取绝对值
                } 
        },
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['0~18岁','18-60岁','60+岁']
                }
            ],
            series : [
                {
                    name:'巴勒斯坦男',
                    type:'bar',
                    stack: 'one',
                    color:'#006400',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',

                        }
                    },
                   data:[2033, 6643, 167]
                },
                {
                    name:'巴勒斯坦女',
                    type:'bar',
                    stack: 'two',
                    color:'#91cc75',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',

                        }
                    },
                   data:[462, 533, 93]
                },
                {
                    name:'以色列男',
                    type:'bar',
                    stack: 'one',
                    color:' #5470c6',
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                           formatter:function(v){return Math.abs(v.data)}
                        }
                    },
                   data:[-47, -166, -127]
                },
                {
                    name:'以色列女',
                    type:'bar',
                    stack: 'two',
                    color:'#54ffff',
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                           formatter:function(v){return Math.abs(v.data)}
                        }
                    },
                   data:[-20, -68, -3]
                }
            ]
        };
        //把配置项给实例对象
        myChart.setOption(option);
        //让图标跟随屏幕自动去适应
        window.addEventListener("resize",function(){
          myChart.resize();
        });
  })();
