
// 1. First select and store the elements you'll be working with

let musicPlayer = document.getElementById('musicPlayer');
let button = document.getElementById('button');
let resultsSection = document.getElementById('resultsSection');



//********* Search Button Event *********************************//
button.addEventListener("click", function(){
  let search = document.getElementById('search');
  let song = musicPlayer.src;
  console.log(musicPlayer.src);
//This adds the required "+" to the string for iTunes//
  let str = search.value.split(' ').join('+');
  console.log(str);
//Makes entry equal to the API string and limits results to 25//
  let entry = "https://itunes.apple.com/search?term=" + str + "&limit=20";
// Clears out results section in case of previous searches//
  resultsSection.innerHTML = "";
//Boilerplate fetch from API//
  fetch(entry)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log("Here is the data: ", data);
          console.log(data.results.length);
          for (var i = 0; i < data.results.length; i++) {

            let songResult = document.createElement('article');
            songResult.setAttribute("class", "each_container");

            let songDetails = document.createElement('div');
            songDetails.setAttribute('class', 'song_details');
            songDetails.innerHTML =
            `
              <img src=${data.results[i].artworkUrl100}>
              <p>${data.results[i].trackName}</p>
              <p>${data.results[i].artistName}</p>
            `

            songResult.appendChild(songDetails);
            resultsSection.appendChild(songResult);
          }

        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
})


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page



// 5. Create a way to listen for a click that will play the song in the audio play
