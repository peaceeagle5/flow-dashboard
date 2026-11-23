# Coding Training for Flow-dashboard

## The Task
Write a function that loads the water level of a different station: Berlin-Mühlendamm, in the middle of the city. Here's its URL (you're allowed to copy this part):

    https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/09e15cf6-f155-4b76-b92f-6c260839121c/W/currentmeasurement.json

## Step 1: Words first (no code!)
Write in plain words what the function has to do, as 2–4 numbered steps. German or English, whichever you prefer.

        1. async name of function
        2. create a container(variable) to fetch the api data into, from Server
        3. create an output variable for the textformat.json file
        4. return data

## Step 2: Translate into code
Below each step, write the code line that does it. Call the function fetchMuehlendamm.

1. **async name of function**

        async function fetchMuehlendamm() {

2. **create a container(variable) to fetch the api data into, from Server.**

        const antwort = await fetch("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/09e15cf6-f155-4b76-b92f-6c260839121c/W/currentmeasurement.json");

3. **create an output variable for the textformat.json file**
    
        const pegelMuehle = await antwort.json();

4. **return the value of pegelMuehle**
    
        return pegelMuehle; }

## Remember
- `async` on the function, `await` on the line
- `fetch` = the browser's built-in tool; my own function gets my own name
- `fetch` gets the reply (envelope) → `antwort.json()` opens it (with `()`!)
- `console.log` in the console, commas only show the last result. Use console.log(a, b, c) instead.