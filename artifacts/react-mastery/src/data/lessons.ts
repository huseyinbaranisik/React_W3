import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: "l1",
    category: "Fundamentals",
    title: "React Introduction",
    slug: "react-introduction",
    description: "What React is, virtual DOM, why use it.",
    content: [
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
      "One of the key concepts in React is the Virtual DOM. Instead of manipulating the browser's DOM directly, which can be slow, React creates a lightweight copy in memory.",
      "When the state of an object changes, React updates the Virtual DOM, compares it with the previous version (a process called 'diffing'), and calculates the most efficient way to apply these changes to the real DOM."
    ],
    codeExample: `import React from 'react';

export default function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React Mastery.</p>
    </div>
  );
}`,
    quiz: {
      question: "What does React use to efficiently update the UI?",
      options: ["Real DOM", "Virtual DOM", "Shadow DOM", "String DOM"],
      correctAnswer: 1
    }
  },
  {
    id: "l2",
    category: "Fundamentals",
    title: "JSX & TSX",
    slug: "jsx-and-tsx",
    description: "JSX syntax, expressions in curly braces, className, TypeScript benefits.",
    content: [
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. TSX is just JSX used within TypeScript files.",
      "JSX allows you to write HTML elements in JavaScript and place them in the DOM without any createElement() or appendChild() methods.",
      "You can embed any JavaScript expression in JSX by wrapping it in curly braces {}. To use CSS classes, you must use 'className' instead of 'class' because 'class' is a reserved word in JavaScript."
    ],
    codeExample: `interface UserProps {
  name: string;
  age: number;
}

export default function UserProfile({ name, age }: UserProps) {
  // Using JSX and embedding expressions
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {/* This is a JSX comment */}
    </div>
  );
}`,
    quiz: {
      question: "How do you write comments in JSX?",
      options: ["// comment", "<!-- comment -->", "{/* comment */}", "/* comment */"],
      correctAnswer: 2
    }
  },
  {
    id: "l3",
    category: "Fundamentals",
    title: "Components",
    slug: "components",
    description: "Functional components, composing components, returning JSX.",
    content: [
      "Components are the building blocks of any React application. A component is essentially a JavaScript function that returns JSX.",
      "You can compose components to build complex UIs. For example, an App component can render a Navbar, Sidebar, and MainContent component.",
      "Every React component must return a single top-level element, an array of elements, a fragment, or null."
    ],
    codeExample: `function Avatar() {
  return <img className="avatar" src="profile.jpg" alt="User Avatar" />;
}

function UserInfo() {
  return (
    <div className="info">
      <h3>Alex Dev</h3>
      <p>Software Engineer</p>
    </div>
  );
}

export default function UserCard() {
  return (
    <div className="card">
      <Avatar />
      <UserInfo />
    </div>
  );
}`,
    quiz: {
      question: "What must every React component return?",
      options: ["A string", "An object", "JSX or null", "A number"],
      correctAnswer: 2
    }
  },
  {
    id: "l4",
    category: "Fundamentals",
    title: "Props & Interfaces",
    slug: "props-interfaces",
    description: "Defining prop interfaces, passing/receiving props, default props.",
    content: [
      "Props (short for properties) are how React components communicate with each other. They flow downwards from the parent component to the child.",
      "Props are read-only. A component must never modify its own props.",
      "In TypeScript, you define the shape of your props using interfaces or type aliases. This provides excellent autocomplete and type safety."
    ],
    codeExample: `interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Optional prop
}

// Destructuring props and setting a default value
export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
}`,
    quiz: {
      question: "How do you type component props in TypeScript?",
      options: ["Using prop-types library", "Define an interface or type", "Using the @type decorator", "You don't need to type them"],
      correctAnswer: 1
    }
  },
  {
    id: "l5",
    category: "Hooks",
    title: "useState Hook",
    slug: "use-state-hook",
    description: "State declaration, setter function, re-renders.",
    content: [
      "The useState hook allows functional components to manage local state. State is data that can change over time and affect what the user sees.",
      "useState returns an array with exactly two items: the current state value, and a function to update it.",
      "When you call the setter function, React re-renders the component with the new state value."
    ],
    codeExample: `import { useState } from 'react';

export default function Counter() {
  // Declare state with a generic type parameter
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    quiz: {
      question: "What does useState return?",
      options: ["A state object", "An array with [state, setState]", "A string", "A promise"],
      correctAnswer: 1
    }
  },
  {
    id: "l6",
    category: "Hooks",
    title: "useEffect Hook",
    slug: "use-effect-hook",
    description: "Side effects, dependency array, cleanup.",
    content: [
      "The useEffect hook lets you perform side effects in functional components. Side effects include data fetching, setting up subscriptions, and manually changing the DOM.",
      "useEffect takes two arguments: a function containing the side effect, and an optional dependency array.",
      "If the dependency array is empty [], the effect runs only once after the initial render. If dependencies are provided, it runs whenever those dependencies change."
    ],
    codeExample: `import { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // This runs once on mount
    fetch('/api/data')
      .then(res => res.json())
      .then(result => setData(result.message));

    // Optional cleanup function
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty array = mount only

  return <div>{data ? data : 'Loading...'}</div>;
}`,
    quiz: {
      question: "What does an empty dependency array [] in useEffect mean?",
      options: ["Run on every render", "Run once on mount", "Never run", "Run only on unmount"],
      correctAnswer: 1
    }
  },
  {
    id: "l7",
    category: "Hooks",
    title: "Event Handling",
    slug: "event-handling",
    description: "onClick, onChange, event types in TypeScript.",
    content: [
      "Handling events in React is similar to handling events on DOM elements, but there are some syntax differences.",
      "React events are named using camelCase, rather than lowercase (e.g., onClick instead of onclick).",
      "In TypeScript, you should type your event handlers. React provides specific types for different events, like React.MouseEvent or React.ChangeEvent."
    ],
    codeExample: `import React, { useState } from 'react';

export default function TextInput() {
  const [value, setValue] = useState("");

  // Typing the change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Typing the click event
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Submitted:', value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}`,
    quiz: {
      question: "What TypeScript type is used for click events?",
      options: ["Event", "ClickEvent", "React.MouseEvent", "React.ClickEvent"],
      correctAnswer: 2
    }
  },
  {
    id: "l8",
    category: "Advanced",
    title: "Conditional Rendering",
    slug: "conditional-rendering",
    description: "Ternary, &&, switch patterns.",
    content: [
      "In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.",
      "You can use standard JavaScript operators like the logical && operator or the ternary operator (condition ? true : false) to conditionally render elements inline.",
      "For more complex conditions, you can use if statements or switch statements outside of the JSX."
    ],
    codeExample: `interface UserProps {
  isLoggedIn: boolean;
  username?: string;
}

export default function Greeting({ isLoggedIn, username }: UserProps) {
  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}

      {/* Logical && operator */}
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
}`,
    quiz: {
      question: "Which operator renders JSX only when a condition is true?",
      options: ["||", "??", "&&", "!"],
      correctAnswer: 2
    }
  },
  {
    id: "l9",
    category: "Advanced",
    title: "Lists & Keys",
    slug: "lists-and-keys",
    description: ".map(), key prop, typed arrays.",
    content: [
      "You can build collections of elements and include them in JSX using curly braces {}. The standard way to iterate over an array in React is using the JavaScript map() function.",
      "When you render a list of items, React requires a special 'key' prop to be added to each item in the list.",
      "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity."
    ],
    codeExample: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li 
          key={todo.id} 
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
    quiz: {
      question: "Why does React require a unique key prop in lists?",
      options: ["For CSS styling", "Efficient reconciliation", "To sort the list", "To track clicks"],
      correctAnswer: 1
    }
  }
];
