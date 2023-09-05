// 导航
(function () {
  let navs = document.querySelectorAll('.item')  //0123
  let neis = document.querySelectorAll('.top')  //01234
  for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', function () {
      for (let j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active')
      }
      navs[i].classList.add('active')
      // +5防止和滚动检测事件发生冲突
      document.documentElement.scrollTop = neis[i+1].offsetTop+5
    })
  }

  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop < neis[2].offsetTop) {
      for (let j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active')
      }
      navs[0].classList.add('active')
    }
    if (document.documentElement.scrollTop >= neis[2].offsetTop && document.documentElement.scrollTop < neis[3].offsetTop) {
      for (let j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active')
      }
      navs[1].classList.add('active')
    }
    if (document.documentElement.scrollTop >= neis[3].offsetTop && document.documentElement.
      scrollTop < neis[4].offsetTop) {
      for (let j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active')
      }
      navs[2].classList.add('active')
    }
    if (document.documentElement.scrollTop >= neis[4].offsetTop) {
      for (let j = 0; j < navs.length; j++) {
        navs[j].classList.remove('active')
      }
      navs[3].classList.add('active')
    }
  })

})();

// 全国累计高温中暑情况柱状图 .part1 .bar
(function () {
  let mychart = echarts.init(document.querySelector('.part1 .bar'))
  let option = {
    title: {
      text: '数据来源:《疾病监测》',
      left: '20px',
      bottom: 10,
      textStyle: {
        fontSize: 14,
        color: 'rgba(1,1,1,.6)',
        fontWeight: 400,
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '数目',
        min: 0,
        max: 8000,
        // interval: 50,
        axisLabel: {
          formatter: '{value} 例'
        }
      },
    ],
    series: [
      {
        name: '全国累计高温中暑病例',
        type: 'bar',
        color:'red',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 例';
          }
        },
        data: [
          1980, 1006, 1195, 2842, 6739
        ]
      },
      {
        name: '全国累计重症中暑病例',
        type: 'bar',
        color: '#780116',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 例';
          }
        },
        data: [
          554, 219, 223, 907, 2462
        ]
      },
    ]
  };
  mychart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener('resize',
    function () {
      mychart.resize()
    })

})();

// .part2 .wordcloud
(function () {
  let mychart = echarts.init(document.querySelector('.part2 .wordcloud1'))
  let option = {
    title: {
      text: '数据来源:整理自中国裁判文书网274份文书',
      left: '20px',
      bottom: 10,
      textStyle: {
        fontSize: 14,
        color: 'rgba(1,1,1,.6)',
        fontWeight: 400,
      }
    },
    // backgroundColor: "#031739",
    tooltip: {
      show: true,
      textStyle: {
        fontSize: "16",
        color: '#3c3c3c'
      },
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderWidth: 1
    },
    series: [{
      name: "申诉人职业情况",
      type: "wordCloud",
      gridSize: 20,
      sizeRange: [20, 70],
      rotationRange: [0, 0],
      shape: "circle",
      autoSize: {
        enable: true,
        minSize: 18
      },
      data: [{
        name: "冶炼",
        value: 1,
        textStyle: {
          color: '#ffe400',
        }
      }, {
        name: "炉窖",
        value: 3,
        textStyle: {
          color: "#29a8ed",
        }
      }, {
        name: "印染",
        value: 3,
        textStyle: {
          color: "#634fd4",
        }
      }, {
        name: "建筑",
        value: 37,
        textStyle: {
          color: "#ffe400",
        }
      }, {
        name: "施工",
        value: 7,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "环卫",
        value: 8,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "公司职工",
        value: 13,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "保安",
        value: 4,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "装修工人",
        value: 4,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "搬运工人",
        value: 18,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "保洁工人",
        value: 14,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "货车司机",
        value: 3,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "车间工人",
        value: 25,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "仓库杂工",
        value: 2,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "园林护理",
        value: 3,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "普工",
        value: 3,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "木工",
        value: 1,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "服务类",
        value: 6,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "冲压工",
        value: 2,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "盐场工人",
        value: 1,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "煤矿工人",
        value: 5,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "水电安装工人",
        value: 2,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "机械加工",
        value: 2,
        textStyle: {
          color: "#634fd4"
        }
      }]
    }]
  }
  mychart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener('resize',
    function () {
      mychart.resize()
    })
})();

// .part2 .wordcloud2
(function () {
  let mychart = echarts.init(document.querySelector('.part2 .wordcloud2'))
  let option = {
    title: {
      text: '数据来源:整理自中国裁判文书网274份文书',
      left: '20px',
      bottom: 0,
      textStyle: {
        fontSize: 14,
        color: 'rgba(1,1,1,.6)',
        fontWeight: 400,
      }
    },
    // backgroundColor: "#031739",
    tooltip: {
      show: true,
      textStyle: {
        fontSize: "16",
        color: "#3c3c3c"
      },
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderWidth: 1
    },
    series: [{
      name: "工作地点",
      type: "wordCloud",
      gridSize: 30,
      sizeRange: [24, 70],
      rotationRange: [0, 0],
      shape: "circle",
      autoSize: {
        enable: true,
        minSize: 18
      },
      data: [{
        name: "车间",
        value: 41,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "工地",
        value: 43,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "街道",
        value: 8,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "厂区",
        value: 7,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "露天楼顶",
        value: 2,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "仓库",
        value: 18,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "厨房",
        value: 3,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "门岗处",
        value: 2,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "运输过程中",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "院子",
        value: 1,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "库房",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "公厕",
        value: 2,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "家中",
        value: 2,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "盐场",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "航站楼",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "洗车棚",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "垃圾站",
        value: 1,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "矿井",
        value: 2,
        textStyle: {
          color: "#e75a46"
        }
      }, {
        name: "店铺",
        value: 1,
        textStyle: {
          color: "#29a8ed"
        }
      }, {
        name: "锅炉房",
        value: 1,
        textStyle: {
          color: "#ffe400"
        }
      }, {
        name: "隧道工地",
        value: 1,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "办公室",
        value: 1,
        textStyle: {
          color: "#634fd4"
        }
      }, {
        name: "公交车车站",
        value: 1,
        textStyle: {
          color: "#634fd4"
        }
      }]
    }]
  }
  mychart.setOption(option)
  // 让图标跟随屏幕自适应
  window.addEventListener('resize',
    function () {
      mychart.resize()
    })
})();


























































































































































































































