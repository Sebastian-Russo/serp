I made this app in response to a chanlge requested by Vimeo.

To start up the app, $ npm run go
This will install any dependencies, then start the app.
Otherwise, $ npm start
Will simple start up the app.

It starts with a search bar fixed atop. I started with just an input and an onChange method. Upon further review, I realized I'd need a form to submit, to more acturately reflect Vimeo's example.
After setting up the Axios API call, and receving data, I noticed I'd need to set up a query string as well, to reflect in the URL. After a couple white board drawings for myself, I decided the best route would be to put the API request in the App top layer. I did this because I was looking for a way to pass down the data to the component that rendered the results, and I did not want to use a heavy and robust solution, such as Redux, for such a light weight app. Then I passed up the user input data from the form component to App.js component, and back down to SearchResults.js component to be rendered.
I styled it myself with CSS, but I did use bootstrap just a little, to quickly make the app mobile first friendly and responsive to all viewport sizes.
Lastly, you can hover over the results and see a bit more information about them. Moving forward, I'd have liked to render the next component when you click the individual result and have it show more information about that result. I stopped though, because I want to have this project in by the deadline.
