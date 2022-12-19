# Movie Browser
  
  - In this project, It will allow users to search for movies included in the (http://www.omdbapi.com/) and view additional information about any movies they select.
  - as well as the ability for future improvments and adding new features   
  - Adding the abitlity toggle between screens using navigation stucture (StackNavigator)
  - using  Redux to handle state managment  with many features such as 
     - pagination 
     - refresh (get back to the top with first page data)
     - handling negative (null) get requests 
  
  
  # Project Structure 
  
  ## App.js 
   - This file creates the app structure by creating app Container and the Navigation structure as well as the state managment whether context(Providers) or redux 
  
  
  ## src folder 
   - api folder
       - omdb.js 
          - handles the api requests as well as handling the authentication process 
            
   
   - components folder
     
       - SearchBar.js
       - MovieContainer.js
       - DataText.js
       - Ratings.js
      
   
   - context folder 
       - createDataContext.js (responsible for creating Context & blue print for using Context)
       - BlogContext.js(handles the blogs data => posting and fetching requests
   
   - hooks
      - costumeHook1.js
      
    
   - screens 
      - SearchScreen.js
      - DetailScreen.js
  
 ## Tools   
  - languages
    - javaScript 
    - JSX
    
  - FrameWork
    - React Native 
 

# Setup
   ```shell script
- git clone https://github.com/oi19/movieBrowser/edit/redux
- cd movieBrowser
- run project on android studio or via physical devic
```
Run these following commands to run the app in inside movieBrowser folder.

```shell script
- npx react-native start (android studio version)
- npm start (physical device expo)
```
