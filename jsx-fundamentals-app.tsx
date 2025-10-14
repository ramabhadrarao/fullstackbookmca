import React from 'react';

// 1️⃣ SIMPLE FUNCTIONAL COMPONENT
function Header() {
  return <h1>🎓 JSX & Functional Components Demo</h1>;
}

// 2️⃣ COMPONENT WITH JAVASCRIPT EXPRESSIONS
function Greeting() {
  const name = "Student";
  const age = 20;
  const isLearning = true;
  
  return (
    <div style={{ backgroundColor: '#f0f8ff', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
      <p>Learning React: {isLearning ? "Yes! 🎉" : "Not yet"}</p>
      <p>Next year you'll be: {age + 1}</p>
    </div>
  );
}

// 3️⃣ COMPONENT WITH PROPS (Properties)
function UserCard(props) {
  return (
    <div style={{ 
      border: '2px solid #4CAF50', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#e8f5e9'
    }}>
      <h3>👤 {props.name}</h3>
      <p>📧 Email: {props.email}</p>
      <p>🎂 Age: {props.age}</p>
    </div>
  );
}

// 4️⃣ COMPONENT WITH DESTRUCTURED PROPS
function ProductCard({ title, price, inStock }) {
  return (
    <div style={{
      border: '2px solid #FF9800',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#fff3e0'
    }}>
      <h3>🛒 {title}</h3>
      <p>💰 Price: ${price}</p>
      <p>📦 Status: {inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
    </div>
  );
}

// 5️⃣ COMPONENT WITH ARRAY MAPPING
function CourseList() {
  const courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  
  return (
    <div style={{
      backgroundColor: '#f3e5f5',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h3>📚 My Courses:</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

// 6️⃣ COMPONENT WITH CONDITIONAL RENDERING
function StatusMessage({ isLoggedIn }) {
  return (
    <div style={{
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: isLoggedIn ? '#c8e6c9' : '#ffcdd2'
    }}>
      {isLoggedIn ? (
        <p>✅ Welcome back, User!</p>
      ) : (
        <p>❌ Please log in to continue</p>
      )}
    </div>
  );
}

// 7️⃣ COMPONENT WITH BUTTON & EVENT
function InteractiveButton() {
  const handleClick = () => {
    alert("Button clicked! 🎉");
  };
  
  return (
    <div style={{ margin: '10px' }}>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

// 8️⃣ MAIN APP COMPONENT (Combines Everything)
function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fafafa'
    }}>
      {/* Using the Header component */}
      <Header />
      
      <hr style={{ margin: '20px 0' }} />
      
      {/* Using Greeting component */}
      <Greeting />
      
      {/* Using UserCard with different props */}
      <h2>👥 User Cards (Props Demo)</h2>
      <UserCard name="John Doe" email="john@example.com" age={25} />
      <UserCard name="Jane Smith" email="jane@example.com" age={30} />
      
      {/* Using ProductCard */}
      <h2>🛍️ Products (Destructured Props)</h2>
      <ProductCard title="Laptop" price={999} inStock={true} />
      <ProductCard title="Phone" price={599} inStock={false} />
      
      {/* Using CourseList */}
      <CourseList />
      
      {/* Conditional Rendering */}
      <h2>🔐 Login Status</h2>
      <StatusMessage isLoggedIn={true} />
      <StatusMessage isLoggedIn={false} />
      
      {/* Interactive Button */}
      <h2>🎮 Interactive Component</h2>
      <InteractiveButton />
      
      <hr style={{ margin: '20px 0' }} />
      
      {/* JSX Comment Example */}
      {/* This is a comment in JSX - use {curly braces} */}
      
      <footer style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '8px'
      }}>
        <p>🎉 Congratulations! You understand JSX & Functional Components!</p>
      </footer>
    </div>
  );
}

export default App;