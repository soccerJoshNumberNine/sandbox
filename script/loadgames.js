$(document).ready(function () {
  var games = JSON.parse(json);
  var i = 0;
  
  for (i = 0; i < games.length; i++) {
    $('#games').append('<tr><td>' + games[i] + '</td></tr>');
  }
});
