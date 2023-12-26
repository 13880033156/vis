 //GDP和农业
   // 确保页面加载完成后执行初始化
   document.addEventListener("DOMContentLoaded", function() {
    // 初始化 ECharts 图表
    var gdpChartContainer = document.querySelector(".gdpChartContainer");
    var gdpChart = echarts.init(gdpChartContainer);

    //gdp图配置项和数据
    var gdpOption = {
      tooltip: {
                trigger: 'axis',
              },
              legend: {
                data: [ '以GDP', '巴GDP','以GDP增长率','巴GDP增长率'],
                textStyle: {
                  color: 'black'
              }
              },
              
              xAxis: [
                {
                  type: 'category',
                  splitLine: {//分割线配置
                    lineStyle: {
                        color: "#000",
                 }
                },
            
                  data:  [ '2000','2001', '2002', '2003', '2004', '2005', '2006','2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021','2022'],
                  axisPointer: {
                    type: 'shadow'
                  },
                  axisLine: {
                    show:true,
                    "lineStyle": {
                        "color": "black" // 设置 x 轴线的颜色为黑色
                    }
                },
                }
              ],
              yAxis: [
                {
                  type: 'log',
                  name: 'GDP(十亿美元)',
                  "axisLine": {
                    "lineStyle": {
                        "color": "black" 
                    }
                }
                },
                {
                  type: 'value',
                  name: 'GDP增长率',
                  axisLabel: {
                    formatter: '{value} %'
                  },
                  splitLine: {
                    lineStyle: {
                        color: 'black', // 设置刻度线颜色为黑色
                        opacity: 0.3    //透明度
                    }
                },
                  "axisLine": {
                    "lineStyle": {
                      type: 'solid',
                        "color": "black" 
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
                  color:'#006400',
                  yAxisIndex: 1,
                  tooltip: {
                    valueFormatter: function (value) {
                      return value + ' %';
                    }
                  },
                  data: [-8.56, -9.31, -12.49, 14.02, 10.34, 11.29, -3.9, 6.59, 7.43, 8.59, 8.1, 9.6,6.1,2.22,-0.16,3.72,4.71,3.14,0.91,0.95,-11.32,7.05,3.9],
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        return params.data < 0 ? 'red' : '#006400';
                      },
                    }
                  }
                },
                {
                  name: '以GDP增长率',
                  type: 'line',
                  color:'#54ffff',
                  yAxisIndex: 1,
                  tooltip: {
                    valueFormatter: function (value) {
                      return value + ' %';
                    }
                  },
                  data: [8.67,0.06,-0.01,1.39,4.78,4.13,5.58,6.03,3.25,0.88,5.67,5.56,2.59,4.42,3.92,2.49,4.52,4.28,4.07,4.16,-1.86,8.61,6.5]
                }
        
              ],
              graphic: [
                {
                  type: 'text',
                  left: 'center',
                  bottom: 0,
                  style: {
                    text: '\n总体来看以色列GDP稳定增长,巴勒斯坦波动较大,\n尤其是冲突剧烈时期,以色列经济受影响较小,巴更大,\n07年前,冲突持续时间通常较长,对经济影响更大。',
                    fill: '#333',  // 文字颜色
                    fontSize: 14,
                  },
                },
              ],
    };

    // 使用 setOption 设置图表的配置项
    gdpChart.setOption(gdpOption);
    window.addEventListener("resize",function(){
              myChart.resize();
            });
});


