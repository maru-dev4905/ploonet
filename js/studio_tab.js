$(document).ready(function(){

    var tabBtn = $(".style__tab > ul > li > button");

    tabBtn.click(function(){
        
        var th = $(this);

        tabBtn.removeClass("active");
        th.addClass("active");

    });
    

    var closeBtn = $(".style__tab > ul > li .close__btn");

    closeBtn.click(function(){
        var th = $(this);

        th.closest("li").find("> button").removeClass("active");

        th.closest("li").find(".select__open").removeClass("active");
    });


    // metahuman tab -> script tab
    var scriptBtn = $(".script__item button");

    scriptBtn.click(function(){
        var th = $(this);

        if(th.parent().hasClass("active")){
            
            return false;
        }else{
            
            scriptBtn.parent().removeClass("active");
            th.parent().addClass("active");
        }
    });


    // background tab
    var backgroundTab = $(".style__tab .background .tab__list button");
    var backgroundContent = $(".style__tab .background .content > div");

    backgroundTab.click(function(){
        var th = $(this);
        var idx = th.index();

        backgroundTab.removeClass("active");
        th.addClass("active");
        
        backgroundContent.removeClass("show");
        backgroundContent.eq(idx).addClass("show");
    })

    // background tab -> img tab
    var backgroundImgTab = $(".style__tab .background .img__content .button__list button");
    var backgroundImgContent = $(".style__tab .background .img__content .img__list");

    backgroundImgTab.click(function(){
        var th = $(this);
        var idx = th.index();

        backgroundImgTab.removeClass("active");
        th.addClass("active");

        backgroundImgContent.removeClass("show");
        backgroundImgContent.eq(idx).addClass("show");
    });

    // background tab -> img tab -> img button
    var backgroundImg = $(".style__tab .img__list button"); 

    backgroundImg.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button").removeClass("active");

        th.addClass("active");
    });
});