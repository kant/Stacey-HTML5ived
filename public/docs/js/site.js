// --------------------------------------------------------------------------
// SiteDomainName Scripts
// --------------------------------------------------------------------------

/* Content
=============================================================================
   =Firebug Console Commands
   =Global Variables
   =Extended Jquery Functions
*/ 


/* =Firebug Console Commands
=============================================================================
    alerts -
        // console.log('alert message');
    timers (basic method for testing performance) -
        // console.time('TimerName');
        // console.timeEnd('TimerName');
    profilers (more detailed method for testing performance) -
        // console.profile()
        // console.profileEnd()
    message grouping -
        // console.group("Group Title")
        // console.groupEnd()
*/


jQuery(document).ready(function ($) {


/* Global Variables
===========================================================================*/
/*global window, document, jQuery, $, console, datestr:true */ // comment for JSLint

var currentURL                      = window.location.pathname,
    pathArray                       = window.location.pathname.split("/"),
    siteContextPath                 = '/' + pathArray[1],
    viewportHeight                  = $(window).height(),
    viewportWidth                   = $(window).width();

/* =Extended Jquery Functions
===========================================================================*/

// custom animated effects
    jQuery.fn.slideFadeHide         = function (speed, easing, callback) {
        return $(this).animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
    };
    jQuery.fn.slideFadeReveal       = function (speed, easing, callback) {
        return $(this).animate({opacity: 'show', height: 'show'}, speed, easing, callback);
    };


}); // end of document ready
