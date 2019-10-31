function createContainers() {
    var main = document.getElementById("mainContainer");

    var inputContainer = document.createElement("div");
    inputContainer.setAttribute("id", "inputContainer");
    var label = document.createElement("label");
    label.setAttribute("for", "name");
    label.innerText = "Enter category name";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "sectionName");
    input.setAttribute("name", "name");
    var button = document.createElement("button");
    button.onclick = e => import('./results').then(module => {
        module.getArticles();
    });
    button.innerText = "Show";
    inputContainer.appendChild(label);
    inputContainer.appendChild(document.createElement("br"));
    inputContainer.appendChild(input);
    inputContainer.appendChild(button);

    var errorContainer = document.createElement("div");
    errorContainer.setAttribute("id", "errorContainer");
    errorContainer.style.visibility = "hidden";
    var containerText = document.createElement("p"); 
    containerText.appendChild(document.createTextNode("There is no such section!"));
    errorContainer.appendChild(containerText);

    var resultContainer = document.createElement("div");
    resultContainer.setAttribute("id", "resultContainer");
    
    main.appendChild(inputContainer);
    main.appendChild(errorContainer);
    main.appendChild(resultContainer);

    var linkP = document.createElement("p"); 
    var link = document.createElement("a");
    link.setAttribute("href", "https://newsapi.org/");
    link.appendChild(document.createTextNode("Powered by News API"));
    linkP.appendChild(link);
    linkP.style.marginBottom = 0;
    main.appendChild(linkP);
}

window.onload = function() {
    createContainers();
}
