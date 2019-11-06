export function showError(error) {
  document.getElementById("resultContainer").innerHTML = "";
  alert(Singleton.getInstance(error).message);
}

var Singleton = (function() {
  var instance;

  function createInstance(error) {
    var object = {
      message: error
    };

    return object;
  }

  function changeInstance(error) {
    instance.message = error;
  }

  return {
    getInstance: function(error) {
      if (!instance) {
        instance = createInstance(error);
      } else {
        changeInstance(error);
      }

      return instance;
    }
  };
})();
