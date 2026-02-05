As a senior web developer
Create a responsive web application called "MyStuff" for managing your possessions with the following features:

**Core Interface:**

- Header with "MyStuff" title and "Add" button

- Data table with columns: Room,  Name, Location, Description, Updated
- Filter dropdowns for "All Rooms" and "All Names"
- "Save to GitHub" button

**Modals:**
1. **Add Stuff Modal** 
- Form with fields: Room, Name, Location, GPS, Description
- Location field has a microphone icon allows the user to say the location. Speech to text api is used to capture the text
- GPS Icon uses precise GPS to save the location
- Picture button allows User to take a picture of an object
- Each picture taken is saved to github and is associated with the object
- Use Openrouter to access AI
- Use AI to process scanned images and write a detailed description of every aspect of the object including category, manufacture, model name, serial number, color, size, weight, etc
- save details to github single json file.
- Save the image in a folder named by the room it lives in. 
- Save the image names as room/name-yyyy-hh-mm-ss.
- Save the image filenames and related attributes (Room,  Name, Location, GPS, Description) to github in a single json file.


2. **GitHub Save Modal** 
- Form with: GitHub Owner, Repository Name, File Path, GitHub API Key, Log area



**Functionality:**
- Duplicates basic funtionality of
dib.io
- Add, edit, delete Stuff
- Filter by Room and Name
- Save data to GitHub via API
- Duplicate prevention
- Allow the user to ask AI questions about the information collected

**Tech Stack:** 
- Responsive design
- HTML
- CSS with consistent naming convention 
- JavaScript 
 vanilla or framework of choice
 with consistent naming convention 

**Styling:** 
Clean, modern interface with modal overlays and form validation
output a single html file.


   
