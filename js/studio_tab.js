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

    
    var contentTabBtn = $(".style__tab .content > div .button__list button");
    var backgroundImgContent = $(".style__tab .content > div .list");

    contentTabBtn.click(function(){
        var th = $(this);
        var idx = th.index();

        // backgroundImgTab.removeClass("active");
        th.siblings("button").removeClass("active");
        th.addClass("active");

        th.closest($(`
            [class*=__content].show
        `)).find(".list").removeClass("show");
        
        th.closest($(`
            [class*=__content].show
        `)).find(".list").eq(idx).addClass("show");
        
    });

    // background tab -> img tab -> img button
    var backgroundImg = $(".style__tab .img__list button"); 

    backgroundImg.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button").removeClass("active");

        th.addClass("active");
    });


    // background tab -> img tab -> video button
    var backgroundVideo = $(".style__tab .video__list button"); 

    backgroundVideo.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button").removeClass("active");

        th.addClass("active");
    });
});