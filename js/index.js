let loadPage=(function () {
    let $loadPage=$('#loading');
    let $loadProgress=$loadPage.children('.loading-progress');
    let imgList=['images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        'images/5.png',
        'images/6.png',
        'images/7.png',
        'images/8.png',
        'images/9.png',
        'images/10.png',
        'images/11.png',
        'images/12.png',
        'images/13.png',
        'images/14.png',
        'images/15.png',
        'images/16.png',
        'images/17.png',
        'images/18.png',
        'images/19.png',
        'images/20.png',
        'images/21.png',
        'images/22.png',
        'images/23.png',
        'images/24.png',
        'images/25.png',
        'images/bg-music.svg'
    ];
    let n=0;
    let m=imgList.length;
    let lodingTimer=null;
    function lazyImg() {
        $.each(imgList,function (index, item) {
            let oImg=new Image;
            oImg.src=item;
            oImg.onload=function () {
                $loadProgress.html(Math.floor((++n/m*100))+'%');
                if(n===m){
                    lodingTimer=window.setTimeout(()=>{
                        lodingTimer=null;
                        $loadPage.remove();
                        swiperRender.init();
                    },2000)
                }
            }
        })
    }
    return {
        init(){
            let loadPageTimer=null;
            $loadPage.css('display','block');
            lazyImg();
            // $(window).on('load',function () {
            //     $loadPage.css('display','block');
            // });

            // loadPageTimer=window.setTimeout(swiperRender.init,1000)
        }
    }
})();

let swiperRender=(function () {
    let $page1=$('.swiper-container');


    return {
        init(){
            $('#loading').css('display','none');
            $page1.css('display','block');
          let myResume = new Swiper('.swiper-container', {
              height:window.innerHeight,//高度是百分百
              // effect : 'flip',//翻页的效果
              direction : 'vertical',//设置滑动方向：垂直
              // loop:true,//设置循环播放
              onInit:(ev)=>{
                  console.log(ev,ev.activeIndex);
              },
              onTransitionEnd:(ev)=>{
                  console.log(ev,ev.activeIndex);
              }
            });
        }
    }
})();
loadPage.init();
