Create an app:
- called AIStore
- written in javascript/css/html 
- runs in a single pure javascript file
- stores AI Prompts 
- each AI Prompt has a Category, Prompt Name, AI Name, Prompt Text, Date Created, Date Updated, User ID, Notes fields
- gui has popup to edit: URL, User, API Key strings saved in a perminate browser cookie
- store and retrieve AI Prompts using URL, User, API Key
-on first run set URL to ​https://systemsplanet.github.io/AIStore/​prompts.json
User to systemsplanet, and API Key to blank
- on first run load defaults from URL
- gui allows you to add/edit/remove Categories strings
- gui allows you to add/edit/remove AI Names strings
- gui allows you to add/edit/remove AI Prompts strings
- each prompt is identified by a unique Category/ Prompt Name / AI Name 
- never ​save a duplicate prompt
- copy the currently selected Prompt Text to the clipboard 
- gui includes a button to save the currently selected Prompt Text to the clipboard
-gui has a free form text Search at top the matches any Category, AI Name, Prompt Name, or Prompt Text 
-gui top has a drop down for Category that includes All and Add New. All matches all Categories. Add New allows you to add a new Category.
Default to All. 
-gui top has a drop for AI Name that includes All and Add New. All matches all AI Names. Add New allows you to add a new AI Name. 
Default to All. 
-if URL includes "github.com" then use User,API Key, and URL to ask the github api to save all queries to URL
- search results update as you type
-search results is a grid containing all the columns in a prompt that match the current query
-if needed, prompt for the User,  URL and API Key to save changes.
-gui top has a Storage button for editing:User, Path and API Key 

