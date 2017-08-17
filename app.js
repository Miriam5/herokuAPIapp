//Directions: remove the comment-out to try out each pair

//source: https://github.com/toddmotto/public-apis#books
//var endpoint = 'https://api.github.com/search/users?'
//var parameters = 'q=NearGreenPhilly'

//google books 
//var endpoint = "https://www.googleapis.com/books/v1/volumes?";
//var parameters = "q=little+prince";
//try both parameters!
//var parameters = "q=pit + bulls";

//tacoFancy API -- gets a random tao recipe https://github.com/evz/tacofancy-api
//var endpoint = "http://taco-randomizer.herokuapp.com/random/?";
//var parameters = "full-taco=true";

//open.fec.gov -- can't figure out the params from the documentation
//var endpoint = "https://api.open.fec.gov/v1/names/candidates?";
//var APIkey = 'Tqg1jgl6bNig7xCrQ43bDPkIA8eOWUY5wR2AdDGF';
//var parameters = "";

//L&I endpoints: http://phlapi.com/licenseapi.html
//var endpoint = "http://services.phila.gov/PhillyApi/Data/v1.0/licenses?";
//var parameters = "$expand=locations";

//cocktails https://forum.kodi.tv/showthread.php?tid=235298&pid=2079513#pid2079513
var endpoint = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?';
var parameters = 's=margarita';

$.ajax({
 	url: endpoint + parameters,
 	method: 'GET'
 }).done(function (data) {
 	console.log(data);
 });

//
/*notes
 //next iteration: print to screen, like this? 
$(".api-calls").append(data.???);
 .done(function (data) {
 	this function is our data
 });
 $.getJSON() is another way to do this.
 */ 
