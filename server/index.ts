import * as express from "express";

const path = require("path");
const PORT = 3000;
const app = express();
const { SOURCE_DOMAIN } = process.env;

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

const getTemplateHtml = () => {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hello React!</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="${SOURCE_DOMAIN}/dist/server.bundle.js"></script>
        </body>
    </html>
    `;
};

app.get("*", (req, res) => {
  return res.sendFile(`${getTemplateHtml()}`);
});

app.listen(PORT, () => console.log("Servet start at port", PORT));
