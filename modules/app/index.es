$("document").ready(function(){
  //轮播图初始化
  $('.silder-box-1').mySilder({
    width: 265, //容器的宽度 必选参数!!!!!!
    height: 105, //容器的高度 必选参数!!!!!!
    auto: true, //是否自动滚动
    autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
    direction: 'x', //滚动方向,默认X方向
    autoType: 'left', //滚动方向，auto为true时生效
    few: 1, //一次滚动几个，默认滚动1张
    showFew: 4, //显示几个,就不用调css了,默认显示一个
    clearance: 15, //容器之间的间隙，默认为 0
    silderMode: 'linear', //滚动方式
    timeGap: 650, //动画间隙，完成一次动画需要多长时间，默认700ms
    buttonPre: '.silder-button.btl', //上一个，按钮
    buttonNext: '.silder-button.btr', //下一个，按钮
    jz: true, //点击时，是否等待动画完成
    runEnd: function() { //回调函数
      //代码
    }
  });
});
