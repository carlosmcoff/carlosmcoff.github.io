$(document).ready(function () {
  $('#mobile-btn').on('click', function () {
    $('#mobile-nav').toggleClass('active')
    $('#mobile-btn').find('i').toggleClass('fa-x')
    console.log("a")
  })
})

