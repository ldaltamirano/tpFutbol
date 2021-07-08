const URL = 'https://www.theaudiodb.com/api_guide.php';

function searchMatches(){
  const promise = fetch(`https://www.scorebat.com/video-api/v1/`);

  promise.then(response => {
    return response.json();
  }).then(result => {
    var lastMatches = document.getElementById("lastMatches");
    for (let index = 0; index < result.length; index++) {
        var match = createMatchcCard(result[index]);
        lastMatches.appendChild(match);
    }

    var images = document.getElementById("lastMatches").getElementsByClassName("thumbnail");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function() {
          var m = this;
          var mJson = m.getElementsByClassName("inputMatch")[0].value;
          fillCurrentMatch(JSON.parse(mJson));
        }
    }
  }).catch(err =>{
    console.log('salio mal!: ', err);
  });
}

function fillCurrentMatch(match) {
  var h2CurrentMatch = document.getElementById("current-title");
  var currentMatch = document.getElementById("current-match");
  h2CurrentMatch.innerHTML = match["side1"]["name"] + " vs " + match["side2"]["name"];
  currentMatch.innerHTML = match["embed"];

  var currentSesion = document.getElementById("current-section");
  var curretHeader = document.getElementById("current-header");

  currentSesion.style.display = "block";
  curretHeader.style.display = "none";
}

searchMatches();

