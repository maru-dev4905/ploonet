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

        textChoiceContent.addClass("show");
        textContent.removeClass("show");
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

    // deco tab
    var decoTab = $(".style__tab .deco .tab__list button");
    var decoContent = $(".style__tab .deco .content > div");

    decoTab.click(function(){
        var th = $(this);
        var idx = th.index();

        decoTab.removeClass("active");
        th.addClass("active");
        
        decoContent.removeClass("show");
        decoContent.eq(idx).addClass("show");
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

    // img tab -> img button
    var backgroundImg = $(".style__tab .img__list button"); 

    backgroundImg.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button").removeClass("active");

        th.addClass("active");
    });


    // video tab -> video button
    var backgroundVideo = $(".style__tab .video__list button"); 

    backgroundVideo.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button").removeClass("active");

        th.addClass("active");
    });

    // music tab -> music button
    var backgroundMusic = $(".style__tab .music__list button:not(.play__btn)"); 
    var backgroundMusicPlay = $(".style__tab .music__list button.play__btn"); 

    backgroundMusic.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button:not(.play__btn)").removeClass("active");

        th.addClass("active");
    });

    backgroundMusicPlay.click(function(){
        var th = $(this);

        if(th.hasClass("active")){
            th.removeClass("active");
        }else{
            th.closest("li").siblings($("li")).find("> button.play__btn").removeClass("active");
            th.addClass("active");
        }
    });

    // soundEffect tab -> soundEffect button
    var soundEffect = $(".style__tab .soundEffect__list button:not(.play__btn)"); 
    var soundEffectPlay = $(".style__tab .soundEffect__list button.play__btn"); 

    soundEffect.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button:not(.play__btn)").removeClass("active");

        th.addClass("active");
    });

    soundEffectPlay.click(function(){
        var th = $(this);

        if(th.hasClass("active")){
            th.removeClass("active");
        }else{
            th.closest("li").siblings($("li")).find("> button.play__btn").removeClass("active");
            th.addClass("active");
        }
    });

    // transition tab -> transition button
    var transition = $(".style__tab .transition__list button:not(.play__btn)"); 
    var transitionPlay = $(".style__tab .transition__list button.play__btn"); 

    transition.click(function(){
        var th = $(this);

        th.closest("li").siblings($("li")).find("> button:not(.play__btn)").removeClass("active");

        th.addClass("active");
    });

    transitionPlay.click(function(){
        var th = $(this);

        if(th.hasClass("active")){
            th.removeClass("active");
        }else{
            th.closest("li").siblings($("li")).find("> button.play__btn").removeClass("active");
            th.addClass("active");
        }
    });


    // text tab -> text button
    var textBtn = $(".style__tab .textChoice__content > button:not(.script__auto__btn)");
    var textChoiceContent = $(".style__tab .text .textChoice__content");
    var textContent = $(".style__tab .text .text__content");

    textBtn.click(function(){
        textChoiceContent.removeClass("show");
        textContent.addClass("show");
    });

});