/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */

/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
    element
        .addClass(effect)
        .one("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}


/**
 * 中间调用
 */
var Christmas = function() {
    //页面容器元素
    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    //切换切换
    $("#choose").on("change", function(e) {
        //页面名称
        var pageName = e.target.value;  
        switch (pageName) {
            case "page-b":
                //切换到页面B，然后捕获到切换后的通知
                changePage($pageA, "effect-out", function() {
                    new pageB()
                })
                break;
            case "page-c":
                //切换到页面C，然后捕获到切换后的通知
                changePage($pageC, "effect-in", function() {
                    new pageC()
                })
                break;
        }
    })

};






$(function() {
    //圣诞主题效果，开始
    Christmas()
})

/**
 * 慕课网特制
 * 圣诞主题效果
 * @type {Object}
 */


/**
 * 背景音乐
 * @param {[type]} url  [description]
 * @param {[type]} loop [description]
 */
function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
}


$(function() {
    $("button:first").click(function() {
        //背景音乐
        var audio1 = HTML5Audio('http://www.imooc.com/upload/media/one.mp3')
        audio1.end(function() {
            alert("音乐结束")
        })
    })
    $("button:last").click(function() {
        var audio2= new Audio('http://www.imooc.com/upload/media/two.mp3')
        audio.loop=loop;
        audio.play();
    })
})

