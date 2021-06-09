
  var options1 = {
    series: [41, 68, 39, 72],
    chart: {
    height: 220,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      
      startAngle: 0,
      endAngle: 360,
      hollow: {
        margin: 0,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
        track: {
          background: 'transparent' ,
          startAngle: 0,
          endAngle: 360,
          margin:0,
        },
      dataLabels: {
          total: {
             label: 'Lorem',
             show: true
          },
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors:['#6AD4FC','#D9D9D9','#FE2F57','#126A90'],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '10px',
    fontWeight: 800,
    position: 'left',
    offsetX: 20,
    offsetY: -10,
    margin:'0',
    zIndex: 99999,
    labels: {
      useSeriesColors: true,
    },
    formatter: function(seriesName, opts) {
      return  opts.w.globals.series[opts.seriesIndex]+'%'
    },
    markers: {
        width: 4,
        height: 4,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 4,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
      vertical: 0
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
          show: false
      }
    }
  }]
  };

  /********************** */
  var options2 = {
    series: [46, 73, 62, 75],
    chart: {
    height: 220,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      
      startAngle: 0,
      endAngle: 360,
      hollow: {
        margin: 0,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
        track: {
          background: 'transparent' ,
          startAngle: 0,
          endAngle: 360,
          margin:0,
        },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: ['#126A90','#FE2F57','#D9D9D9','#6AD4FC'],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '10px',
    fontWeight: 800,
    position: 'left',
    offsetX: 20,
    offsetY: -10,
    margin:'0',
    zIndex: 99999,
    labels: {
      useSeriesColors: true,
    },
    formatter: function(seriesName, opts) {
      return  opts.w.globals.series[opts.seriesIndex]+'%'
    },
    markers: {
        width: 4,
        height: 4,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 4,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
      vertical: 0
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
          show: false
      }
    }
  }]
  };

  /*********333333***** */
 
  var options3 = {
    series: [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }],
    chart: {
    height: 220,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ['#6AD4FC','#D9D9D9','#FE2F57','#126A90'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      ['John'],
      ['Joe'],
      ['Jake'],
      'Amber',
      ['Peter'],
      ['Mary'],
      ['David'],
      ['Lily'], 
    ],
    labels:['Joe','Nichole','Jonas','kris','dany','anvy'],
    labels: {
      style: {
        
        fontSize: '12px'
      }
    }
  }
  };
  
  var options4 = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    colors: ['#6AD4FC','#D9D9D9','#FE2F57','#126A90'],
    chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.9
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'top'
      }
    }
  }]
  };

  var options5 = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 220,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#6AD4FC','#FE2F57'],
  
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Lorem Ipsum dolor sit',
    align: 'left',
    color:'#74A8C7'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month',
      color:'#74A8C7',
    }
  },
  yaxis: {
    title: {
      text: 'Temperature',
      colors:'#74A8C7'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };
  /****************** */
  var options6 = {
    series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45]
    
  }],
    chart: {
    height: 220,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: 'Lorem Ipsum',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#126A90',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#126A90',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#126A90'
      },
      labels: {
        style: {
          colors: '#126A90',
        }
      },
      title: {
        text: "Operating Cashflow",
        style: {
          color: '#FE2F57',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#6AD4FC'
      },

      labels: {
        style: {
          colors: '#6AD4FC',
        },
      },
      title: {
        text: "Revenue ",
        style: {
          color: '#6AD4FC',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  colors: ['#126A90','#FE2F57','#6AD4FC'],
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
  };



  ///////////////////////


new ApexCharts(document.querySelector("#chart1"), options1).render();
new ApexCharts(document.querySelector("#chart2"), options2).render();
new ApexCharts(document.querySelector("#chart3"), options3).render();
new ApexCharts(document.querySelector("#chart4"), options4).render();  
new ApexCharts(document.querySelector("#chart5"), options5).render();
new ApexCharts(document.querySelector("#chart6"), options6).render();