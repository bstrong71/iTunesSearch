
// 1. First select and store the elements you'll be working with

let musicPlayer = document.getElementById('musicPlayer');
let button = document.getElementById('button');
let resultsSection = document.getElementById('resultsSection');



//********* Search Button Event *********************************//
button.addEventListener("click", function(){
  let search = document.getElementById('search');
  let song = musicPlayer.src;
  // console.log(musicPlayer.src);
//This adds the required "+" to the string for iTunes//
  let str = search.value.split(' ').join('+');
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

          for (var i = 0; i < data.results.length; i++) {
          //******* creating each song search result ********//
            let songResult = document.createElement('div');
            songResult.setAttribute("class", "each_container");
            let songImage = document.createElement('img');
            songImage.setAttribute("src", data.results[i].artworkUrl100);
            songResult.innerHTML =
            `
              <p>${data.results[i].trackName}</p>
              <p>${data.results[i].artistName}</p>
            `
          // ******** adding the content to the parent ********//
            songResult.appendChild(songImage);
            resultsSection.appendChild(songResult);

          // ******** adding clickability to each song image ********//
            songImage.value = i;
            songImage.addEventListener('click', function(event){
              console.log('event', event);
              console.log('event.target', event.target);
              console.log('event.target.value', event.target.value);
        // ******** call playSong function with specific song value ******** //
              playSong(event.target.value);
            })
          }

        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
})
// ******** Function to play the selected song ******** //
function playSong(index){
  

}

// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page



// 5. Create a way to listen for a click that will play the song in the audio play
