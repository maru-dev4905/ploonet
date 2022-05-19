$(document).ready(function(){
    var alignmentBtn = $(".alignment__btn");

    alignmentBtn.click(function(){
        var th = $(this);
        
        if(th.hasClass("active")){
            th.removeClass("active");
        }else{
            th.addClass("active");
        }
    });
});