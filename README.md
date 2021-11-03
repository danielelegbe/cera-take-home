## Getting Started

First, fork this repo then install the needed dependencies:

```bash
npm install
# or
yarn
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```
### Framework/Library usage and why I used them

- Next.js - I love to use this framework on top of normal React. It gives a lot of added benefits (i.e server-side rendering, automatic page routing) that to be honest weren't really needed for this assignment, but I just prefer to use it in any personal project I make, whether it's small or large!

- Axios - There were multiple network requests that had to be made to a few RESTful endpoints. And although there is the built in fetch API, axios has a small bundle size and made fetching data a bit easier as there was less code to write.

- Tailwind CSS - One of my favourite CSS frameworks to use. It is a lot more lower-level than other frameworks (i.e bootstrap), which gives it a much more unique look and feel. 

- Date-fns - Only use was to add the current time onto the navbar. Dates are really hard to navigate in Javascript and this library made it a lot easier!

### Things to add/do differently

- I would have definitely added some unit tests for all of the components to improve overall reliability. (Jest, React testing library)
- I would definitely refactor the modal component into smaller components. For the sake of time it was done in one component.

### Suggestions

- When receiving the JSON data of all of the carers, I noticed there was no unique id for each carer, so when mapping over them I had to use the carer's name instead for the key. Luckily all of the names were unique but if there were some duplicate names there would be a problem. I also ran into the same issue with the time slots, but again all of the time slots were unique.