function changeChart1() {
    var selector = document.getElementById('chartSelector1');
    var selectedValue = selector.value;

    // 根据用户的选择显示对应的图表
    if (selectedValue === 'div3') {
        document.getElementById('div3').style.display = 'block';
        document.getElementById('div4').style.display = 'none';
    } else if (selectedValue === 'div4') {
        document.getElementById('div3').style.display = 'none';
        document.getElementById('div4').style.display = 'block';

        // 农业图
        var agriChartContainer = document.querySelector(".agriChartContainer");
        var agriChart = echarts.init(agriChartContainer);
        var agriOption = {

          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: [ '以谷产量', '巴谷产量','以人均谷产','巴人均谷产'],
            textStyle: {
              color: 'black'
          }
          },
          
          xAxis: [
            {
              type: 'category',
              splitLine: {//分割线配置
                lineStyle: {
                    color: "#000",
             }
            },
        
              data:  [ '2000','2001', '2002', '2003', '2004', '2005', '2006', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021'],
              axisPointer: {
                type: 'shadow'
              },
              axisLine: {
                show:true,
                "lineStyle": {
                    "color": "black" // 设置 x 轴线的颜色为黑色
                }
            },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '谷物产量(千吨)',
              "axisLine": {
                "lineStyle": {
                    "color": "balck" 
                }
            }
            },
            {
              type: 'value',
              name: '人均谷产(千克)',
              
              splitLine: {
                lineStyle: {
                    color: 'black', // 设置刻度线颜色为黑色
                    opacity: 0.3    //透明度
                }
            },
              "axisLine": {
                "lineStyle": {
                  type: 'solid',
                    "color": "black" 
                }
            }
            }
          ],
          series: [
            {
              name: '以谷产量',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 千吨';
                }
                
              },
              data: [
                182.870,241.640,271.105,305.620,273.33755,307.62025,245.10556,283.46448,198.84275,257.00947,241.05551,273.51991,356.38762,336.55834,372.42026,321.74639,262.28433,173.78848,150.68974,184.11318,246.80747, 268.2848
 
              ]
            },
            {
              name: '巴谷产量',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 千吨';
                }
              },
              data: [
                67.842,40.182,77.439,68.061,62.406,68.37798,55.39991,55.34708,42.14675,40.40542,26.97989,24.65139,35.90455,59.0553,59.11197,50.14256,57.72661,55.23452,55.9121,55.40591,55.53094,55.71254

              ]
            },
            {
              name: '巴人均谷产',
              type: 'line',
              color:'#006400',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 千克';
                }
              },
              data: [20.1,11.8,22.6,18.4,16.4,17.6,14.7,14.3,10.6,10.0,6.5,5.9,8.4,13.8,13.8,11.1,12.1,11.5,11.5,11.4,11.6,11.7,10.4]
            },
            {
              name: '以人均谷产',
              type: 'line',
              color:'#54ffff',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 千克';
                }
              },
              data: [30.005,39.005,43.074,46.015,40.004,43.970,35.008,39.007,27.007,34.012,31.015,35.006,59.013,46.011,44.995,38.009,31.014,20.007,17.000,18.901,24.005,26.985]
            }
    
          ],
          graphic: [
            {
              type: 'text',
              left: 'center',
              bottom: 0,
              style: {
                text: '\n因为国土面积有限以及人口剧增,以色列粮食极度依赖进口,\n自给率已经只有5%,而巴勒斯坦作为农业国均产还不如以色列,\n这还是算上相对较为稳定的西海岸,加沙粮食危机已火烧眉毛。',
                fill: '#333',  // 文字颜色
                fontSize: 14,
              },
            },
          ],
        };

        // 使用 setOption 设置图表的配置项
        agriChart.setOption(agriOption);
    }
};



