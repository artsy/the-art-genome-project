## Genes API

This is a small API which uses [Orta's fork](https://github.com/orta/json-graphql-server/releases/tag/orta_rel) of
 [json-graphql-server](https://github.com/marmelab/json-graphql-server). 

It's hosted on [now](https://now.sh), which is free for OSS and good. If you ship a new release, just change the URL 
in the README and that's the new source of truth.

 ### Data Transformation

Any changes to the genes.csv would need to be reflected inside genes.json, however you will need to change the name
of the keys to match these:

 ```json
 {
    "id": string,
    "slug": string,
    "name": string,
    "family": string,
    "description": string,
    "automated": boolean
 }
 ```

This ensures no queries break with updates.

I generated the JSON by using this [CSV to JSON website](https://csvjson.com/csv2json), then using find & replace to
rename the fields. Nothing fancy.
