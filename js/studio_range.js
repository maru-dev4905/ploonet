// .firefox
var isFF = true;
var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    if ( isFF ) {
      if ( sheet.cssRules.length > 0 ) {
        sheet.deleteRule( 0 );
      }
    
      try {
        sheet.insertRule(selector + "{" + css + "}", 0);
      } catch ( ex ) {
        isFF = false;
      }
    }    
  };
})(document.createElement("style"));


// .chrome styling
$( '.scale__box input' ).on( 'input', function( ) {
    $( this ).css( 
        'background', 
        'linear-gradient(to right, #4396F5 0%, #80B8FA '+this.value +'%, #E9E9E9 ' + this.value + '%, #E9E9E9 100%)' 
    );
} );
