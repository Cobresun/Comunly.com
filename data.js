window.alert(1);
$(document).ready(function() {
  window.alert(2);
    $.ajax({
        type: "GET",
        url: "http://raw.githubusercontent.com/Cobresun/Cobresun.github.io/master/assets/CityAmenitiesText.txt",
        dataType: "text",
        success: function(data) {window.alert(3);processData(data);}
     });
});

function processData(allText) {
  window.alert(4);
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    window.alert(5);
    // alert(lines);
}