$(document).ready(function(){


    var block = $(".studio__timeline .content__line [class*='__box']");

    block.click(function(){
        var th = $(this);

        
        if(th.hasClass("active")){
            block.removeClass("active");
        }else{
            block.removeClass("active");
            th.addClass("active");
        }
    });

});