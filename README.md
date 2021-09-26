# Disc Golf Champion
This website is used to track the current disc golf champion of the Ballista Pro Fan Club (BPFC). Only members of BPFC are allowed to use the application. Each member has their own QR code on their BPFC disc. When a player wins a game, he or she scans their respective QR code with their phones, and the website is automatically updated to the person who scanned their phone.

Rules:
- Only scan the QR code when you win a game where all of the members of the club are present
- Do not scan the QR code elsewise, as this will cause fake results
- Be a proud member of BPFC


## Tech Stack
This web app is built with React (TypeScript), NextJS, Amazon Web Services (DynamoDB) and hosted on Vercel. NextJS with SSR is preffered to get the optimal SEO, as many people are probably going to search for this app.

DynamoDB is used directly from the client, as time-to-market has been a priority to deliver this web application to Kasper's birthday. In the future, this should be changed to the following solution to get a more secure, and scalable application:


![Desired architecture in the future](https://miro.medium.com/max/1390/1*9h2Xu-KQFa3E7rcuaT2UQA.png)

A serverless backend solution is preferable for minimum setup, and avoid making updates to the database directly from the client. Amazon API Gateway can be used to setup the API endpoint which is deployed in an AWS lambda function. CRUD operations can then be implemented in the endpoint.

## Code conventions
The following code conventions is desired, but not necessarily followed in this app:
- No inline styling (use components such as _Container_ to get consistent styling)
- Keep functions small and reusable
- Keep API calls in seperate folders and make it as reusable as possible
- Use arrow functions when possible
- Create models for data structures
