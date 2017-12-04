/// Just some stuff to work with IE11
$.fn.hideOption = function () {
    $(this).wrap('<span>').hide();
};

$.fn.showOption = function () {
    var $this = $(this);
    var span = $this.parent();
    if (!span.is("span")) return;
    $(span).replaceWith(this);
    $this.show();
};

// IE11 doesn't accept "hide" for an option element so we do this trick
$.fn.toggleOptionIE11 = function (show) {
    if (show) {
        $(this).showOption();
    } else {
        $(this).hideOption();
    }
};
