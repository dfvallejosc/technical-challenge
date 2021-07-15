# Reverse text app
This app lets you write a text and it will give you the same text bur reversed.  This app has been deployed at https://cryptic-depths-68642.herokuapp.com/ if you want to checkout

## What contains?
This app is build over the following stack: node-express for backend and react-redux for frontend, so you will find two main folders API (backend) and CLIENT (frontend).
Inside this folders you cand find different scripts that let you build and running the app.

## USE

For running this app locally, you need to clone this repository and go to each api and client folders, and install all dependencies with command "npm install"
After this, you can run the backend (which is running on PORT 3001) tying the command "npm run dev".  The end point that gets you the reveser text would be:

http://localhost:3001/iecho?text={text to reverse}

For frontend, you need to type the command "npm start" and app will be running on port 3000.
Inside the app, you can type the text you want to reverse on the input field and click on the button "SEND". After that, you will see the result on the box bellow.
If you want to erase the content of the results box, you just need to load the page.

## Testing
For testing, you need to execute command "npm test" inside API folder.  This will test the backend routes and it will make sure that all is working ok.


I hope you enjoy this work! :)




