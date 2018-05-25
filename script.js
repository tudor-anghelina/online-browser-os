$(document).ready(function() {
  function changeImage() {
    $.get("https://pixabay.com/api/?key=355419-f41a9c70d1c5acb1ab9f5d1f9&editors_choice=true&image_type=photo", function(data) {
      imageNumber = Math.floor((Math.random() * 19));
      $('#wallpaper').css('background-image', 'url(' + data.hits[imageNumber].webformatURL + ')');
    });
  }
  changeImage();
  setInterval(function() {
    var now = moment();
    $('#time').text(moment().format("HH:MM"));
    $('#day').text(moment().format("ddd, DD MMM YYYY"));
    if ($("#time").width() > $("#day").width()) {
      $("#timebox").width($("#time").width() + 15);
      $("#day").width($("#timebox").innerWidth());
    } else {
      $("#time").width($("#day").width());
      $("#timebox").width($("#day").width() + 15);
    }
  }, 1000);
  $('.window').each(function() {
    $(".window").draggable({
      handle: ".window-title",
      containment: $(this).parent().parent()
    });
    $("i.close").click(function() {
      $(this).parent().parent().parent().hide();
    });
  });
  $("#apps .settings").click(function() {
    $("#settings-window").show();
  });
  $("#cookieChoiceInfo").addClass('window');
  $("#cookieChoiceInfo").prepend("<div class='window-title'>Cookie Information<div class='buttons'><i class='material-icons max'>maximize</i><i class='material-icons min'>minimize</i><i class='material-icons close'>close</i></div></div>");
});