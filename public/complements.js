document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();      // get the json result object from server
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;      // replace the innerText in the tag class .complement with the data from the complement from server
      })
      .catch(function(err) {
        console.error(err);     // console log if error
      });
  });