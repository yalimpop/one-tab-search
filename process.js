function processRequest(e) {
    alert("hey")
    if (page.readyState == 4) {
        var response = JSON.parse(page.responseText);
         alert("hey")
    }
}
