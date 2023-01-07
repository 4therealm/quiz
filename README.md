# Coding-quiz
A Timed multiple choice quiz, that runs in the browser. 
## Details  
Assignment #4  
Due: 1/7/2023  
Repo: https://github.com/4therealm/quiz  
Deployed: https://4therealm.github.io/quiz/  

<img src="/images/screencapture-4therealm-github-io-quiz-2023-01-07-08_38_32.png">  
<img src="/images/duringQuiz>   

## User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
## objectives
* WHEN I click the start button
THEN a timer starts and I am presented with a question
* WHEN I answer a question
THEN I am presented with another question
* WHEN I answer a question incorrectly
THEN time is subtracted from the clock
* WHEN all questions are answered or the timer reaches 0
THEN the game is over
* WHEN the game is over
THEN I can save my initials and score  

## What I Learned  
* The importance of pseudo coding before writing any actual code. I struggled with scope creep in my first few attempts. between the different web sources and youtube videos I just kept adding things I thought would make it look cool. I ended up with a bunch of little things that didn't work together and left me feeling very frustrated. after some guidance from my tutor I started a new script file focusing on the MVP, titled kiss, Keep it simple stupid.
* Class name targeting. by having class names like flex-row, flex-column, and hide. i could dynamically assign the classes in javascript to make the targeted elements behave in different ways.  
* The forEach loop is one of the cooler approaches I have learned for generating the answer buttons. 
* one of the problems i was having in the beginning was using a random index to cycle through the selected question. it caused questions to be repeated. after extensive googling I found the sort method and used that to shuffle the question pool and then just increment the index by 1 each question. looking back I could have just used the splice method to remove the question after it was asked.
* I had a lot of fun with the dynamic timer. figuring out how to code the basic timer itself. then how to reduce the time if a answer is incorrect. and my personal touch of the below10() function, which changes the color of the timer when the time reaches...you guessed it, below ten.

## Future Improvements
* I would like to rewrite the code at some point using jquery to see how much it consolidates the code.
* I did not love thew look of the prompt player score save
* at least a dozen more styling things I would like to tweak.accordion-body
* better leaderboard display



## sources
https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown  
https://www.youtube.com/watch?v=f4fB9Xg2JEY  
https://www.youtube.com/watch?v=riDzcEQbX6k&t=1441s
