---
marp: true
---

# URL Parameters

---

How do you feel about this? Is this DRY\*?

```js
app.get("/question1", q1);
app.get("/question2", q2);
app.get("/question3", q3);
app.get("/question4", q4);
app.get("/question5", q5);
app.get("/question6", q6);
app.get("/question7", q7);
app.get("/question8", q8);
app.get("/question9", q9);
app.get("/question10", q10);
```

_\*What does DRY stand for?_

```js
// answer
```

---

## URL Params Example

```js
// The server is listening for any requests at "/user/<ANYTHING>"
app.get("/user/:id", (req, res) => {
    res.status(200).json({status: 200, message: `You sent a parameter!`})
});

// All of these requests to the server will receive an 'ok' response
// - `https://mysite.com/user/bacon`
// - `https://mysite.com/user/morty`
// - `https://mysite.com/user/123`
```

---

```js
// given this endpoint
app.get("/user/:id", (req, res) => {
    res.status(200).json({status: 200, message: `You sent a parameter!`})
});
```

- The `:id` creates a _variable_, or a dynamic value. Anything placed there in the url will become the value assigned to `id` for that call.
- The server can access this value in an object called `params` in the `req`uest.

```js
req: {
  //...
  params: {
    id: '<HERE>'
  },
  query: {},
  body: {}
  //...
}
```

---

```js
// given this endpoint
app.get("/user/:id", (req, res) => {
    res.status(200).json({status: 200, message: `You sent a parameter!`})
});
```

- What is the value of `id` in each case?

```js
"https://mysite.com/user/bacon"; //
"https://mysite.com/user/morty"; //
"https://mysite.com/user/123"; //

```

---

We can access that value with `req.params`

```js
// given this endpoint
app.get("/user/:id", (req, res) => {
    console.log("THE PARAMS ARE ", req.params);
    
    res.status(200).json({status: 200, message: `The ID sent was: ${req.params.id}`})
});
```

So this entering this url in the browser `http://localhost:8000/user/123456`

```bash
THE PARAMS ARE { id: 123456 }
```

---

An easier way to handle the `params` is with [destructuring](https://docs.google.com/document/d/1KURc9AZOmHga6UD4mCsNAW55r3x8es_x9L3kwdi0kQ0/edit#heading=h.62j1k1b9ohsd)!

```js
// given this endpoint
app.get("/user/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({status: 200, message: `The ID sent was: ${id}`})
});
```

---

```js
// NOT DRY :(
app.get("/question1", q1);
app.get("/question2", q2);
app.get("/question3", q3);
app.get("/question4", q4);
app.get("/question5", q5);
app.get("/question6", q6);
app.get("/question7", q7);
app.get("/question8", q8);
app.get("/question9", q9);
app.get("/question10", q10);

// DRY :)
```
