// $(document).ready(function() {
//    $('a').on('click touchend', function(e) {
//       var el = $(this);
//       var link = el.attr('href');
//       window.location = link;
//    });
// });
//
//
$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});
