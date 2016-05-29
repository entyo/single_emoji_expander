javascript: (function(f, s) {
    s = document.createElement("script");
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
    s.onload = function() {
        f(jQuery.noConflict(false))
    };
    document.body.appendChild(s)
})(function($) {
    jQuery(document).ready(function() {
        $(".emoji-only").css({
          "font-size": "5rem"
        });
    })
});
