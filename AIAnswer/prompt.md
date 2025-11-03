

# AIAnswer 

## Executive Summary 
This prompt creates a stand-alone web page for 
capturing questions from a live conversation and 
makes it easy to edit before sending them to AI.

## Development
As a senior javascript/css/html developer 
   design a single page web app.
   A single html file.
   fit as much as possible in the screen without scrolling.
   it should look and feel like a mobile app.

## Edit Link
Add an edit link to the top called "edit" that opens a new page to:
https://github.com/Systemsplanet/systemsplanet.github.io/blob/main/AIAnswer/index.html

# AI Options
OPENROUTER is the default AI.
Option to select the AI key to use.
Store in a never-expiring browser cookies:
    API keys.
    Active AI.
    
## LISTEN MODE
The GUI contains a two state button called listenBtn.
listenBtn value is on or off.
listenBtn lable is LISTEN.

when listenBtn is pressed
   if listenBtn value == on then 
      listenBtn value = off.
      abort Transcription API.
   else
      listenBtn value = on.
      call Transcription API in a new thread.
      
## Question List
Keep each question asked in a questionList list box.
questionList may be scrolled to select questions.
only last 5 questions are visible at a time.
questionList supports up to 50 questions max.
latest question is at the end of questionList.
 
Each questionList entry:
   isSelected check box on the left of each entry.
   editable questionText text box containing the trimmed question text. 

## Answer MODE
The GUI has a two state button called answerBtn.
answerBtn label is ANSWER.
answerBtn value is on or off.
When answerBtn selected
   if answerBtn value == on then
     answerBtn value = off.
.  else
     answerBtn value = on.
     Stop Transcription API.
     if questionList has no entries where isSelected == on then
        for each questionList entry ql in reverse order
           if ql.questionText not blank
              ql.isSelected = on.
              break.
     let promptText = "".
     for each questionList entry ql
        if ql.isSelected == on then
           let prompt = trim ql.questionText.
           if length of prompt > 0 then 
              promptText += prompt + Carriage Return.
     If length of trim promptText >0 then
        Send promptText to AI API.
        Disply AI reply.
        Optionally Read AI reply out loud.
     answerBtn value = off.

### Transcription API
While listenBtn is on then
   Use microphone to listen. 
   Transcibe voice to text.
   for each question identified 
      Scroll up questionList entries one entry discarding the first entry.
      Add question to bottom of questionList so the latest question is last entry.
   Scroll questionList GUI to bottom.

# End of prompt
