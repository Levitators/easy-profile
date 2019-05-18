import app from "./app";

const port = app.get("port");
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
