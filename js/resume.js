$(document).ready(function() {
    var header = $('#header'),
        yui_main = $('#yui-main'),
        download = $('#pdf'),
        footer = $('#footer'),
        body = $('#body');

    header.hide();
    yui_main.hide();
    download.hide();
    footer.hide();
    body.hide();

    header.fadeToggle(1000);
    yui_main.fadeToggle(2500);
    body.fadeToggle(3000);
    footer.fadeToggle(4000);
    download.fadeToggle(7500);
});
