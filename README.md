# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.

## How to Use

npm run test starts NestJS server on localhost:3000

you need to add your `API_BASE_URL` and `API_KEY` to an `.env file`. I've used the nextAPI so the client do not see the key


```

## Run Jest Tests

```bash
npm test
```

## TODOS

- holdings data integration not completed due to time constraints
- API error handling not implemented due to time constraints
- I've used probably the simplest of charts out there, I would love to tinker more with visualisations but unfortunately I could not dedicate more time to it
- How to implement Favourites: Create a `<Favourites>` Component sitting on `<Sustainability>` Component that is passed the current payload and id for the current fund. If the user saves the current fund as favourite, it gets stored via useState inside `<Favourites>`, multiple saved are concatenated in data structure. When click on compare Favourites action inside `<Favourites>` Component, It would clear the current chart and render a combined chart for favourites. 
