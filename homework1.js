var getloadURLMethod = function (isTesting) {
    if (isTesting) {
        // измененное поведение
        return function () {
            console.log('test');
        }
    }
    // не измененное поведение
    return loadURL;
};

function checkURL(isTesting) {

    //get the url by removing the hash
    var url = location.hash.replace(/^#/, '');
    var loadURL = getloadURLMethod(isTesting);

    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
        // remove all active class
        $('nav li.active').removeClass("active");
        // match the url and add the active class
        $('nav li:has(a[href="' + url + '"])').addClass("active");
        var title = ($('nav a[href="' + url + '"]').attr('title'))

        // change page title from global var
        document.title = (title || document.title);
        //console.log("page title: " + document.title);

        // Пример места для шва
        loadURL(url + location.search, container);
    } else {

        // grab the first URL from nav
        var $this = $('nav > ul > li:first-child > a[href!="#"]');

        //update hash
        window.location.hash = $this.attr('href');

    }

}