import * as express from "express"
const app = express()

app.get("/", (req, res) => {
  res.json({
    true: true
  })
})

app.listen(4000)