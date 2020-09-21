$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/photos",
        function (data, status) {
            for (var i = 0; i < 20; i++) {
                $(".gallery-json").append(
                    "<div class='col-12 col-md-6 col-lg-3 json-item zoom-on-hover'>" +
                        "<a class='lightbox' href=" + data[i].url + ">" +
                            "<img class='img-fluid w-50' src=" + data[i].thumbnailUrl + " />" +
                        "</a>"+
                    "</div>" +
                "</div>"
                );    
            }
        })
});