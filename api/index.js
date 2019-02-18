const express = require('express')
const jsonGraphqlExpress = require('json-graphql-server').default
const genes = require('./genes')
const app = express();

app.set('port', 3000)
app.use('/', jsonGraphqlExpress({genes}, { readonly: true }));

app.listen(app.get("port"), () => {
  console.info(` - http://localhost:${app.get("port")}`)
})
