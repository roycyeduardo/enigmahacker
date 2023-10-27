document.oncontextmenu = function() {
    return false;
}

document.onkeydown = function(event) {
    if (event.keyCode >= 112 && event.keyCode <= 123) {
        return false;
    }
}