//人口图
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
            color: 'black'
        }
        },
       
        calculable: true,
        xAxis: [
          {
            type: 'category',
            "axisLine": {
              "lineStyle": {
                  "color": "black" 
              }
          },
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021','2022']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              lineStyle: {
                  color: 'black', // 设置刻度线颜色为黑色
                  opacity: 0.3    //透明度
              }
            },
            "axisLine": {
              "lineStyle": {
                  "color": "black" 
              }
          }
          }
        ],
        series: [
          {
            name: '以色列',
            type: 'line',
            data: [604.9,616.5,626.3,668.4,683,692.5,711.2,729.5,741.3,760.2,774.6,790.7,808.1,819.2,829.9,843.1,854.8,871.2,897.2,913.6,922.7,939,950.6],
          },
          {
            name: '巴勒斯坦',
            type: 'line',
            data: [337.4, 340, 342.1,369.3, 379.1, 389, 376.2,  386.5, 396.6, 401.8,407,419.8,429.7,440.4,453,469.2,476.8,481.6,485.7,489.5,493.4,536.8],
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
   document.addEventListener("DOMContentLoaded", function() {
    var birthChartContainer = document.querySelector(".birthChartContainer");
    var birthChart = echarts.init(birthChartContainer);
//出生率配置项和数据
    var birthOption = {
      
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['以色列', '巴勒斯坦'],
        textStyle: {
          color: 'black'
      }
      },
        
        xAxis: {
type: 'category',
data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020'],
"axisLine": {
  "lineStyle": {
      "color": "black" 
  }
}
},
yAxis: {
type: 'value',
splitLine: {
  lineStyle: {
      color: 'black', // 设置刻度线颜色为黑色
      opacity: 0.3    //透明度
  }
},
"axisLine": {
  "lineStyle": {
      "color": "black" 
  }
}
},
series: [
{
name:'以色列',
data: [2.89,2.89,2.98,2.81,2.84,2.87,2.87,2.9,2.93,2.93,2.96,2.99,3.01,3.02,3.03,3.06,3.06,3.06,3.06,3.05,3.02],
type: 'line'
},
{
name:'巴勒斯坦',
data: [5.36,5.22,5.07,5.15,4.95,4.78,4.14,4.07,3.98,4,3.99,3.87,3.83,3.23,3.79,3.74,3.69,3.64,3.57,3.53,3.48],
itemStyle: {
  normal: {
    color: function (params) {
      return params.data == 3.23 ? 'red' : '#006400';
    },
  }
},
type: 'line'
  }
],
graphic: [
  {
    type: 'text',
    left: 'center',
    bottom: 0,
    style: {
      text: '以色列因为鼓励生育等政策,作为工业国生育率处上升态势,\n巴勒斯坦作为需要劳动力的农业国生育率逐年下降,不是好现象。',
      fill: '#333',  // 文字颜色
      fontSize: 14,
    },
  },
],
    };
    birthChart.setOption(birthOption);
});


function changeChart2() {
    var selector = document.getElementById('chartSelector2');
    var selectedValue = selector.value;

    // 根据用户的选择显示对应的图表
    if (selectedValue === 'div1') {
        document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
    } else if (selectedValue === 'div2') {
        document.getElementById('div1').style.display = 'none';
        document.getElementById('div2').style.display = 'block';

  
        var deathChartContainer = document.querySelector(".deathChartContainer");
        var deathChart = echarts.init(deathChartContainer);

        // 死亡率配置项和数据
        var deathOption = {
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: [ '以色列', '巴勒斯坦'],
            textStyle: {
              color: 'black'
          }
          },
            
            xAxis: {
    type: 'category',
    data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007' ,'2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020'],
    "axisLine": {
      "lineStyle": {
          "color": "black" 
      }
    }
    },
    yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
          color: 'black', // 设置刻度线颜色为黑色
          opacity: 0.3    //透明度
      }
    },
    axisLabel: {
      formatter: '{value} ‰'
    },
    "axisLine": {
      "lineStyle": {
          "color": "black" 
      },
      
    }
    },
    series: [
    {
    name:'以色列',
    data: [5,4.8,4.6,4.3,4.1,3.9,3.8,3.7,3.7,4,3.7,3.5,3.3,3.2,3.1,3,2.9,2.8,2.7,2.6,2.6],
    type: 'line'
    },
    {
    name:'巴勒斯坦',
    data: [30.4,29.4,28.6,27.7,26.9,26.1,25.2,24.4,23.6,22.8,22.1,21.4,20.6,19.8,21.3,18.4,17.7,17.1,17.1,16.5,15.9],
    type: 'line',
    itemStyle: {
      normal: {
        color: function (params) {
          return params.data == 21.3 ? 'red' : '#006400';
        },
      }
    },
      }
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        bottom: 0,
        style: {
          text: '两国总体逐年降低,表明总体卫生状况儿童保障有所改善,\n14年剧烈波动,结合热点图,有人道主义危机发生可能性',
          fill: '#333',  // 文字颜色
          fontSize: 14,
        },
      },
    ],
        };


        // 使用 setOption 设置图表的配置项
        deathChart.setOption(deathOption);
    }
};




