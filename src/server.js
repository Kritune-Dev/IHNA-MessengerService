const app = require('./app')
const port = 1905

app.listen(port, () => {
  console.log(`App listening in ${port}`)
})
