# 📝 JSX Fundamentals - Complete Notes

## 📌 Table of Contents
1. What is JSX?
2. JSX Syntax Rules
3. JavaScript Expressions in JSX
4. JSX Attributes
5. Conditional Rendering
6. Lists and Keys
7. Fragments
8. Comments in JSX
9. Common Mistakes & Solutions

---

## 1️⃣ What is JSX?

**JSX = JavaScript XML**

- A syntax extension for JavaScript
- Allows you to write HTML-like code in JavaScript
- Makes React code more readable and expressive
- Gets compiled to regular JavaScript by Babel

### JSX vs JavaScript

```javascript
// JSX (What you write)
const element = <h1>Hello, World!</h1>;

// JavaScript (What it compiles to)
const element = React.createElement('h1', null, 'Hello, World!');
```

### Why Use JSX?

✅ More readable than `React.createElement()`  
✅ Looks like HTML (familiar to web developers)  
✅ Catches errors at compile time  
✅ Shows better error messages  

---

## 2️⃣ JSX Syntax Rules

### Rule 1: Return Single Parent Element

❌ **WRONG:**
```javascript
function App() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}
```

✅ **CORRECT:**
```javascript
function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

### Rule 2: Close All Tags

❌ **WRONG:**
```javascript
<img src="photo.jpg">
<input type="text">
<br>
```

✅ **CORRECT:**
```javascript
<img src="photo.jpg" />
<input type="text" />
<br />
```

### Rule 3: Use `className` Instead of `class`

❌ **WRONG:**
```javascript
<div class="container">Content</div>
```

✅ **CORRECT:**
```javascript
<div className="container">Content</div>
```

**Why?** `class` is a reserved keyword in JavaScript.

### Rule 4: Use `htmlFor` Instead of `for`

❌ **WRONG:**
```javascript
<label for="username">Username</label>
```

✅ **CORRECT:**
```javascript
<label htmlFor="username">Username</label>
```

### Rule 5: camelCase for Attributes

```javascript
// HTML           →    JSX
onclick         →    onClick
onchange        →    onChange
tabindex        →    tabIndex
maxlength       →    maxLength
readonly        →    readOnly
```

---

## 3️⃣ JavaScript Expressions in JSX

Use **curly braces `{}`** to embed JavaScript inside JSX.

### Variables

```javascript
const name = "John";
const age = 25;

return <h1>Hello, {name}! You are {age} years old.</h1>;
// Output: Hello, John! You are 25 years old.
```

### Math Operations

```javascript
const x = 10;
const y = 20;

return <p>Sum: {x + y}</p>;
// Output: Sum: 30
```

### Function Calls

```javascript
function getGreeting(name) {
  return `Welcome, ${name}!`;
}

return <h1>{getGreeting("Alice")}</h1>;
// Output: Welcome, Alice!
```

### Ternary Operators

```javascript
const isLoggedIn = true;

return <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>;
// Output: Welcome back!
```

### String Concatenation

```javascript
const firstName = "John";
const lastName = "Doe";

return <h1>{firstName + " " + lastName}</h1>;
// OR
return <h1>{`${firstName} ${lastName}`}</h1>;
```

### What CAN'T Go Inside `{}`?

❌ **if-else statements** (use ternary instead)
```javascript
// WRONG
return <p>{if (isLoggedIn) { "Welcome" }}</p>;

// CORRECT
return <p>{isLoggedIn ? "Welcome" : "Login"}</p>;
```

❌ **for loops** (use `.map()` instead)
```javascript
// WRONG
return <div>{for (let i = 0; i < 5; i++) { <p>Item</p> }}</div>;

// CORRECT
return <div>{[0,1,2,3,4].map(i => <p key={i}>Item</p>)}</div>;
```

❌ **objects directly**
```javascript
// WRONG
const user = { name: "John", age: 25 };
return <p>{user}</p>; // Error: Objects are not valid as a React child

// CORRECT
return <p>{user.name}</p>; // Access properties
```

---

## 4️⃣ JSX Attributes

### String Attributes

```javascript
<img src="photo.jpg" alt="My Photo" />
<a href="https://google.com">Google</a>
```

### Dynamic Attributes

```javascript
const imageUrl = "photo.jpg";
const linkUrl = "https://google.com";

<img src={imageUrl} alt="Photo" />
<a href={linkUrl}>Link</a>
```

### Style Attribute (Object)

```javascript
// Inline styles are objects with camelCase properties
<div style={{
  backgroundColor: 'blue',    // camelCase!
  fontSize: '20px',           // string values
  padding: 10,                // number = pixels
  margin: '10px 20px'
}}>
  Styled content
</div>
```

**Note:** Double curly braces `{{ }}`:
- Outer `{}` = JavaScript expression
- Inner `{}` = JavaScript object

### Boolean Attributes

```javascript
<input type="text" disabled={true} />
<input type="text" disabled />        // Same as above
<button disabled={false}>Click</button> // Not disabled
```

---

## 5️⃣ Conditional Rendering

### Method 1: Ternary Operator `? :`

```javascript
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please sign in</h1>
    )}
  </div>
);
```

### Method 2: Logical AND `&&`

```javascript
const hasMessages = true;
const messageCount = 5;