//遇难人口性别年龄比例
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
                  color: 'black'
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
                    axisLabel : { formatter: function (value){return Math.abs(value) + '%';//显示的数值都取绝对值
                } 
        },
                    type : 'value',
                    "axisLine": {
                      "lineStyle": {
                          "color": "black" 
                      }
                    }
                    
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['0~18岁','18-60岁','60+岁'],
                    "axisLine": {
                      "lineStyle": {
                          "color": "black" 
                      }
                    }

                }
            ],
            series : [
                {
                    name:'巴勒斯坦男',
                    type:'bar',
                    stack: 'one',
                    color:'#006400',
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' %';
                      }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter:function(v){return Math.abs(v.data)+ ' %'}
                        }
                    },
                   data:[17.5, 70.3, 1.6]
                },
                {
                    name:'巴勒斯坦女',
                    type:'bar',
                    stack: 'two',
                    color:'#91cc75',
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' %';
                      }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter:function(v){return Math.abs(v.data)+ ' %'}
                        }
                    },
                   data:[4.6, 5.3, 0.9]
                },
                {
                    name:'以色列男',
                    type:'bar',
                    stack: 'one',
                    color:' #5470c6',
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' %';
                      }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                           formatter:function(v){return Math.abs(v.data)+ ' %'}
                        }
                    },
                   data:[-6, -63.8, -4.6]
                },
                {
                    name:'以色列女',
                    type:'bar',
                    stack: 'two',
                    color:'#54ffff',
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' %';
                      }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                           formatter:function(v){return Math.abs(v.data)+ ' %'}
                        }
                    },
                   data:[-4.6, -16.9, -3.7]
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


 
//强拆
(function(){
  //     //实例化对象
   var myChart =echarts.init(document.querySelector(".hchart"));
   // 模拟数据
   var data = [
       { year: 2004, left: [0, 1404, 177], right: [11603, 0] },
       { year: 2005, left: [0, 17, 0], right: [74,0] },
       { year: 2006, left: [49, 355, 0], right: [2297,78] },//数据还未修改
       { year: 2007, left: [47, 43, 0], right: [258,191] },
       { year: 2008, left: [44, 40, 0], right: [198,234] },
       { year: 2009, left: [28, 0, 3], right: [184,62] },
       { year: 2010, left: [85, 13, 0], right: [220,211] },
       { year: 2011, left: [157, 2, 0], right: [458,407] },
       { year: 2012, left: [273, 0, 0], right: [252,274] },
       { year: 2013, left: [419, 0, 0], right: [260,272] },
       { year: 2014, left: [341, 3, 5], right: [347,411] },
       { year: 2015, left: [332, 0, 12], right: [244,316] },
       { year: 2016, left: [645, 5, 28], right: [662,,656] },
       { year: 2017, left: [208, 1, 7], right: [180,222] },
       { year: 2018, left: [195, 7, 9], right: [262,133] },
       { year: 2019, left: [261, 0, 14], right: [210,175] },
       { year: 2020, left: [569, 0, 6], right: [321,322] },
       { year: 2021, left: [683, 1, 3], right: [284,322] },
       { year: 2022, left: [784, 0, 17], right: [283,280] },
       { year: 2023, left: [478, 96, 28], right: [445,273] }
   ];

   // 生成图表配置
   var option = {
    grid: {
      top: '10%',  // 通过调整这里的数值，可以改变图表的上边距
      bottom: '10%',
      left: '10%',
      right: '10%',
      containLabel: true
  },
       baseOption: {
           timeline: {
               axisType: 'category',
               autoPlay: true,
               playInterval: 3000,
               width: '100%',
               left:'left',
               data: data.map(function (item) {
                   return item.year;
               }),
           },
           legend: {
            data: ['违建为借口', '军事建筑为借口', '惩罚性拆除','无家可归成年人','无家可归未成年人'],
            textStyle: {
              color: 'black'
          }
          },
           series: [
               {
                   type: 'pie',
                   radius: '40%',
                   center: ['25%', '50%'],
                   label: {
                       show: true,
                       position: 'inside',
                       formatter: '{c}', 
                   },
                   data: [],  // 数据将在后面更新
               },
               {
                   type: 'pie',
                   radius: '40%',
                   center: ['75%', '50%'],
                   label: {
                       show: true,
                       position: 'inside',
                       formatter: '{c}', 
                   },
                   data: [],  // 数据将在后面更新
               }
           ],
       },
       options: data.map(function (item) {
           return {
               series: [
                   {
                       data: [
                           { value: item.left[0], name: '违建为借口' },
                           { value: item.left[1], name: '军事建筑为借口' },
                           { value: item.left[2], name: '惩罚性拆除' }
                       ],
                   },
                   {
                       data: [
                           { value: item.right[0], name: '无家可归成年人' },
                           { value: item.right[1], name: '无家可归未成年人' }
                       ],
                   }
               ]
           };
       }),
   };

  //把配置项给实例对象
  myChart.setOption(option);
  //让图标跟随屏幕自动去适应
  window.addEventListener("resize",function(){
    myChart.resize();
  });
})();









