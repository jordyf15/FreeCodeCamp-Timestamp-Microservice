# Timestamp Microservice
For the first project of FreeCodeCamp API and Microservice curriculum, we have to make a Timestamp Microservice by using basic Node and basic Express.

## Live Demo on Repl
https://freecodecamp-project-timestamp.jordyf15.repl.co/

## Test/User Stories
1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
5. If the date string is invalid the api returns a JSON having the structure
{"error" : "Invalid Date" }. 

## Example Usage
1. [project url]/api/timestamp/2015-12-25
2. [project url]/api/timestamp/1451001600000

## Example Output
{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

## Technology Used
1. HTML
2. CSS
3. Javascript
4. Node.js version 12.16.3
5. Express version 4.17.1

## Note
The source code here have a slight different with the one from the repl in the port listening part. Since the one on repl are hosted on repl server while this one is on localhost. Other than that everything else is the same. There are also comments in the source code to explain each part of the code's function.