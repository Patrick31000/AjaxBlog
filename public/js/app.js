$(document).ready(function() {
    $.ajax({
        url: "example.md",
        type: "GET",
        success: function(data) {


            var converter = new showdown.Converter(),
                html = converter.makeHtml(data);
            $("#app").html(html);
        }
    });


    $.ajax({
        url: "menu.json",
        type: "GET",
        dataType: "json",
        success: function(data) {


            for (i = 0; i < data.menu.length; i++) {
                var blog = (data.menu[i].blog);
                var lien = (data.menu[i].lien);

                $(".items").append("<a class='item' href=" + lien + ">" + blog + "</a>");

            }
        }

    });
});