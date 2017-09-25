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
                    lodingTimer=window.setTimeout(function(){
                        lodingTimer=null;
                        $loadPage.css('display','none');
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

        }
    }
})();
$(document).on('touchstart touchmove touchend', function (ev) {
    ev.preventDefault();
});
let swiperRender=(function () {
    let $page1=$('.swiper-container');
    let $bgMusic=$('.bg-music');
    let Audio=$bgMusic.children('.audio').get(0);
    let music=()=>{
        let isPlay=true;
        $bgMusic.css('display','block');
        $bgMusic.addClass('move');
        Audio.play();
        $bgMusic.on('tap',()=>{
            //停止播放
            if(isPlay){
                isPlay=false;
                Audio.pause();
                $bgMusic.removeClass('move');
            }else{
                //播放开始
                isPlay=true;
                Audio.play();
                $bgMusic.addClass('move');
            }
        });
    };
    let change=(ev)=>{
        let index=ev.activeIndex;
        let sideAry=ev.slides;
        $page1.css('display','block');
        $.each(sideAry,(n,item)=>{
            item.id= n===index?`page${n+1}`:'';
        })
    };
    return {
        init(){
           music();
            $('#loading').css('display','none');
            let myResume = new Swiper('.swiper-container', {
              height:window.innerHeight,//高度是百分百
              // effect : 'flip',//翻页的效果
              direction : 'vertical',//设置滑动方向：垂直
              // loop:true,//设置循环播放
              onInit:(ev)=>{
                  change(ev);
              },
              onTransitionEnd:(ev)=>{
                change(ev);
              }
            });
        }
    }
})();
loadPage.init();