(function(){
  var myChart = echarts.init(document.getElementById('mchart'));

  // 使用 jQuery 的 get 方法加载 SVG 地图
  $.get('images/palestine.svg', function (svg) {
      // 注册 SVG 地图
      echarts.registerMap('palestine_svg', { svg: svg });

      var hotSpotData1 = [
        [330.08789, 251.71286, 191, 166, 25],
        [191.56602, 352.82913, 128, 116, 12],
        [250, 450, 5, 1, 4],
      ];

      var hotSpotData2 = [
        [330.08789, 251.71286, 358, 282, 76],
        [191.56602, 352.82913, 291, 179, 12],
        [250, 450, 113, 9, 104],
      ];

      var hotSpotData3 = [
        [330.08789, 251.71286,781 , 627, 154],
        [191.56602, 352.82913,409 , 375, 34],
        [250, 450, 263, 32, 231],
      ];

      var hotSpotData4 = [
        [330.08789, 251.71286, 231, 209, 25],
        [191.56602, 352.82913, 384, 369, 15],
        [250, 450, 44, 9, 35],
      ];

      var hotSpotData5 = [
        [330.08789, 251.71286, 212, 199, 13],
        [191.56602, 352.82913, 662, 623, 39],
        [250, 450, 63, 7, 56],
      ];

      var hotSpotData6 = [
        [330.08789, 251.71286, 100, 86, 14],
        [191.56602, 352.82913, 115, 104, 11],
        [250, 450, 26, 0, 26],
      ];

      var hotSpotData7 = [
        [330.08789, 251.71286, 143, 134, 9],
        [191.56602, 352.82913, 528, 526, 2],
        [250, 450, 17, 5, 12],
      ];

      var hotSpotData8 = [
        [330.08789, 251.71286, 89, 84, 5],
        [191.56602, 352.82913, 298, 295, 3],
        [250, 450, 11, 6, 5],
      ];

      var hotSpotData9 = [
        [330.08789, 251.71286, 54, 49, 5],
        [191.56602, 352.82913, 838, 833, 5],
        [250, 450, 29, 4, 25],
      ];

      var hotSpotData10 = [
        [330.08789, 251.71286, 24, 22, 2],
        [191.56602, 352.82913, 1020, 1014, 6],
        [250, 450, 2, 1, 1],
      ];

      var hotSpotData11 = [
        [330.08789, 251.71286, 20, 14, 6],
        [191.56602, 352.82913, 70, 68, 2],
        [250, 450, 1, 0, 1],
      ];

      var hotSpotData12 = [
        [330.08789, 251.71286, 21, 13, 8],
        [191.56602, 352.82913, 104, 104, 0],
        [250, 450, 5, 1, 4],
      ];

      var hotSpotData13 = [
        [330.08789, 251.71286, 8, 8, 0],
        [191.56602, 352.82913, 248, 247, 1],
        [250, 450, 7, 1, 6],
      ];

      var hotSpotData14 = [
        [330.08789, 251.71286, 31, 27, 4],
        [191.56602, 352.82913, 9, 9, 0],
        [250, 450, 4, 2, 2],
      ];

      var hotSpotData15 = [
        [330.08789, 251.71286, 55, 48, 7],
        [191.56602, 352.82913, 2246, 2205, 41],
        [250, 450, 56, 20, 36],
      ];

      var hotSpotData16 = [
        [330.08789, 251.71286, 146, 126, 20],
        [191.56602, 352.82913, 23, 23, 0],
        [250, 450, 13, 10, 3],
      ];

      var hotSpotData17 = [
        [330.08789, 251.71286, 103, 95, 8],
        [191.56602, 352.82913, 8, 8, 0],
        [250, 450, 8, 5, 3],
      ];

      var hotSpotData18 = [
        [330.08789, 251.71286, 56, 44, 12],
        [191.56602, 352.82913, 22, 22, 0],
        [250, 450, 8, 6, 2],
      ];

      var hotSpotData19 = [
        [330.08789, 251.71286, 49, 38, 11],
        [191.56602, 352.82913, 255, 255, 0],
        [250, 450, 4, 2, 2],
      ];

      var hotSpotData20 = [
        [330.08789, 251.71286, 35, 28, 7],
        [191.56602, 352.82913, 105, 105, 0],
        [250, 450, 7, 3, 4],
      ];

      var hotSpotData21 = [
        [330.08789, 251.71286, 26, 24, 2],
        [191.56602, 352.82913, 1, 1, 0],
        [250, 450, 4, 3, 1],
      ];

      var hotSpotData22 = [
        [330.08789, 251.71286, 86, 83, 3],
        [191.56602, 352.82913, 237, 237, 0],
        [250, 450, 8, 0, 8],
      ];
      var hotSpotData23 = [
        [330.08789, 251.71286, 164, 154, 10],
        [191.56602, 352.82913, 33, 33, 0],
        [250, 450, 16, 4, 12],
      ];

      // 计算每个时间点的自定义数据1和自定义数据2的和
      function calculateSum(data) {
        var sumCustomData1 = 0;
        var sumCustomData2 = 0;
        for (var i = 0; i < data.length; i++) {
          sumCustomData1 += data[i][3];
          sumCustomData2 += data[i][4];
        }
        return [sumCustomData1, sumCustomData2];
      }

      // 构造时间轴的年份数据
      var years = [];
      for (var year = 2000; year <= 2022; year++) {
        years.push(year.toString());
      }

      // 配置项
      var option = {
          baseOption: {
              timeline: {
                  axisType: 'category',
                  autoPlay: false,
                  playInterval: 15000,
                  
                  data: years.map(function (year, index) {
                    // 设置特定年份的点颜色为红色
                    return {
                        value: year,
                        itemStyle: {
                            color: index === 0 || index === 1 || index === 2 || index === 6 || index === 14 ? 'red' : '#5470c6',
                        },
                    };
                }),

                  currentIndex: 0,
                  tooltip: {
                    show: true,
                    formatter: function (params) {
                      var dataIndex = params.dataIndex;
                      var sumData1 = 0;
                      var sumData2 = 0;
                      if (dataIndex === 0) {
                        [sumData1, sumData2] = calculateSum(hotSpotData1);
                      } else if (dataIndex === 1) {
                        [sumData1, sumData2] = calculateSum(hotSpotData2);
                      } else if (dataIndex === 2) {
                        [sumData1, sumData2] = calculateSum(hotSpotData3);
                      } else if (dataIndex === 3) {
                        [sumData1, sumData2] = calculateSum(hotSpotData4);
                      } else if (dataIndex === 4) {
                        [sumData1, sumData2] = calculateSum(hotSpotData5);
                      } else if (dataIndex === 5) {
                        [sumData1, sumData2] = calculateSum(hotSpotData6);
                      } else if (dataIndex === 6) {
                        [sumData1, sumData2] = calculateSum(hotSpotData7);
                      } else if (dataIndex === 7) {
                        [sumData1, sumData2] = calculateSum(hotSpotData8);
                      } else if (dataIndex === 8) {
                        [sumData1, sumData2] = calculateSum(hotSpotData9);
                      } else if (dataIndex === 9) {
                        [sumData1, sumData2] = calculateSum(hotSpotData10);
                      } else if (dataIndex === 10) {
                        [sumData1, sumData2] = calculateSum(hotSpotData11);
                      } else if (dataIndex === 11) {
                        [sumData1, sumData2] = calculateSum(hotSpotData12);
                      } else if (dataIndex === 12) {
                        [sumData1, sumData2] = calculateSum(hotSpotData13);
                      } else if (dataIndex === 13) {
                        [sumData1, sumData2] = calculateSum(hotSpotData14);
                      } else if (dataIndex === 14) {
                        [sumData1, sumData2] = calculateSum(hotSpotData15);
                      } else if (dataIndex === 15) {
                        [sumData1, sumData2] = calculateSum(hotSpotData16);
                      } else if (dataIndex === 16) {
                        [sumData1, sumData2] = calculateSum(hotSpotData17);
                      } else if (dataIndex === 17) {
                        [sumData1, sumData2] = calculateSum(hotSpotData18);
                      } else if (dataIndex === 18) {
                        [sumData1, sumData2] = calculateSum(hotSpotData19);
                      } else if (dataIndex === 19) {
                        [sumData1, sumData2] = calculateSum(hotSpotData20);
                      } else if (dataIndex === 20) {
                        [sumData1, sumData2] = calculateSum(hotSpotData21);
                      } else if (dataIndex === 21) {
                        [sumData1, sumData2] = calculateSum(hotSpotData22);
                      } else if (dataIndex === 22) {
                        [sumData1, sumData2] = calculateSum(hotSpotData23);
                      }
                      return 2000+dataIndex+'年'+'<br/>该年冲突巴勒斯坦死亡人数: ' + sumData1 + '<br/>该年冲突以色列死亡人数: ' + sumData2;
                    },
                },
              },
              tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var customData1 = params.data[3];
                    var customData2 = params.data[4];
                    return '巴勒斯坦死亡人数:' + customData1 + '<br/>以色列死亡人数: ' + customData2;
                },
            },
              geo: {
                  tooltip: {
                      show: true
                  },
                  map: 'palestine_svg',
                  roam: true,
                  label: {
                      show: false,
                      emphasis: {
                          show: true
                      }
                  },
              },
              graphic: {
                  elements: [{
                      type: 'text',
                      style: {
                          text: '',  // 初始为空字符串
                          font: 'bold 16px Arial',
                          fill: '#333'  // 文字颜色
                      },
                      left: 'center',
                      top: 10
                  }]
              },
              series: [{
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  geoIndex: 0,
                  symbolSize: function (params) {
                      return (params[2] / 300) * 15 + 5;
                  },
                  itemStyle: {
                      color: '#b02a02'
                  },
                  encode: {
                      tooltip: 2
                  },
                  data: hotSpotData1
              }]
          },
          options: [
              {
                  series: [{
                      data: hotSpotData1
                  }],
                  graphic: {
                      elements: [{
                          // 设置时间轴注释文字
                          style: {
                              text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n许多巴勒斯坦人将它看作是反抗外族占领的解放战争,而以色列则认为它是一个恐怖运动。\n起因是00年沙龙访问圣殿山被巴勒斯坦认为是挑衅和侮辱,从而爆发抗议和动乱,各有伤亡后,以色列对巴勒斯坦进行报复性空袭。\n这年巴勒斯坦经济受到严重影响',
                          }
                      }]
                  }
              },
              {
                  series: [{
                      data: hotSpotData2
                  }],
                  graphic: {
                      elements: [{
                          // 设置时间轴注释文字
                          style: {
                              text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n2001年是局势升级的一年,1月以色列军队进入约旦河西岸和加沙地带,对巴勒斯坦领导人进行逮捕。\n4月以色列炮击了加沙地带的拉法赫8月至11月巴勒斯坦在包括以色列等多地进行自杀爆炸袭击\n这年巴勒斯坦经济受到严重影响。',
                          }
                      }]
                  }
              },
              {
                  series: [{
                      data: hotSpotData3
                  }],
                  graphic: {
                      elements: [{
                          // 设置时间轴注释文字
                          style: {
                              text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n2002年是冲突最激烈的一年,以色列进行“保护之盾”行动,进攻约旦河西岸,占领城市纳布卢斯。\n之后以色列发生多起自杀式爆炸袭击,其中一些袭击发生在以色列本土,以色列又进行“坚固防卫”行动,进攻加沙地带。\n这年巴勒斯坦经济受到严重影响。',
                          }
                      }]
                  }
              },
              {
                series: [{
                    data: hotSpotData4
                }],
                graphic: {
                    elements: [{
                        // 设置时间轴注释文字
                        style: {
                            text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n局势相对有所缓和,1月以色列政府宣布结束“保卫之盾”行动,但依然有持续的冲突对抗如军事行动和自杀爆炸袭击。\n美国、俄罗斯、联合国、欧盟发布“路线图”和平计划,首次明确提出两国共处,\n虽然此后由于各种政治原因该计划大多只停留在口头,但对巴勒斯坦经济恢复还是有积极影响',
                        }
                    }]
                }
            },
            {
              series: [{
                  data: hotSpotData5
              }],
              graphic: {
                  elements: [{
                      // 设置时间轴注释文字
                      style: {
                          text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n冲突仍然在持续,双方发生了多次袭击和报复行动。这一年,包括自杀爆炸袭击和军事行动在内的暴力事件导致许多平民伤亡。\n2月以色列政府宣布计划从加沙地带撤退,巴勒斯坦为建国呼吁停止对以袭击,虽然都遭内部广泛批评未能实施,但看到了局势缓和的曙光。\n这年巴勒斯坦经济恢复至战前水平。',
                      }
                  }]
              }
          },
          {
            series: [{
                data: hotSpotData6
            }],
            graphic: {
                elements: [{
                    // 设置时间轴注释文字
                    style: {
                        text: '第二次巴勒斯坦大起义(Second Intifada):00年9月28日-05年2月8日。\n大规模冲突总体结束,以色列最终实施撤退计划完成了从加沙地带的单方面撤退,期间发生了一些导致双方伤亡的自杀袭击和冲突事件。\n国际社会继续推动中东和平进程,但仍然面临巨大挑战。\n这年巴勒斯坦领导人换届,经济缓慢增长。',
                    }
                }]
            }
        },
        {
          series: [{
              data: hotSpotData7
          }],
          graphic: {
              elements: [{
                  // 设置时间轴注释文字
                  style: {
                      text: '以色列黎巴嫩战争:06年7月12日-8月14日。\n尽管战争主要以黎的冲突,但巴勒斯坦也被卷入其中。黎对以北部进行导弹袭击,而以色列在回应中对加沙进行了军事行动。\n哈马斯在巴勒斯坦立法选举中赢得多数席位,导致哈马斯和法塔赫之间的政治紧张局势,为07年政变埋下伏笔。\n这年巴勒斯坦经济再受重创。',
                  }
              }]
          }
      },
      {
        series: [{
            data: hotSpotData8
        }],
        graphic: {
            elements: [{
                // 设置时间轴注释文字
                style: {
                    text: '哈马斯夺取加沙地带控制权\n6月哈马斯在加沙地带发动政变,夺取了该地带的控制权,导致加沙地带与西岸地区之间的政治分裂，形成了两个巴勒斯坦实体\n一个由法塔赫控制的西岸,另一个由哈马斯控制的加沙。自此,冲突主要在加沙爆发。\n自这年起,巴勒斯坦由于西岸地区冲突减少,总体实现经济稳定增长,但加沙地带经济依旧糟糕',
                }
            }]
        }
    },
    {
      series: [{
          data: hotSpotData9
      }],
      graphic: {
          elements: [{
              // 设置时间轴注释文字
              style: {
                  text: '2008-2009年加沙战争:08年12月27日-09年1月18日\n冲突的导火索是哈马斯向以色列发射火箭弹,以色列发动了对加沙地带的军事行动，代号为“铸铁冬季”。\n虽然该次冲突死难者众多,但持续时间短暂,巴勒斯坦经济受影响较小。',
              }
          }]
      }
  },
  {
    series: [{
        data: hotSpotData10
    }],
    graphic: {
        elements: [{
            // 设置时间轴注释文字
            style: {
                text: '2008-2009年加沙战争:08年12月27日-09年1月18日\n 2009年1月3日,以色列向加沙地带派遣地面部队，导致了大量的平民伤亡，包括许多妇女儿童。\n在埃及的斡旋下,以色列和哈马斯同意于2009年1月18日实施停火,逐步解除对加沙地带的封锁,以改善人道状况。\n虽然该次冲突死难者众多,但持续时间短暂,巴勒斯坦经济受影响较小。',
            }
        }]
    }
},
{
  series: [{
      data: hotSpotData11
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '10年局势有所缓和,只有小规模冲突和空袭,没有演变成大规模冲突\n这年巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData12
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '11年局势较10年有所加剧,但也只有小规模冲突和空袭,没有演变成大规模冲突\n这年巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData13
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '12年前期平稳,后期升级,11月14日-21日哈马斯和以色列之间进行大规模火箭袭击和空袭,在埃及斡旋下停火\n这年联合国大会赋予巴勒斯坦观察员国地位,被视为国际上对巴勒斯坦国家地位的承认。\n这年冲突时间较短,巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData14
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '13年前期平稳,后期升级,11月双方再次进行大规模火箭袭击和空袭,再次于21日停火\n7月,巴以重启了直接和平谈判,由美国担任中间人,但因争议未能取得实质性的进展。\n这年冲突时间较短,巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData15
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '2014年加沙战争:08年12月27日-09年1月18日\n以色列为应对哈马斯的火箭袭击进行大规模空袭,陆军也展开地面入侵。包括妇女儿童在内大量平民死于战火\n冲突引起国际强烈关注,人道主义组织批评以色列对平民的影响,包括医疗设施和学校的受损,冲突在埃及斡旋下停火。\n此次冲突影响剧烈,巴勒斯坦经济再次下跌,并且生育率和婴儿死亡率都因人道主义危机剧烈波动。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData16
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '15年局势有所缓和,只有小规模冲突对峙,\n这年巴勒斯坦经济有所恢复。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData17
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '16年局势有所缓和,只有小规模冲突对峙,\n这年巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData18
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '17年局势有所缓和,只有小规模冲突对峙,\n哈马斯和法塔赫走向和解,这年巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData19
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '18年较17年局势恶化,有小规模冲突和空袭。\n春季加沙地带爆发了一系列抗议活动,示威者要求实现难民回归、解除封锁和结束以军占领。\n这一系列抗议活动中发生了暴力冲突,巴勒斯坦平民数十人死亡，数千人受伤。\n这年冲突持续和规模较小,巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData20
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '19年局势较18年有所缓和,仍有小规模冲突和空袭,但没有演变成大规模冲突\n这年巴勒斯坦经济继续增长。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData21
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '2020年因为疫情,巴以都采取疫情管控措施,一定程度上影响了地区内的政治和社会动态,冲突事件大减。\n8月13日,阿联酋以色列签署了正常化协议。这是一系列中东国家与以色列正常化关系的协议之一。\n尽管今年冲突较少,但疫情还是严重打击两国经济,尤其是巴勒斯坦。',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData22
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '2021年5月,加沙地带和以色列之间爆发了为期11天的冲突\n耶路撒冷以色列警察和巴勒斯坦示威者发生了激烈的冲突。争议焦点主要是耶路撒冷的领土和权利。双方新一轮火箭袭击空袭。\n 冲突导致加沙发生激烈战斗,造成大量平民伤亡,包括儿童和妇女,后在埃及斡旋下停火。\n尽管冲突比较激烈，但持续时间较短，对经济影响较小，巴勒斯坦恢复至疫情前状态',
          }
      }]
  }
},
{
  series: [{
      data: hotSpotData23
  }],
  graphic: {
      elements: [{
          // 设置时间轴注释文字
          style: {
              text: '2022年8月,加沙地带和以色列之间爆发了为期2天的冲突\n以逮捕巴相关领导人,并"先发制人,以此挫败巴勒斯坦计划就萨阿迪被捕发动报复行动的企图"\n双方进行新一轮火箭袭击和空袭,后在埃及斡旋下停火。\n冲突时间较短,对经济影响相对较小,巴勒斯坦经济继续增长',
          }
      }]
  }
},
          ]
      };

      // 将配置项设置到图表中
      myChart.setOption(option);

      // 添加点击事件
      myChart.getZr().on('click', function () {
          console.log('点击地图，显示注释文字');
      });
  });
})();
