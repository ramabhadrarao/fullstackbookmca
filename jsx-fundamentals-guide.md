# 🎓 JSX Fundamentals - Learning Guide

## 🚀 How to Use This Project

1. Create a new React app:
```bash
npx create-react-app jsx-fundamentals
cd jsx-fundamentals
```

2. Replace the entire content of `src/App.js` with the code from the artifact

3. Start the app:
```bash
npm start
```

---

## 📚 What You'll Learn

### 1️⃣ **Simple Functional Component**

```javascript
function Header() {
  return <h1>🎓 JSX & Functional Components Demo</h1>;
}
```

**Key Points:**
- A component is just a JavaScript function
- Function name must start with a capital letter
- Returns JSX (HTML-like syntax)
- Can be reused anywhere: `<Header />`

---

### 2️⃣ **JavaScript Expressions in JSX**

```javascript
const name = "Student";
return <p>Hello, {name}!</p>;
```

**Key Points:**
- Use `{curly braces}` to embed JavaScript
- Can use variables, math, functions, etc.
- `{age + 1}` → calculates inside JSX
- `{isLearning ? "Yes" : "No"}` → ternary operator

---

### 3️⃣ **Props (Properties)**

```javascript
function UserCard(props) {
  return <h3>{props.name}</h3>;
}

// Usage:
<UserCard name="John" email="john@example.com" />
```

**Key Points:**
- Props are like function parameters
- Pass data from parent to child
- Access via `props.propertyName`
- Makes components reusable with different data

---

### 4️⃣ **Destructured Props** (Cleaner Syntax)

```javascript
// Instead of props.title, props.price
function ProductCard({ title, price, inStock }) {
  return <h3>{title}</h3>;  // Direct access!
}
```

**Key Points:**
- Cleaner than `props.title` everywhere
- Same functionality, better readability
- Common pattern in modern React

---

### 5️⃣ **Array Mapping (Lists)**

```javascript
const courses = ["HTML", "CSS", "JavaScript"];

return (
  <ul>
    {courses.map((course, index) => (
      <li key={index}>{course}</li>
    ))}
  </ul>
);
```

**Key Points:**
- Use `.map()` to render lists
- Each item needs a unique `key` prop
- Key helps React track changes efficiently

---

### 6️⃣ **Conditional Rendering**

```javascript
{isLoggedIn ? (
  <p>Welcome back!</p>
) : (
  <p>Please log in</p>
)}
```

**Key Points:**
- Use ternary operator: `condition ? true : false`
- Can also use `&&` for single conditions
- Show/hide elements based on state

---

### 7️⃣ **Event Handling**

```javascript
const handleClick = () => {
  alert("Clicked!");
};

return <button onClick={handleClick}>Click Me</button>;
```

**Key Points:**
- Use `onClick`, `onChange`, etc. (camelCase!)
- Pass function reference (no parentheses)
- Can define inline: `onClick={() => alert("Hi")}`

---

### 8️⃣ **Inline Styling in JSX**

```javascript
<div style={{
  backgroundColor: '#f0f8ff',  // camelCase property names
  padding: '20px',              // string values
  margin: 10                    // or numbers (means 10px)
}}>
```

**Key Points:**
- Style is an object: `style={{...}}`
- CSS properties use camelCase
- Values are strings or numbers
- Double curly braces: outer for JSX, inner for object

---

## 🎯 JSX Rules Recap

✅ **Must return single parent element**
```javascript
// ❌ Wrong
return (
  <h1>Title</h1>
  <p>Text</p>
);

// ✅ Correct
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);
```

✅ **Use `className` instead of `class`**
```javascript
<div className="container">  {/* NOT class="" */}
```

✅ **Self-closing tags need `/`**
```javascript
<img src="photo.jpg" />  {/* Must close */}
<br />
<input type="text" />
```

✅ **Comments in JSX**
```javascript
{/* This is a comment */}
{/* 
  Multi-line
  comment
*/}
```

---

## 🧪 Practice Challenges

Try these modifications:

1. **Add your own component** - Create a `Footer` component
2. **Add more props** - Add a `country` prop to UserCard
3. **Create a list** - Make a list of your favorite movies
4. **Conditional styling** - Change button color based on a variable
5. **Multiple buttons** - Create 3 buttons with different click messages

---

## 🔥 Key Takeaways

- **Functional Components** = JavaScript functions that return JSX
- **JSX** = HTML-like syntax in JavaScript
- **Props** = Pass data between components
- **`{}`** = Embed JavaScript in JSX
- **Components are reusable** = Write once, use many times!

---

## 📖 Next Steps

After mastering this, learn:
1. **React Hooks** (`useState`, `useEffect`)
2. **Component State**
3. **Form Handling**
4. **API Fetching**

---

**Happy Coding! 🚀**