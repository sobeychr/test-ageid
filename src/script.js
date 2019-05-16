(function(loc, doc) {
    var getDomain = function() {
        return loc.hostname
            .replace('www.', '')
            .replace('.com', '');
    }
    var getSearch = function() {
        return loc.search.replace('?d=', '');
    };
    setTimeout(function(){
        var isLocal = loc.protocol.indexOf('file') >= 0;
        var domain = isLocal ? getSearch() : getDomain();
        doc.getElementById('img').src = './img/' + domain + '.png';
    }, 10);
})(window.location, document);