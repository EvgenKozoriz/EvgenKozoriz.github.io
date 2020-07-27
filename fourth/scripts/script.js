/**
 * @param {obj} elementObj
 * @param {int} intPaddingTop, px
 * @param {int} intSpeedScroll, ms
 */
function scrollToElement(elementObj, intPaddingTop, intSpeedScroll) {
 
    intPaddingTop = intPaddingTop || 50; /* Default 10px */
    intSpeedScroll = intSpeedScroll || 500 /* Default 200ms */
    var scrollTop = $(elementObj).offset().top - intPaddingTop;
  
    $('html, body').animate({
      scrollTop: scrollTop
    }, intSpeedScroll);
  }