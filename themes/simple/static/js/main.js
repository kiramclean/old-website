$(document).ready(function() {
   $('.slide').on('click touchend', function(e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });
});

// $(document).ready(function() {
//     $('.hover').bind('touchstart touchend', function(e) {
//         e.preventDefault();
//         var element = $(this);
//         element.toggleClass('hover_effect');
//         var link = element.attr('href');
//         window.location = link;
//     });
// });
