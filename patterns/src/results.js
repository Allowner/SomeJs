class Request {
  constructor(url, init) {
    this.url = url;
    this.init = init;
  }
}

class RequestFactory {
  constructor(type, urlString, params) {
    this.type = type;
    this.urlString = urlString;
    this.params = params;
  }

  createRequest() {
    switch (this.type) {
      case "GET":
        var url = new URL(this.urlString);
        url.search = new URLSearchParams(this.params).toString();
        return new Request(url, { method: this.type });
      case "POST":
        return new Request(this.urlString, {
          method: this.type,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.params)
        });
      case "PUT":
        return new Request(this.urlString, {
          method: this.type,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.params)
        });
    }
  }
}

class SimpleRestApiClient {
  constructor() {
    this._doFetch = new Proxy(this._doFetch, {
      apply: function(target, thisArg, argumentsList) {
        const [url, options] = argumentsList;
        console.groupCollapsed(`url: ${url}`);
        console.log("type:", options.method);
        console.groupEnd();
        return target.apply(thisArg, argumentsList);
      }
    });
  }

  _doFetch(url, requestOptions) {
    return fetch(url, requestOptions);
  }
}

export async function getArticles() {
  try {
    var section = document.getElementById("sectionName").value;
    var getParams = [
      ["country", "us"],
      ["category", section],
      ["apiKey", "f7f0c071d73c4186ad64b9fdbd0fb6f0"]
    ];
    var getRequestFactory = new RequestFactory(
      "GET",
      "https://newsapi.org/v2/top-headlines",
      getParams
    );
    var fetchParams = getRequestFactory.createRequest();
    var client = new SimpleRestApiClient();
    const response = await client._doFetch(fetchParams.url, fetchParams.init);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const result = await response.json();
    populateDivWithResults(result.articles);
  } catch (error) {
    import("./error").then(module => {
      module.showError(error);
    });
  }
}

function populateDivWithResults(results) {
  var container = document.getElementById("resultContainer");
  container.innerHTML = "";
  for (var i = 0; i < results.length; i++) {
    var containerText = document.createElement("p");
    containerText.appendChild(document.createTextNode(results[i].title));
    var childContainer = document.createElement("div");
    childContainer.appendChild(containerText);
    container.appendChild(childContainer);
  }
}
