$(document).ready(function() {
    $('.filter-btn').click(function() {
      var filterValue = $(this).data('filter');

      if (filterValue === 'all') {
        $('.gallery-images img').show();
      } else {
        $('.gallery-images img').hide();
        $('.gallery-images img.' + filterValue).show();
      }

      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
    });
  });