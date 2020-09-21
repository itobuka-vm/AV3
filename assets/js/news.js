$(document).ready(function () {
  $.get("https://jsonplaceholder.typicode.com/photos", function (data, status) {
    for (var i = 0; i < 20; i++) {
      $(".news").append(
        "<div class='col-md-6 col-lg-3 item'>" +
          "<div class='card border-0'>" +
          "<img src=" +
          data[i].thumbnailUrl +
          " class='card-img-top' alt='...' />" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" +
          data[i].title +
          "</h5>" +
          "<p class='card-text'>" +
          /* data[i].body + */
          "</p>" +
          "<a href='#'>Saznaj više...</a>" +
          "</div>" +
          "</div>" +
          "</div>"
      )
    }
  })
})
