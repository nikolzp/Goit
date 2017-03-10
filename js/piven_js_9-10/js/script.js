$(function() {
  $('.jcarousel')
    .jcarousel({
    })

    $('.jcarousel-control-prev').click(function() {
  	$('.jcarousel').jcarousel('scroll', '-=1');
	  });

    $('.jcarousel-control-next').click(function() {
  	$('.jcarousel').jcarousel('scroll', '+=1');
	  })

    $('.jcarousel-control-prev').jcarouselControl({ target: '-=1' });
    $('.jcarousel-control-next').jcarouselControl({ target: '+=1' });

    $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
        return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel-pagination a').click(function() {
      $(this).addClass('active');
    });
});
