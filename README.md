# Sign up Page for cosmetic salon

a sign up page for a cosmetic salon the client fill the form the the manager receives a mail with the client details
*the mail and the template mail can ve changed in the JS file

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (desktop and Mobile)
- see the correct animation based on their device
- the user will be able to fill his information and send it to the business owner
- the user can fill the information with every languages.

### Screenshot

![screenshot of the website](/public/images/mobile.png)

### Links

- Live Site URL: [ Click to See the Site](https://firstsignuppageoriguy.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap5
- SCSS custom properties
- Flexbox
- Vanilla JavaScript
- nodeJs - express, body-parser, nodemailer
- Mobile-first workflow

### What I learned

the project was very insightful for me i've learned:

- how to work with bootstrap5
- how to work with nodeJS for backend
- how to work with npm libraries
- how to work with local server (express),get the users input (body-parser) and send mail (nodeMailer)
- work with color pallette.
- how to work with 2 pages website

```JavaScript
document.addEventListener('click', (e) => {
    let lang = e.target.innerHTML;
}
```

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mail = require('nodemailer');
```
```JavaScript
app.listen(port, () => {
    console.log(`Welcome the server is running on port: ${port}`);
})
```
```JavaScript
app.get('/', (request, respond) => {
    respond.sendFile(__dirname + '/index.html');
})
})
```
```SCSS
$firstColor: #f9dfdf;
$lightFirstColor: #fdf5f5;
$DarkerFirstColor: #eeaaa9;
$Darker2FirstColor: #f39291;
$secondColor: #c8a77a;
$thirdColor: #96665c;
$fourthColor: #c6acaa;
$darkColor: #473232;

```

### Continued development

I will continue to focus on:

- more organized code and clean code.
- deeper understanding of nodeJS and server side
- deeper understanding of front end subjects like SCSS and JavaScript.

### Useful resources

- [https://sass-lang.com/](https://sass-lang.com/) - this site help me understand the Scss semantics
- [https://www.w3schools.com/](https://www.w3schools.com/) - this site is my defult site to aquire knowlage about html, css and javascript
- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/) - this site if amazing if i and to take a deeper dive to understand properties bout html, css and javascript

## Author

- Website - [Ori Guy](https://github.com/origuy)
