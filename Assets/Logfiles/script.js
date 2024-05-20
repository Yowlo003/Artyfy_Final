//window.onbeforeunload = function() { return "Your work will be lost."; }

$(function() {
    $('#a').hover(function() {
      $('#b').css('color', '#ffeef8');
    }, function() {
      // on mouseout, reset the background colour
      $('#b').css('color', '');
    });
  });

$(function() {
  $('#loginForm').submit(function(event) {
      var username = $('#first').val();
      var password = $('#password').val();
      if (username === '' || password === '') {
          event.preventDefault(); // Prevent form submission
          alert('Please fill in both username and password.');
      }
  });
});