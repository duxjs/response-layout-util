/**
 * Created by madlord on 16/1/27.
 */
(function () {
    function upadte() {
        var w=Math.min(window.screen.width,document.body.clientWidth,document.documentElement.getBoundingClientRect().width);
        document.getElementsByTagName('html')[0].style['font-size']=w/375*0.625*16+'px'
    }
    module.exports={
        init:function () {
            window.addEventListener('resize',upadte)
            upadte();
        },

        getOneREMSize:function () {
            return parseFloat(document.getElementsByTagName('html')[0].style['font-size']);
        }
    }
})();