return (
  <div>
    {hasMessages && <p>You have {messageCount} messages</p>}
  </div>
);
// Shows paragraph only if hasMessages is true
```

### Method 3: Variable Assignment

```javascript
let message;

if (isLoggedIn) {
  message = <h1>Welcome!</h1>;
} else {
  message = <h1>Please log in</h1>;
}

return <div>{message}</div>;
```

### Method 4: Function

```javascript
function getStatusMessage(status) {
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error occurred</p>;
  if (status === 'success') return <p>Success!</p>;
  return <p>Unknown status</p>;
}

return <div>{getStatusMessage('loading')}</div>;
```

---

## 6️⃣ Lists and Keys

### Rendering Lists with `.map()`

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

### With Objects

```javascript
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 }
];

return (
  <div>
    {users.map(user => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
      </div>
    ))}
  </div>
);
```

### Why Keys?

✅ Helps React identify which items changed  
✅ Improves performance  
✅ Prevents rendering bugs  

**Best Practice:**
- ✅ Use unique IDs: `key={item.id}`
- ⚠️ Avoid using index: `key={index}` (only if no other option)

---

## 7️⃣ Fragments

**Problem:** JSX requires a single parent element.

❌ **Without Fragment:**
```javascript
return (
  <div>  {/* Unnecessary wrapper div */}
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
```

✅ **With Fragment (Long Syntax):**
```javascript
import React from 'react';

return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Content</p>
  </React.Fragment>
);
```

✅ **With Fragment (Short Syntax):**
```javascript
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);
```

**When to use?**
- When you don't want extra DOM elements
- When extra divs break CSS layout
- Cleaner HTML output

---

## 8️⃣ Comments in JSX

### Single-line Comment

```javascript
return (
  <div>
    {/* This is a comment */}
    <h1>Title</h1>
  </div>
);
```

### Multi-line Comment

```javascript
return (
  <div>
    {/* 
      This is a
      multi-line
      comment
    */}
    <h1>Title</h1>
  </div>
);
```

❌ **WRONG:**
```javascript
return (
  <div>
    // This won't work
    <!-- This won't work either -->
    <h1>Title</h1>
  </div>
);
```

---

## 9️⃣ Common Mistakes & Solutions

### Mistake 1: Forgetting to Wrap in `{}`

❌ **WRONG:**
```javascript
const name = "John";
return <h1>Hello, name</h1>;
// Output: Hello, name (literal text)
```

✅ **CORRECT:**
```javascript
return <h1>Hello, {name}</h1>;
// Output: Hello, John
```

---

### Mistake 2: Using `class` Instead of `className`

❌ **WRONG:**
```javascript
<div class="container">Content</div>
```

✅ **CORRECT:**
```javascript
<div className="container">Content</div>
```

---

### Mistake 3: Not Closing Self-Closing Tags

❌ **WRONG:**
```javascript
<img src="photo.jpg">
<input type="text">
```

✅ **CORRECT:**
```javascript
<img src="photo.jpg" />
<input type="text" />
```

---

### Mistake 4: Multiple Root Elements

❌ **WRONG:**
```javascript
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);
```

✅ **CORRECT:**
```javascript
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

---

### Mistake 5: Forgetting `key` in Lists

❌ **WRONG:**
```javascript
{items.map(item => <li>{item}</li>)}
// Warning: Each child should have a unique "key" prop
```

✅ **CORRECT:**
```javascript
{items.map((item, index) => <li key={index}>{item}</li>)}
```

---

### Mistake 6: Using Quotes Around Dynamic Values

❌ **WRONG:**
```javascript
const url = "photo.jpg";
<img src="{url}" />  // This is a string "{url}", not the variable
```

✅ **CORRECT:**
```javascript
<img src={url} />  // No quotes when using {}
```

---

## 🎯 Quick Reference Cheat Sheet

| Feature | Syntax | Example |
|---------|--------|---------|
| Variable | `{variable}` | `<p>{name}</p>` |
| Expression | `{expression}` | `<p>{5 + 5}</p>` |
| Ternary | `{condition ? true : false}` | `{age > 18 ? 'Adult' : 'Minor'}` |
| Function | `{functionCall()}` | `{getName()}` |
| Class | `className=""` | `<div className="box">` |
| Style | `style={{}}` | `style={{color: 'red'}}` |
| Comment | `{/* comment */}` | `{/* Hello */}` |
| Fragment | `<></>` | `<><h1/><p/></>` |
| List | `.map()` | `{items.map(i => <li key={i}/>)}` |

---

## 🔥 Key Takeaways

1. **JSX looks like HTML** but is actually JavaScript
2. **Use `{}` for JavaScript** expressions
3. **camelCase** for attributes (`onClick`, `className`)
4. **Close all tags** (self-closing with `/`)
5. **Single parent** element required (use Fragments `<>`)
6. **Keys required** for lists
7. **Comments** use `{/* */}` syntax

---

## 📚 Practice Exercise

Try creating a component with:
- A greeting with your name
- A list of 3 hobbies
- Conditional message based on age
- A styled div with custom colors
- A button that shows your favorite color

---

**Happy Learning! 🚀**