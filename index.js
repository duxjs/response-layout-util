/**
 * Created by madlord on 16/1/27.
 */

(function () {
    if (typeof window === "undefined") return;
    var baseWidth=375;
    var baseRemSize=10;
    function upadte() {
        var w=Math.min(window.screen.width,document.body.clientWidth,document.documentElement.getBoundingClientRect().width);
        var fontSize=w/baseWidth*baseRemSize;
        document.documentElement.style['fontSize']=fontSize+'px';
        var div=document.createElement("div");
        div.style.width=fontSize+'px';
        div.id='rem';
        document.body.appendChild(div);
        var realFontSize=parseFloat(document.defaultView.getComputedStyle(document.getElementById('rem'), null)['width']);

        //部分华为魅族机型的html fontSize计算不正确
        if (realFontSize/fontSize!==1) {

            document.documentElement.style['fontSize']=fontSize*fontSize/realFontSize+'px';
        }

    }
    module.exports={
        init:function (bw) {
            baseWidth=bw||375;
            window.addEventListener('resize',upadte)
            upadte();
        },

        getOneREMSize:function () {
            return parseFloat(document.getElementsByTagName('html')[0].style['font-size']);
        }
    }
})();

