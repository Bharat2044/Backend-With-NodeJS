const express = require("express");
const app = express();  // Create an Express application instance

console.log(typeof express);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
