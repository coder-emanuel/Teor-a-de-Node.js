
//La principal diferencia entre ambas es que require es síncrono y import es asíncrono. Además, import es una característica de ECMAScript, mientras que require es una característica de Node.js.

// const fs = require("fs");
import fs from 'fs';

fs.readFile("require-example.mjs", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});