// Load a book form disk
function loadBook(filename, displayName) {
    let currentBook = "";
    let url = "books/" + filename;

    // reset our UI
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchStat").innerHTML = "";
    document.getElementById("keyword").value = "";

    // create a server request to load our book
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true );
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            currentBook = xhr.responseText;

            document.getElementById("fileContent").innerHTML = currentBook;

            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop = 0;
        }
    };
} 