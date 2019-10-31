export async function getArticles() {
    try {
        var section = document.getElementById("sectionName").value;
        var errorContainer = document.getElementById("errorContainer");
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${section}&apiKey=f7f0c071d73c4186ad64b9fdbd0fb6f0`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        populateDivWithResults(result.articles);
        errorContainer.style.visibility = "hidden";
    }
    catch (error) {
        errorContainer.style.visibility = "visible";
        document.getElementById("resultContainer").innerHTML = "";
    }
}

function populateDivWithResults(results){
    var container = document.getElementById("resultContainer");
    container.innerHTML = '';
    for (var i = 0; i < results.length; i++){
        var containerText = document.createElement("p"); 
        containerText.appendChild(document.createTextNode(results[i].title));
        var childContainer = document.createElement("div"); 
        childContainer.appendChild(containerText);
        container.appendChild(childContainer);
    } 
}