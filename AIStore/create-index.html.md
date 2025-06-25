<comment>
File: https://systemsplanet.github.io/AIStore/create-index.html.md
</comment>

As a Senior web developer 
Create an app:
- called AIStore
- written in javascript/css/html 
- run in a single pure javascript file
- Prompts URL is "https://github.com/Systemsplanet/AIStore/blob/main/prompts.json"
- single Github object with fields
​    GitHub Owner​
       default: "systemsplanet"
   ​ Repository Name​
​       default: "AIStore​"
​    File Path​
       default: "prompts.json"
​    GitHub API Key (Personal Access Token)​
       password field
       default: ""
​- Github is saved as json in a browser cookie called Github that never expires

- array of AI Prompt objects with fields:
     Category
        string
     Prompt Name
        string
     AI Name
        string
     Prompt Text
        string
     Date Created
        string
     Date Updated
        string
     User ID
        string
     Notes 
        string
- AI Prompt objects
      are identified by a unique Category/ Prompt Name / AI Name 
      stored and retrieved using ​Githib into a single file prompts.json
      load url Prompts URL for the json format
      gui for adding/editing/removing/saving

- gui Copy button saves the Prompt Text of the current AI Prompt object to the clipboard 
- gui has popup called "Save" with Github icon
     grayed out when editing a duplicate AI Prompt
     loads the Github object from Github cookie
     allows you to edit Github object
     saves Github cookie on each keystroke
     "Save to Github" button
        sort AI Prompt objects by Category, Prompt Name, AI Name, Prompt Text 
        save AI Prompt objects to github using Github settings
        log github detailed results
        close popup
- gui top Search Query
    free form text
    matches any Category, AI Name, Prompt Name, or Prompt Text
      
-gui top has a Category Dropdown that
    starts with *
    defaults to *
    contains all available unique Categories
    selecting a Category filters Search Results
    selecting * matches all Categories in Search Results

-gui top has a AI Name Dropdown that
    starts with *
    defaults to *
    contains all available unique AI Names
    selecting a AI Name filters Search Results
    selecting * matches all AI Names in Search Results

- Search Results 
    is a grid containing all the columns in a AI Prompt
    contents match the current Search Query and Category Dropdown and AI Name Dropdown
    truncates the Prompt Text and Notes fields at 30 chars
    updates as you type the Search Query

-on first run
    - fetch AI Prompts from Prompts URL, log result
    - load AI Prompts from Github, log result
    - display all AI Prompts in Search Results


