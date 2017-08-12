
// 1. First select and store the elements you'll be working with

let musicPlayer = document.getElementById('musicPlayer');
let button = document.getElementById('button');
let resultsSection = document.getElementById('resultsSection');



//********* Search Button Event *********************************//
button.addEventListener("click", function(){
  let search = document.getElementById('search');
  console.log(search.value);
//This adds the required "+" to the string for iTunes//
  let str = search.value.split(' ').join('+');
  console.log(str);
//Makes entry equal to the API string and limits results to 25//
  let entry = "https://itunes.apple.com/search?term=" + str + "&limit=25";
//Clears out results section in case of previous searches//
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
          console.log("Here is the data:", data);
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
