const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>MCP Demo</title></head>
      <body>
        <h1>Hello from MCP demo</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
