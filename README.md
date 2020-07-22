## Contact List
Show a list of contacts using Typescript and vanilla Javascript

___

### Usage
`yarn install` - to install dependencies  
`yarn test` - to run tests  
`yarn start` - to run locally (although `.env` variables are required)  

___

### Explanation

#### Using Typescript
I've never used Typescript, so I was happy to have the opportunity to do so here. Javascript can sometimes feel like the wild west, so strong-typing it is a nice feeling. That said, I used Typescript for the React components, but the helper functions are written in plain Javascript.

#### Testing
I always like to test my components but do realize it's difficult to get 100% coverage on the frontend. That said, I've covered many of the logical functions and branches hit on this app. Testing here will show a verbose readout as well as a coverage report. 

#### Accessibility
I like using Lighthouse (Chrome) to generate a coverage report, although there are other tools. That can help ensure the site is covered for screen readers or tab indexing. Lighthouse failed here on one test (background color contrast), but that could easily be cleared up with a broader style guide or a chat with the designer.

#### Keeping it responsive
Not much to do here. The app works with touch events and looks alright with a screen resize. Tables are sometimes difficult to scale for mobile.

#### Using an error message
It seems in good form to display an error message in case or lost connectivity or... an error. The error message here is a bit boilerplate and shows a default message in case a valid response with contact data isn't received. Normally, the error could also display the message returned from the server.

#### Cors-anywhere
I did end up using cors-anywhere. I spun up my own implementation of it and hosted it on Heroku. Although I was hesitant hosting something like this on Heroku, there is rate limiting for security purposes, so it shouldn't be an issue.

#### Table
Usually I would paginate a table like this, hitting the api for particular pages. However, the design makes no note of pagination and this is supposed to be a simple app, so for now there is no pagination.

#### Using the API
This is where many of the assumptions occured, as I used the API documentation as a guide. Contact name, contact tags, and deal count were all pretty straightforward to display with sideloading/include. I also threw in row controls, the contact dropdown, for good measure. However, I made some assumptions on value and location.

- **Value**  
    From reading the docs, I assumed this is the total value of all deals associated with a contact. The issue here is that a single contact may have a deal in multiple currencies (Euros as well as US Dollars). Because of this, I created a quick conversion function to convert all values to USD. I also noticed that deals have a status (open/won/lost) tag which probably corresponds to the arrows on the style guide. However, there is some question over how this displays with multiple deals. All data I viewed had an "open" status. Hence, no arrow.

- **Location**  
    Looking at the docs, I noticed the Address resource contains city, state, and country info. However, hitting the endpoint, there is only one address resource, and the resource isn't tied to contacts. Digging a bit deeper, there is some sender info containing city, state, and country when sideloading `contactLists.list`, but this data was all blank and didn't necessarily seem relevant to the direct contact.

    Although I couldn't find relevant location data using the endpoint provided, I wrote a function to parse the data directly from the user should it exist. However, I realize the serializer likely would've included this tag even if the data was null.
