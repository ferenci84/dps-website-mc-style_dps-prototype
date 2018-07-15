document.addEventListener("DOMContentLoaded",function() {
    console.log("content loaded")

    var readingSpead = 200;
    var charPerWord = 5.79;
    var charPerSec = readingSpead * charPerWord / 60;

    var els = document.getElementsByClassName("log");
    var t = new Date();
    for (i in els)  {
        var el = els[i];
        if (el.dataset)
            el.dataset.time = ('0'+t.getHours()).slice(-2)+":"+('0'+t.getMinutes()).slice(-2)+":"+('0'+t.getSeconds()).slice(-2)+","+('00'+t.getMilliseconds()).slice(-3);
        if (el.innerText) {
            var chars = el.innerText.length;
            var addMs = chars * (1/charPerSec * 1000);
            t.setMilliseconds(t.getMilliseconds() + addMs);
        }
    }

})
document.addEventListener("DOMContentLoaded",function() {

    var elems = document.querySelectorAll("div[data-size]");
    elems.forEach(function(elem) {
        var link = elem.parentNode;
        var href = link.getAttribute("href");
        var id = href.substr(1);
        var section = document.getElementById(id);
        var inner = section.innerHTML;
        elem.dataset.size = inner.length;
    })
})

document.addEventListener("DOMContentLoaded",function() {
    var links = document.querySelectorAll("a.page-selector[href]");
    links.forEach(function(link) {
        var href = link.getAttribute("href");
        if (href.charAt(0) == '#') {
            var id = href.substr(1);
            var element = document.getElementById(id);
            if (!link.classList.contains("selected")) {
                element.classList.add("hidden");
            } else {
                element.classList.remove("hidden");
            }
            link.addEventListener("click",pageSelectorClick);
        }
    });
    function pageSelectorClick(event) {
        event.preventDefault();
        var thisLink = event.currentTarget;
        var parent = thisLink.parentNode.parentNode;
        var allLinks = parent.querySelectorAll("a");
        allLinks.forEach(function(link) {
            var href = link.getAttribute("href");
            if (href.charAt(0) == '#') {
                var id = href.substr(1);
                console.log(id);
                var element = document.getElementById(id);
                if (link !== thisLink) {
                    link.classList.remove("selected");
                    element.classList.add("hidden");
                } else {
                    link.classList.add("selected");
                    element.classList.remove("hidden");
                }
            }
        })


    }
});

window.addEventListener("load",function() {
    console.log("page loaded")
})