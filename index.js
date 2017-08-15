/**
 * Created by madlord on 16/1/27.
 */
var baseWidth=375;
var baseRemSize=10;
(function () {
    function upadte() {
        var w=Math.min(window.screen.width,document.body.clientWidth,document.documentElement.getBoundingClientRect().width);
        document.getElementsByTagName('html')[0].style['font-size']=w/baseWidth*baseRemSize+'px'
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
console.log("======")

