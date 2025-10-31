# ⚛️ React Hooks & Props — Complete Notes

This document explains three essential React concepts:

1. [`useState`](#-usestate)
2. [`useEffect`](#-useeffect)
3. [`props`](#-props)

Each section includes simple definitions, examples, and real-world use cases.

---

## 🧩 useState

### 🔹 What is `useState`?

`useState` is a **React Hook** that lets you manage **state** (data that can change over time) inside functional components.

It allows your component to "remember" values between renders.

### 🔹 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- **`state`** → current value
- **`setState`** → function to update the value
- **`initialValue`** → starting value for the state

### ✅ Example: Simple Counter

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial count = 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default Counter;
```

**Explanation:**
- Each click updates `count` using `setCount(count + 1)`.
- The component re-renders automatically with the new value.

### ⚡ Key Points

| Concept | Description |
|---------|-------------|
| React re-renders when state changes | The UI updates automatically |
| You can have multiple states | `useState` can be called several times |
| State updates are asynchronous | React batches updates for performance |

---

## ⏱ useEffect

### 🔹 What is `useEffect`?

`useEffect` lets you run **side effects** in your component — code that affects something outside React, like:

- Fetching data from an API
- Setting up timers
- Adding/removing event listeners

### 🔹 Syntax

```jsx
useEffect(() => {
  // code to run
  return () => {
    // optional cleanup code
  };
}, [dependencies]);
```

| Dependency Array | Behavior |
|------------------|----------|
| `[]` | Runs once (on mount) |
| `[value]` | Runs when `value` changes |
| (none) | Runs after every render |

### ✅ Example 1: Run Once (on Mount)

```jsx
import React, { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Component Mounted!");
    return () => console.log("Component Unmounted!");
  }, []);

  return <h2>Welcome to React!</h2>;
}
```

### ✅ Example 2: Fetching Data

```jsx
import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // runs only once

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### ✅ Example 3: Run When State Changes

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // runs whenever count changes

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### ⚡ Key Points

| Concept | Description |
|---------|-------------|
| Runs after render | Effects happen after React updates the DOM |
| Dependency array controls timing | Add dependencies to control when it re-runs |
| Cleanup is optional | Useful for timers, subscriptions, etc. |

---

## 🎁 Props

### 🔹 What are Props?

**Props** (properties) are used to pass data from a **parent component** to a **child component**.

They make components reusable and dynamic.

### ✅ Example: Passing Props

```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </>
  );
}
```

**🟢 Output:**
```
Hello, Alice!
Hello, Bob!
```

### ✅ Example: Props with Multiple Values

```jsx
function Profile({ name, age, city }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

function App() {
  return (
    <Profile name="Sarah" age={25} city="New York" />
  );
}
```

### ✅ Example: Passing Components as Props (`children`)

```jsx
function Card({ children, style }) {
  const defaultStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "6px",
    background: "#fff"
  };

  return (
    <div style={{ ...defaultStyle, ...style }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card style={{ background: "lightyellow" }}>
      <h3>Note</h3>
      <p>This content is passed as children!</p>
    </Card>
  );
}
```

**🧠 Here:**
- `children` is the content between `<Card> ... </Card>`
- `style` is a prop that overrides default CSS

### ⚡ Key Points

| Concept | Description |
|---------|-------------|
| Props are read-only | Child cannot modify props |
| Props make components reusable | Pass different values for different uses |
| `children` prop | Represents inner content of a component |

---

## 🧾 Summary

| Concept | Description | Example |
|---------|-------------|---------|
| `useState` | Store and update component data | Counter, form inputs |
| `useEffect` | Handle side effects | API calls, timers |
| `props` | Pass data to child components | `<Card title="Hello" />` |

---

## 🧠 Pro Tip

**Combine all three for dynamic, interactive apps:**

```jsx
import React, { useState, useEffect } from "react";

function Weather({ city }) {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/weather?city=${city}`)
      .then(res => res.json())
      .then(data => setTemp(data.temperature));
  }, [city]);

  return (
    <div>
      <h2>Weather in {city}</h2>
      {temp ? <p>{temp}°C</p> : <p>Loading...</p>}
    </div>
  );
}

export default Weather;
```

---

## 📚 Additional Resources

- [React Official Documentation](https://react.dev)
- [useState Hook](https://react.dev/reference/react/useState)
- [useEffect Hook](https://react.dev/reference/react/useEffect)
- [Components and Props](https://react.dev/learn/passing-props-to-a-component)

---

**Made with ⚛️ React**