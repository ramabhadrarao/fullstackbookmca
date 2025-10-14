# 👋 Hello React - Level 1 Beginner Project

A simple React project that displays "Hello" — perfect for beginners, students, and learning demos.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like **VS Code** (recommended)
- Basic understanding of HTML and JavaScript

## 🚀 Step-by-Step Setup

### 1. Create a React App

Open your terminal or VS Code terminal and run:

```bash
npx create-react-app hello-app
```

This will create a new folder named `hello-app` with all the setup done automatically.

### 2. Navigate to the Project

```bash
cd hello-app
```

### 3. Start the Development Server

```bash
npm start
```

Your default browser will open automatically at `http://localhost:3000`. You'll see the default React welcome screen.

### 4. Edit the App.js File

Open the file:

```
src/App.js
```

Replace all its content with this simple code:

```javascript
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React project.</p>
    </div>
  );
}

export default App;
```

### 5. Save and View

As soon as you save the file, the browser will auto-refresh and display:

```
Hello, React!
Welcome to your first React project.
```

🎉 **That's it — you just built your first React project!**

## 🧠 What You Learned

- ✅ How to create a React app (`npx create-react-app`)
- ✅ Where to write your code (`App.js`)
- ✅ How JSX works (`<h1>...</h1>` inside `return`)
- ✅ How hot reload automatically updates the page on save

## 📁 Project Structure

```
hello-app/
├── node_modules/
├── public/
├── src/
│   ├── App.js          ← Your main component (edited)
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🎯 Next Steps

Now that you've completed Level 1, try these challenges:

1. **Add styling** - Change colors and fonts using CSS
2. **Add more text** - Create multiple paragraphs or headings
3. **Add an image** - Display an image in your component
4. **Create a button** - Add a button that shows an alert when clicked

## 🆘 Troubleshooting

**Port 3000 already in use?**
- Close other React apps or use: `PORT=3001 npm start` (Mac/Linux) or `set PORT=3001 && npm start` (Windows)

**npm command not found?**
- Make sure Node.js is installed: `node --version`

## 📚 Resources

- [React Official Documentation](https://react.dev/)
- [Create React App Docs](https://create-react-app.dev/)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📝 License

This project is open source and available for educational purposes.

---

**Happy Coding! 🚀**

If you found this helpful, give it a ⭐️ on GitHub!