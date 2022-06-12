## Programming Exercise: Address Book

## Setup Server

1. Install NodeJS
2. Install Dependencies

```bash
npm install
```

## Run Server

```bash
node server.js
```

## Setup Client

1. Navigate to client folder

```bash
cd client
```

2. Install Dependencies

```bash
npm install
```

## Start Client

```bash
npm start
```

- To run tests on client, run `npm test a`

## URL Endpoints

**Client**
http://localhost:3000

**Mockup:**
http://localhost:8080/mockup/

**People Data:**
http://localhost:8080/api/people

## Instructions

- Create a simple address book web application and use the given static
  HTML mockup (`mockup/index.html`) as a starting point or as inspiration.
- Your web application should fetch people data from http://localhost:8080/api/people
- Render the names of all people from the people data in the left panel
  in alphabetical order.
- When a person's name is clicked in the left panel, render the full profile in the right panel.
- Use the framework of your choice to complete the project. Good options include Vue.js, React, Angular, or Ember, but any framework or library can be used.
- Update the `README.md` with any instructions for running the web application.
- Publish your solution to your Github or Bitbucket account or send us a zip file with your solution
  (you can use `zip.sh` to create an archive of this project).

### Bonus Points

- Add image URLs to the people data and render these photos in the profile
- Make it possible to change sort order of people shown in directory panel
- Allow searching for people by name

### Additional Notes

- Feel free to use any available libraries or frameworks as needed.
- Feel free to modify `data/people.json` with any changes that you see fit.
- Feel free to add additional routes to the express app by modifying `server.js`
- Your address book does not need to use the exact same CSS or HTML as provided
  by the mockup.
