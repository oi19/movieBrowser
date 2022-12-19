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
   
   - components folder
     
       - SearchBar.js
       - MovieContainer.js
       - DataText.js
       - Ratings.js
      
   
   - redux folder 
       - actions folder (responsible for state actions )
          - MovieScreenAction.js (includes the post & get requests using axios method as well as handling the authentication process both auto & manually)
          - SearchScreenAction.js
       - reducer folder (responsible for state data and changes)
          - MovieScreenReducer.js (MovieScreen State)
          - SearchScreenReducer.js (SearchScreen State)
          
   - navigation folder 
       - navigation.js (responsible for navigation between different screens     
    
   - screens 
      - SearchScreen.js
      - MovieScreen.js
  
 ## Tools   
  - languages
    - javaScript 
    - JSX
    
  - FrameWork
    - React Native 
 

# Setup
   ```shell script
- git clone https://github.com/oi19/movieBrowser/tree/redux
- cd movieBrowser
- run project on android studio or via physical devic
```
Run these following commands to run the app in inside movieBrowser folder.

```shell script
- npx react-native start (android studio version)
- npm start (physical device expo)
```
