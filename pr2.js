$(document).ready(function() {
    $('.tabs-nav li').click(function() {
      var tabId = $(this).index();

      $('.tabs-nav li').removeClass('active');
      $(this).addClass('active');

      $('.tab-panel').removeClass('active');
      $('.tab-panel').eq(tabId).addClass('active');
    });
  });