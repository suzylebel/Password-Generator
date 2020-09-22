HOMEWORK ASSIGNMENT 3: Password Generator

Explore the [Deployed Password Generator](https://suzylebel.github.io/Password-Generator/)

View the [Github page](https://github.com/suzylebel/Password-Generator)

## Table of Contents
1. User story

  
2. About the Project
3. Tech/Framework used
4. Code Breakdown
5. Contributing
6. License
7. Contact
8. Credits
9. UI // Things to update


 ## User story 

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```


## About the Project

The goal of this project was to create a password generator with the selected length prompted to the user, and to randomly distrubute characters, letters and numbers based on what the users request was. My first vision was more complicated than it needed to be. Using javascript, I created 2 functions: The (generatePassword) and anothe function that held Math.floor(Math.Random). My approach to this was to avoid the "dry principle: do not repeat yourself in coding." I found myself repeating lots of code and was able to condense it to less than 80 lines of javascript code. 

## Continuity on all 3 pages

On all 3 pages the navbar, background image, and sticky footer are the same. The background image was taken from the sample images to complete the exact look requested by our proffesor, John. When the pages are shrunk the navbar has a dropdown bar and is responsive on all of the pages. 


## Tech Used
The index.html and style.css were provided to start.
I created my two functions in javascript and they were linked to my index.html page. 

## Code Breakdown

After the user clicks on the red generate password button they are prompted with a series of questions to answer so my code can create them a password. 






 While statements: 
 I created 2 while statements that alert the user if what they have selected or typed in is not a valid statement. 
 If they select a number less than 8 or over 128 (or invalid things such as letters) it will alert them to "try again" and select a number so a password can be generated. 

 
 ```while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){ 
    passwordLength = prompt("Please select a number between 8 and 128 to generate your password characters.");
  }
  ```
![](images/select_pwd.png)
 
 The while statement for the lowercase, uppercase, numbers and special characters is crucial because if they select 'cancel for all 4 my code has no way to generate a password. It will restate the confirm questions to the user so a password can be generated. 
 

    while (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert("Must select a character type to create a password!")
    var upperCase = confirm("Do you want uppercase letters? (click OK for yes, or cancel for no)");
    var lowerCase = confirm("Do you want lowercase letters? (click OK for yes, or cancel for no)");
    var numbers = confirm("Do you want numbers? (click OK for yes, or cancel for no)");
    var specialCharacters = confirm("Do you want special characters? (click OK for yes, or cancel for no)");
    
![](images/alert_select.png)

## Contribute
If you’d like to fork this project from github please feel free! With a pull request I can grant you access to leave comments and notes about this project. 

## License 
None
 
## Contact 

Suzy Le Bel 
suzy.lebel@gmail.com

Project Link can be found [here.](https://suzylebel.github.io/Password-Generator/)

## Credit
Assistance from Amanda Crawford (BCS Tutor). 


## UI
I would like to be able to store the passwords generated and give the user an easier return option to restart their password conditions. 
