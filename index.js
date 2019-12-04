const axios = require('axios');
const inquirer = require('inquirer');
const pdf = require('html-pdf');


//variables to hold user responses
var username;
var color;

//build url with username variable for github api
var urlBase = 'https://api.github.com/users/';

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
    axios.get(url).then(buildHTML);
});

function buildHTML(response) {
  const {
    name, 
    login, 
    location, 
    avatar_url,
    html_url, 
    bio,
    public_repos,
    followers,
    following,
    public_gists
  } = response.data;
  const html =  
  `
    <html>
    <style>
    body {
    background-color: ${color};
    </style>
      <body>
        <h1>${name} | <span>${login}</span></h1>
        <h2>${location}</h2>
        <img width="50" height="50" src="${avatar_url}" />
        <p>Link to Github: ${html_url}</p><br>
        <p>Bio: ${bio}</p><br>
        <p>Repositories: ${public_repos}</p><br>
        <p>Followers: ${followers}</p><br>
        <p>Following: ${following}</p><br>
        <p>Stars: ${public_gists}</p>
      </body>
    </html>
  `;
  writeToPDF(html);
}

function writeToPDF(html) {
  const options = { format: 'Letter' };
  pdf.create(html, options).toFile('./resume.pdf', (err) => {
    if (err) throw err;
  });
} 