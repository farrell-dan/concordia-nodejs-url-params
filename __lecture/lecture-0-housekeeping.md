---
marp: true
---

# Housekeeping

---

## How do we access the `queries`?

`https://mysite.com/contact-info?name=Fred&age=32`

```js
app.get('/contact-info', (req, res) => {

    res.status(200).json({ status: 200 });
})
```

---

## Code Cleanup

---

Yesterday we did this:

```js
.get('/cat-message', (req, res) => {
    const message = { author: 'cat', text: 'meow' };
    const randomTime = Math.floor(Math.random() * 3000);
    res.status(200).json({ status: 200, message });
})
```

- That is an anonymous callback function.
- If it were any longer, it would make our code harder to read.

Let's turn it into a named callback function!

---

```js
// declare the function above (near top of file)
const handleCatMessage = (req, res) => {
  const message = { author: "cat", text: "meow" };
  const randomTime = Math.floor(Math.random() * 3000);
  res.status(200).json({ status: 200, message });
};

// pass function to the endpoint
app.get("/cat-message", handleCatMessage);
```

---

This works and helps to keep our `server.js` file more legible.

But what happens if you have many many endpoints to manage? That would mean lots of functions in the same file.

There must be a better way!

---

At some point it will become necessary to move our callback functions to their _own_ file.

```js
// new file called handlers.js

const handleCatMessage = (req, res) => {
  const message = { author: "cat", text: "meow" };
  const randomTime = Math.floor(Math.random() * 3000);
  res.status(200).json({ status: 200, message });
};

// bottom of the file
module.exports = { handleCatMessage }; 
```

```js
// server.js file

// top of the file
const { handleCatMessage } = require("./handlers");

// rest of the server

app.get("/cat-message", handleCatMessage);
```

---

This is a pattern that will come up more and more as we transition to a more structured way of thinking about our code.
