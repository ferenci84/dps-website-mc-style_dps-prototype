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
        if (href && href.substr(0,1) == "#") {
            var id = href.substr(1);
            var section = document.getElementById(id);
            var inner = section.innerHTML;
            elem.dataset.size = inner.length;
        }
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
        var parent = thisLink;
        while(parent.parentNode) {
            parent = parent.parentNode;
            if (parent.classList.contains("page-list")) break;
        }
        var allLinks = parent.querySelectorAll("a");

        allLinks.forEach(function(link) {
            var href = link.getAttribute("href");
            if (href && href.charAt(0) == '#') {
                var id = href.substr(1);
                var element = document.getElementById(id);
                link.classList.remove("selected");
                element.classList.add("hidden");
            }
        })

        allLinks.forEach(function(link) {
            var href = link.getAttribute("href");
            if (href && href.charAt(0) == '#') {
                var id = href.substr(1);
                var element = document.getElementById(id);
                if (link === thisLink) {
                    link.classList.add("selected");
                    element.classList.remove("hidden");
                }
            }
        })


    }
});

document.addEventListener("DOMContentLoaded",function() {
    var links = document.querySelectorAll("a.open-modal[href]");
    links.forEach(function(link){
        var href = link.getAttribute("href");
        var id = href.substr(1);
        var element = document.getElementById(id);
        link.addEventListener("click",function(event) {
            event.preventDefault();
            element.classList.remove("hidden");
        })
        element.addEventListener("click",function(event) {
            if (event.target === element) {
                element.classList.add("hidden");
            }
        })
    })
});

document.addEventListener("DOMContentLoaded",function() {
    var h2s = document.querySelectorAll("h2");
    h2s.forEach(function(h2) {
        var wrapper = document.createElement("div");
        wrapper.classList.add("h2-wrapper-block");
        h2.parentNode.insertBefore(wrapper,h2);
        var h2wrapper = document.createElement("div");
        h2wrapper.classList.add("h2-wrapper");

        var h2innerwrapper = document.createElement("div");
        h2innerwrapper.appendChild(document.createElement("div"));
        h2innerwrapper.appendChild(h2);
        h2innerwrapper.appendChild(document.createElement("div"));

        wrapper.appendChild(h2wrapper);
        h2wrapper.appendChild(document.createElement("div"));
        h2wrapper.children[0].appendChild(document.createElement("div"));
        h2wrapper.appendChild(h2innerwrapper);
        h2wrapper.appendChild(document.createElement("div"));
        h2wrapper.children[2].appendChild(document.createElement("div"));
    })
});
document.addEventListener("DOMContentLoaded",function() {
    document.querySelectorAll(".container").forEach(function(container) {
        container.querySelectorAll(".explanation").forEach(function(expl) {
            expl.addEventListener("mouseover",function (event) {
                    var content = expl.querySelector(".explanation-content");
                    content.style.left = 0;
                    var contentOffset = content.getBoundingClientRect();
                    var containerOffset = container.getBoundingClientRect();
                    var delta = contentOffset.right - containerOffset.right;
                    if (delta > 0) {
                        content.style.left = "-" + delta + "px";
                    }
            })
        });
    });
});

window.addEventListener("load",function() {
    console.log("page loaded")
})