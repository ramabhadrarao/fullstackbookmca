# ⚛️ React Components: Class vs Function (Using in Another File)

This guide explains **how to create, export, and import** both **Class Components** and **Function Components** in React.  
It includes folder structure, examples, and clear notes for beginners and developers maintaining React apps.

---

## 📂 Folder Structure

```
src/
 ├── App.js
 ├── WelcomeClass.js
 └── WelcomeFunction.js
```

---

## 🧱 1. Class Component Example (in Another File)

### 📄 File: `WelcomeClass.js`

```jsx
import React, { Component } from "react";

// ✅ Class Component Example
class WelcomeClass extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name} 👋</h2>
        <p>This is rendered from a Class Component.</p>
      </div>
    );
  }
}

// Export default so it can be imported anywhere
export default WelcomeClass;
```

---

### 📄 File: `App.js`

```jsx
import React from "react";
import WelcomeClass from "./WelcomeClass"; // 👈 Importing Class Component

function App() {
  return (
    <div>
      <h1>React App Example</h1>
      <WelcomeClass name="Rama" />
      <WelcomeClass name="Vasavi" />
    </div>
  );
}

export default App;
```

---

### ✅ Output

```
React App Example
Hello, Rama 👋
This is rendered from a Class Component.

Hello, Vasavi 👋
This is rendered from a Class Component.
```

---

## ⚙️ 2. Function Component Example (in Another File)

### 📄 File: `WelcomeFunction.js`

```jsx
import React from "react";

// ✅ Function Component Example
function WelcomeFunction({ name }) {
  return (
    <div>
      <h2>Hello, {name} 👋</h2>
      <p>This is rendered from a Function Component.</p>
    </div>
  );
}

// Export default so it can be imported anywhere
export default WelcomeFunction;
```

---

### 📄 File: `App.js`

```jsx
import React from "react";
import WelcomeFunction from "./WelcomeFunction"; // 👈 Importing Function Component

function App() {
  return (
    <div>
      <h1>React App Example</h1>
      <WelcomeFunction name="Rama" />
      <WelcomeFunction name="Vasavi" />
    </div>
  );
}

export default App;
```

---

### ✅ Output

```
React App Example
Hello, Rama 👋
This is rendered from a Function Component.

Hello, Vasavi 👋
This is rendered from a Function Component.
```

---

## 🧩 Notes & Best Practices

| Feature | Class Component | Function Component |
|----------|------------------|--------------------|
| Syntax | Uses `class` and `extends React.Component` | Simple JavaScript function |
| Props | Access via `this.props` | Access directly via function argument or destructuring `{ name }` |
| State | Uses `this.state` and `this.setState()` | Uses `useState()` Hook |
| Lifecycle | `componentDidMount`, `componentDidUpdate`, etc. | `useEffect()` Hook |
| `this` Keyword | Required | Not needed |
| Export | `export default WelcomeClass;` | `export default WelcomeFunction;` |
| Import | `import WelcomeClass from "./WelcomeClass";` | `import WelcomeFunction from "./WelcomeFunction";` |

---

## 💡 Export & Import Types

### Default Export (Recommended)
```jsx
export default Welcome;
import Welcome from "./Welcome";
```

### Named Export (If multiple components in one file)
```jsx
// In file
export const Header = () => <h1>Header</h1>;
export const Footer = () => <h1>Footer</h1>;

// In another file
import { Header, Footer } from "./Layout";
```

---

## 🧠 Combined Example (Both Class & Function Components Together)

```jsx
import React from "react";
import WelcomeClass from "./WelcomeClass";
import WelcomeFunction from "./WelcomeFunction";

function App() {
  return (
    <div>
      <h1>React Components Example</h1>

      {/* Class Component */}
      <WelcomeClass name="Rama" />

      {/* Function Component */}
      <WelcomeFunction name="Vasavi" />
    </div>
  );
}

export default App;
```

### ✅ Output
```
React Components Example
Hello, Rama 👋
This is rendered from a Class Component.

Hello, Vasavi 👋
This is rendered from a Function Component.
```

---

## 🏁 Summary

| Use Case | Recommended |
|-----------|--------------|
| New React Projects | ✅ Function Component (Hooks) |
| Legacy Codebases | 🧱 Class Component |
| Easy to Read / Maintain | ✅ Function Component |
| Lifecycle / State Control | Both supported (Hooks vs Lifecycle) |

---

### 📘 Conclusion

You can use `<ComponentName />` for **both** class and function components.  
React doesn’t care if it’s a function or class — it just needs to **return JSX**.

However, modern React (v16.8+) **prefers Function Components with Hooks** for better readability, reusability, and performance.

---

🖊️ **Author:** Rama Bhadra Rao  
📅 **Created for React Beginners & Learners**  
💻 **Purpose:** Demonstrate component import/export and usage patterns in React.
