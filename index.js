var fs = require('fs');
var inquirer = require('inquirer');
var axios = require("axios");

//variables to hold user responses
var username;
var color;

//build url with username variable for github api
var urlBase = 'https://api.github.com/users/';

//variables to hold api response

var imageSrc;
var login;
// * Links to the following:
//   * User location via Google Maps
//   * User GitHub profile
//   * User blog
var Bio;
var repoCount;
var followers;             
var stars;
var following;

function printVariables() {
    console.log(username);
    console.log(color);
    console.log(url);
}

function getData() {
      axios.get(url).then(function(res) {
    imageSrc = res.data.avatar_url;
    login = res.data.login;
    bio = res.data.bio;
    repoCount = res.data.public_repos;
    followers = res.data.followers;
    stars = res.data.public_gists;
    following = res.data.following;
    console.log(imageSrc);
    console.log(login);
    console.log(bio);
    console.log(repoCount);
    console.log(followers);
    console.log(stars);
    console.log(following);
    });
}

//create prompts for favorite color and username.
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your favorite color?",
      name: "color"
    }
  ])
  .then(function(response) {
    username = response.username;
    color = response.color;
    url = urlBase + username;
    getData();
  });

  //---------------------------------------------------------------------------------

//   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//   axios.get(queryUrl).then(function(res) {
//     const repoNames = res.data.map(function(repo) {
//       return repo.name;
//     });

//     const repoNamesStr = repoNames.join("\n");

  //---------------------------------------------------------------


//     fs.writeFile("repos.txt", repoNamesStr, function(err) {
//       if (err) {
//         throw err;
//       }

//       console.log(`Saved ${repoNames.length} repos`);
//     });
//   });


const questions = [
    `what is your github username?`,
    `what is your favorite color?`  
];

function writeToFile(fileName, data) {

// fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Commit logged!");
//   }

};

 function init() {

}

// init();


