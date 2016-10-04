// Избавляемся от завиимости с document

function checkURL(documentObj) {

    //get the url by removing the hash
    var url = location.hash.replace(/^#/, '');

    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
        // remove all active class
        $('nav li.active').removeClass("active");
        // match the url and add the active class
        $('nav li:has(a[href="' + url + '"])').addClass("active");
        var title = ($('nav a[href="' + url + '"]').attr('title'))

        // change page title from global var
        documentObj.title = (title || documentObj.title);
        //console.log("page title: " + document.title);

        // parse url to jquery
        loadURL(url + location.search, container);
    } else {

        // grab the first URL from nav
        var $this = $('nav > ul > li:first-child > a[href!="#"]');

        //update hash
        window.location.hash = $this.attr('href');

    }

}


// Настоящий вызов
checkURL(document);

// Тестовый вызов
var fakeDocument = {'title':'Test Title'}
checkURL(fakeDocument);