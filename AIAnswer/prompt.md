

# AIAnswer 

## Executive Summary 
This prompt creates a stand-alone web page for 
capturing questions from a live conversation and 
makes it easy to edit before sending them to AI.

## Development
As a senior javascript/css/html developer design a single page web app
A single html file
fit as much as possible in the screen without scrolling
it should look and feel like a mobile app

## Edit Link
Add an edit link to the top called "edit" that opens a new page to:
https://github.com/Systemsplanet/systemsplanet.github.io/blob/main/AIAnswer/index.html

## LISTEN MODE
The GUI contains a two state button called listenBtn
listenBtn value is on or off
listenBtn lable is LISTEN

when listenBtn is pressed
   if listenBtn == on then 
      stop listening
      listenBtn = off
   else
      listenBtn = on
      reset the GUI to clear previous questions list
      start Transcription API
      
### Transcription API
If listenBtn is on then
   Use microphone to listen 
   Transcibe voice to text
   Identify each question
   Add each question to top of questionList so the latest question is first in 
   
When transcription api returns then 
   reissue a new transcrption API request
    always be displaying.
   


      
      

## Question List
Keep each question asked in a questionList list box 
the questionList may be scrolled to select questions
only top 5 questions are visible at a time
questionList supports up to 50 questions max.
 
Each questionList entry:
   starts with a isSelected check box on the left of each entry.
   contains an editable questionText text box containing the question
   if no isSelected checkboxes are selected when a new question is added to the list then
      select the checkbox of the last question asked  

## ASK MODE
When the user hits ASK button
   Stop Listening
   if no questions are selected then select the first non blank question
   promptText = ""
   Starting with the last question in the list to the first question:
      if isSelected checkbox is selected then 
       add the question to the promptText plus a new line char
   If trimmed query length >1 then
      Send the query to AI

## Reply
Disply AI reply.
Optionally Read AI reply out loud.

# AI Options
OPENROUTER is the deafult AI.
Option to add new AI API keys
Option to select the AI key to use
Save API keys in a never expiring browser cookie



