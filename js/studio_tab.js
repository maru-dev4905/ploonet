$(document).ready(function(){

    var tabBtn = $(".style__tab button");

    tabBtn.click(function(){
        
        var th = $(this);
        
        tabBtn.removeClass("active");
        th.addClass("active");
        
    });
    
});