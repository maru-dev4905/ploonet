$(document).ready(function(){

    var selectOpenBtn = $(".select__open");

    selectOpenBtn.click(function(){

        var th = $(this);
        
        if(th.hasClass("active")){
            selectOpenBtn.removeClass("active");
        }else{
            selectOpenBtn.removeClass("active");
            th.addClass("active");
        }
        
    });


    // select item click event
    var selectBtn = $(".select__btn");
    selectBtn.click(function(){

        var th = $(this);
        var TH_siblings = th.parent().siblings($(".select__btn"));
        var thSelect = th.closest($(".select"));
        var thText = th.find("span").text();

        console.log(thSelect);
        console.log(thText);

        if(th.hasClass("active")){
            
            return false;
        }else{

            TH_siblings.find(".select__btn").removeClass("active");
            th.addClass("active");

            thSelect.find(".select__open span").text(thText);
        }
    });
    
});