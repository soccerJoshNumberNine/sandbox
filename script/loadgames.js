$(document).ready(function () {
  var gamelist = JSON.parse(games);
  var i = 0;
  
  for (i = 0; i < gamelist.length; i++) {
    $('#games').append('<tr><td>' + gamelist[i] + '</td></tr>');
  }
});
