var doStuffToPage = function(albums) {
    var input = document.querySelector('input');

    var container = document.querySelector('#album');

    albums.filter(function() {
        return e.name.includes(input.value)
    })

    for (var album of albums) {
        var p = document.createElement('p');
        p.innerText = album;
        container.append(p);
    }
}

var handleResponse = function() {
    if (this.status != 200) return;
    var jsonString = this.responseText;
    var albums = JSON.parse(jsonString);

    doStuffToPage(albums['albums']['items']);    
}

var makeRequest = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
};

var clickHandler = function() {
    url = "https://api.spotify.com/v1/search?q=christmas&type=album'";
    makeRequest(url, handleResponse);
}

var app = function(){
    var button = document.querySelector('button');
    button.onclick = clickHandler;
}

window.onload = app;