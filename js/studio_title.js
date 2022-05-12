$(document).ready(function(){

    $.fn.textWidth = function(text, font) {
        
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
        
        return $.fn.textWidth.fakeEl.width();
    };
    
    var titleValue = $(".studio__header .title h2").text();
    
    $('.width-dynamic').on('input', function() {
        var inputWidth = $(this).textWidth();
        $(this).css({
            width: inputWidth
        })
        titleValue = $(this).val();
        console.log($(this).val())
    }).trigger('input');
    
    
    function inputWidth(elem, minW, maxW) {
        elem = $(this);
    }
    
    var targetElem = $('.width-dynamic');
    
    inputWidth(targetElem);
    
    $(".studio__header .title button").on("click",function(){
        if($(".studio__header .title").hasClass("active")){
            $(".studio__header .title").removeClass("active");
            $(".studio__header .title h2").text(titleValue);
        }else{
            titleValue = $(".studio__header .title h2").text();
            $(".studio__header .title").addClass("active");
            $(".studio__header .title input").attr("value",titleValue);
        }
    });
});