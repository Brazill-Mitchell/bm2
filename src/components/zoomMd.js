const md = `## **node-zoom-jwt**

  
  

This package makes it simple to use **Zoom's JSON Web Token** functions with **Node JS**.

**Usage**

To use node-zoom-jwt you will need your [APIKey & APISecret](https://marketplace.zoom.us/docs/guides/build/jwt-app)

Start by installing the node-zoom-jwt package:

> npm i node-zoom-jwt

Add node-zoom-jwt to your file:

\`\`\`
const Zoom = require("node-zoom-jwt")
\`\`\`
Use your APIKey & APISecret to connect to your app:

\`\`\`
Zoom.connect(
APIKey,
APISecret,
new Date().getTime() + 5000
)
\`\`\`

Now you can access the functions provided by Zoom's API 
through the Zoom object:

\`\`\`
const meeting = await Zoom.meeting(meetingId)
\`\`\``

export default md