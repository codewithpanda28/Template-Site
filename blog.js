// Blog data with expanded content
const blogPosts = [
    {
        id: 1,
        title: "Mastering Modern JavaScript: ES6+ Features and Best Practices",
        date: "February 12, 2025",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500",
        preview: "Dive deep into modern JavaScript features including async/await, destructuring, modules, and more. Learn how to write cleaner, more efficient code.",
        content: `
            <h1>Mastering Modern JavaScript: ES6+ Features</h1>
            
            <p>Modern JavaScript has evolved significantly since the introduction of ES6 (ECMAScript 2015). This comprehensive guide will explore the most important features and best practices that every developer should know.</p>

            <h2>1. Arrow Functions</h2>
            <p>Arrow functions provide a concise syntax for writing function expressions:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with object return
const createUser = (name, age) => ({
    name,
    age,
    created: new Date()
});

// Arrow function in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
                </code>
            </div>

            <h2>2. Destructuring</h2>
            <p>Destructuring allows you to extract values from objects and arrays efficiently:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Object destructuring
const user = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name, age, address: { city } } = user;

// Array destructuring
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;

// Function parameter destructuring
const displayUser = ({ name, age }) => {
    console.log(\`\${name} is \${age} years old\`);
};
                </code>
            </div>

            <h2>3. Async/Await</h2>
            <p>Async/await provides a cleaner way to work with Promises:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Fetching data with async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Multiple async operations
async function loadUserProfile(userId) {
    const [user, posts, friends] = await Promise.all([
        fetchUserData(userId),
        fetchUserPosts(userId),
        fetchUserFriends(userId)
    ]);

    return {
        user,
        posts,
        friends
    };
}

// Error handling with async/await
const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const formData = new FormData(event.target);
        const response = await submitForm(formData);
        
        if (!response.ok) {
            throw new Error('Form submission failed');
        }
        
        showSuccess('Form submitted successfully');
    } catch (error) {
        showError(error.message);
    }
};
                </code>
            </div>

            <h2>4. Modules</h2>
            <p>Modules help organize code into reusable, maintainable pieces:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(date);
};

export const calculateAge = (birthDate) => {
    const diff = Date.now() - birthDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

// constants.js
export const API_URL = 'https://api.example.com';
export const MAX_ITEMS = 100;

// main.js
import { formatDate, calculateAge } from './utils.js';
import { API_URL, MAX_ITEMS } from './constants.js';

const user = {
    name: 'Jane Doe',
    birthDate: new Date('1990-01-01')
};

console.log(\`Age: \${calculateAge(user.birthDate)}\`);
                </code>
            </div>

            <h2>5. Classes and Inheritance</h2>
            <p>Modern JavaScript provides a cleaner syntax for object-oriented programming:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return \`\${this.year} \${this.make} \${this.model}\`;
    }

    static isValidYear(year) {
        return year >= 1900 && year <= new Date().getFullYear();
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    getInfo() {
        return \`\${super.getInfo()} - \${this.doors} doors\`;
    }
}

// Using classes
const myCar = new Car('Toyota', 'Camry', 2025, 4);
console.log(myCar.getInfo());
                </code>
            </div>

            <h2>6. Template Literals</h2>
            <p>Template literals provide enhanced string formatting capabilities:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Multiline strings
const email = \`
Dear \${user.name},

Thank you for your recent purchase of \${product.name}.
Your order #\${order.id} has been confirmed.

Best regards,
The Team
\`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] || '';
        return \`\${result}\${str}<span class="highlight">\${value}</span>\`;
    }, '');
}

const name = 'John';
const score = 95;
const result = highlight\`Player \${name} scored \${score} points\`;
                </code>
            </div>

            <h2>7. Maps and Sets</h2>
            <p>Modern JavaScript provides new data structures for specific use cases:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Using Map
const userRoles = new Map();
userRoles.set('john@example.com', 'admin');
userRoles.set('jane@example.com', 'user');

// Map operations
if (userRoles.has('john@example.com')) {
    console.log(userRoles.get('john@example.com'));
}

// Using Set for unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// Custom object as Map keys
const userMap = new Map();
const userObj = { id: 1, name: 'John' };
userMap.set(userObj, { lastLogin: new Date() });
                </code>
            </div>

            <h2>8. Error Handling Best Practices</h2>
            <p>Proper error handling is crucial for robust applications:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Custom error classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Error handling in async functions
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new APIError('Failed to fetch data', response.status);
        }
        
        return await response.json();
    } catch (error) {
        if (error instanceof APIError) {
            // Handle API-specific errors
            handleAPIError(error);
        } else {
            // Handle other errors
            console.error('Unexpected error:', error);
            throw error;
        }
    }
}
                </code>
            </div>

            <h2>Best Practices and Tips</h2>
            <ul>
                <li>Use const by default, let when needed, avoid var</li>
                <li>Leverage array methods like map, filter, and reduce</li>
                <li>Use async/await instead of raw promises when possible</li>
                <li>Implement proper error handling with try/catch</li>
                <li>Use modules to organize code</li>
                <li>Take advantage of object shorthand notation</li>
                <li>Use parameter defaults instead of manual checks</li>
            </ul>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const for better optimization by the JavaScript engine</li>
                <li>Be careful with deep destructuring which can impact performance</li>
                <li>Consider using Map instead of Object for large key-value stores</li>
                <li>Use Set for checking existence in large collections</li>
                <li>Implement proper error boundaries in your applications</li>
            </ul>

            <h2>Browser Compatibility</h2>
            <p>While most modern browsers support ES6+ features, consider:</p>
            <ul>
                <li>Using Babel for transpiling when targeting older browsers</li>
                <li>Implementing polyfills for missing features</li>
                <li>Testing across different browsers and versions</li>
                <li>Using feature detection when necessary</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Modern JavaScript provides powerful features that can significantly improve your code quality and developer experience. By mastering these features and following best practices, you'll be better equipped to build robust and maintainable applications.</p>
        `
    },
    {
        id: 2,
        title: "Understanding CSS Grid Layout",
        date: "March 1, 2025",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
        preview: "Explore the power of CSS Grid Layout and how it can simplify your web design process.",
        content: `
            <h1>Understanding CSS Grid Layout</h1>
            <p>CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts with ease and precision. In this article, we will explore the fundamentals of CSS Grid and how to implement it in your projects.</p>

            <h2>What is CSS Grid?</h2>
            <p>CSS Grid is a layout system that enables you to create grid-based layouts using rows and columns. It provides a more efficient way to design web pages compared to traditional layout methods like floats and positioning.</p>

            <h2>Getting Started with CSS Grid</h2>
            <p>To start using CSS Grid, you need to define a grid container. This is done by setting the display property to grid:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-css">
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
                </code>
            </div>

            <h2>Defining Rows and Columns</h2>
            <p>You can define the number of rows and columns in your grid using the <code>grid-template-rows</code> and <code>grid-template-columns</code> properties:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-css">
.container {
    display: grid;
    grid-template-columns: 1fr 2fr; /* 1 column takes 1 fraction, 2nd takes 2 fractions */
    grid-template-rows: auto; /* Rows will adjust based on content */
}
                </code>
            </div>

            <h2>Placing Items in the Grid</h2>
            <p>To place items in the grid, you can use the <code>grid-column</code> and <code>grid-row</code> properties:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-css">
.item {
    grid-column: 1 / 3; /* Span from column 1 to column 3 */
    grid-row: 1; /* Place in row 1 */
}
                </code>
            </div>

            <h2>Responsive Design with CSS Grid</h2>
            <p>CSS Grid makes it easy to create responsive designs. You can use media queries to adjust the grid layout based on screen size:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-css">
@media (max-width: 600px) {
    .container {
        grid-template-columns: 1fr; /* Stack items in a single column */
    }
}
                </code>
            </div>

            <h2>Conclusion</h2>
            <p>CSS Grid Layout is a powerful tool for web designers. It simplifies the process of creating complex layouts and enhances the responsiveness of your designs. By mastering CSS Grid, you can take your web design skills to the next level.</p>
        `
    },
    {
        id: 3,
        title: "React Hooks Deep Dive: Building Better Components",
        date: "March 15, 2025",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
        preview: "Master React Hooks with practical examples and best practices. Learn how to build efficient and maintainable React components.",
        content: `
            <h1>React Hooks Deep Dive</h1>
            <p>React Hooks revolutionized how we write React components. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.</p>

            <h2>1. useState Hook</h2>
            <p>The useState hook is fundamental for managing state in functional components:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: '', email: '' });

    const increment = () => setCount(prev => prev + 1);
    
    const updateUser = (field, value) => {
        setUser(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            
            <input
                value={user.name}
                onChange={e => updateUser('name', e.target.value)}
                placeholder="Name"
            />
        </div>
    );
}
                </code>
            </div>

            <h2>2. useEffect Hook</h2>
            <p>useEffect handles side effects in your components:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function fetchUser() {
            try {
                setLoading(true);
                const response = await fetch(\`/api/users/\${userId}\`);
                const data = await response.json();
                
                if (mounted) {
                    setUser(data);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchUser();

        return () => {
            mounted = false;
        };
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
                </code>
            </div>

            <h2>3. useCallback Hook</h2>
            <p>useCallback is essential for optimizing performance by memoizing functions:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import React, { useState, useCallback } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = useCallback(() => {
        if (!text.trim()) return;
        
        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                text,
                completed: false
            }
        ]);
        setText('');
    }, [text]);

    const toggleTodo = useCallback((id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    return (
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add todo"
            />
            <button onClick={addTodo}>Add</button>
            
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
                </code>
            </div>

            <h2>4. useMemo Hook</h2>
            <p>useMemo helps optimize expensive calculations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
    const [filter, setFilter] = useState('');

    const filteredNumbers = useMemo(() => {
        console.log('Calculating filtered numbers...');
        return numbers
            .filter(n => n.toString().includes(filter))
            .sort((a, b) => a - b);
    }, [numbers, filter]);

    const stats = useMemo(() => {
        console.log('Calculating stats...');
        const sum = filteredNumbers.reduce((a, b) => a + b, 0);
        const avg = sum / filteredNumbers.length;
        const max = Math.max(...filteredNumbers);
        const min = Math.min(...filteredNumbers);

        return { sum, avg, max, min };
    }, [filteredNumbers]);

    return (
        <div>
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter numbers"
            />
            
            <div>
                <p>Sum: {stats.sum}</p>
                <p>Average: {stats.avg.toFixed(2)}</p>
                <p>Max: {stats.max}</p>
                <p>Min: {stats.min}</p>
            </div>
            
            <ul>
                {filteredNumbers.map(n => (
                    <li key={n}>{n}</li>
                ))}
            </ul>
        </div>
    );
}
                </code>
            </div>

            <h2>5. useRef Hook</h2>
            <p>useRef is perfect for maintaining mutable values and accessing DOM elements:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
    const inputRef = useRef(null);
    const intervalRef = useRef(null);
    const countRef = useRef(0);

    useEffect(() => {
        // Focus input on mount
        inputRef.current?.focus();

        // Set up an interval
        intervalRef.current = setInterval(() => {
            countRef.current += 1;
            console.log(\`Component has been mounted for \${countRef.current} seconds\`);
        }, 1000);

        // Cleanup on unmount
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <input
            ref={inputRef}
            placeholder="This input will auto-focus"
        />
    );
}
                </code>
            </div>

            <h2>6. Custom Hooks</h2>
            <p>Create reusable custom hooks to share logic between components:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { useState, useEffect } from 'react';

// Custom hook for handling API requests
function useApi(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                const json = await response.json();

                if (mounted) {
                    setData(json);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            mounted = false;
        };
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
}

// Custom hook for form handling
function useForm(initialValues = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset
    };
}

// Using custom hooks
function UserForm() {
    const { values, handleChange, handleBlur, reset } = useForm({
        name: '',
        email: ''
    });

    const { data, loading, error } = useApi('/api/users');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
            reset();
        }}>
            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Always specify dependencies array in useEffect</li>
                <li>Use functional updates with useState when new state depends on previous state</li>
                <li>Memoize callbacks with useCallback when passing them to optimized child components</li>
                <li>Use useMemo for expensive calculations</li>
                <li>Clean up side effects in useEffect</li>
                <li>Keep custom hooks focused and reusable</li>
            </ul>

            <h2>Common Pitfalls</h2>
            <ul>
                <li>Infinite re-render loops due to missing or incorrect dependencies</li>
                <li>Not cleaning up side effects</li>
                <li>Over-optimization with useMemo and useCallback</li>
                <li>Mutating state directly instead of using setState</li>
                <li>Not handling component unmounting in async operations</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use React.memo for preventing unnecessary re-renders</li>
                <li>Implement useCallback for memoizing functions</li>
                <li>Use useMemo for expensive calculations</li>
                <li>Avoid creating new objects or arrays in every render</li>
                <li>Implement proper cleanup in useEffect</li>
            </ul>

            <h2>Conclusion</h2>
            <p>React Hooks provide a powerful way to manage state and side effects in functional components. By understanding and following these patterns and best practices, you can build more maintainable and performant React applications.</p>
        `
    },
    {
        id: 4,
        title: "TypeScript Advanced Features and Best Practices",
        date: "March 20, 2025",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=500",
        preview: "Explore advanced TypeScript features including generics, utility types, and decorators. Learn how to write type-safe and maintainable code.",
        content: `
            <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 5,
        title: "Building RESTful APIs with Node.js and Express",
        date: "March 25, 2025",
        image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=500",
        preview: "Learn how to build scalable and secure RESTful APIs using Node.js and Express. Includes authentication, validation, error handling, and best practices.",
        content: `
            <h1>Building RESTful APIs with Node.js and Express</h1>
            <p>This comprehensive guide will teach you how to build production-ready RESTful APIs using Node.js and Express. We'll cover everything from basic setup to advanced features and best practices.</p>

            <h2>1. Project Setup</h2>
            <p>Let's start by setting up a new Node.js project with Express:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Initialize project
npm init -y

// Install dependencies
npm install express dotenv mongoose joi bcryptjs jsonwebtoken cors helmet morgan

// Create server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
                </code>
            </div>

            <h2>2. Database Configuration</h2>
            <p>Set up MongoDB connection with Mongoose:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
                </code>
            </div>

            <h2>3. Authentication Middleware</h2>
            <p>Implement JWT authentication:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied' });
    }
    next();
};

module.exports = { auth, adminOnly };
                </code>
            </div>

            <h2>4. Request Validation</h2>
            <p>Implement request validation using Joi:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// validation/user.js
const Joi = require('joi');

const userValidation = {
    register: (data) => {
        const schema = Joi.object({
            name: Joi.string().min(2).max(50).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            role: Joi.string().valid('user', 'admin')
        });
        return schema.validate(data);
    },

    login: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
        return schema.validate(data);
    },

    update: (data) => {
        const schema = Joi.object({
            name: Joi.string().min(2).max(50),
            email: Joi.string().email(),
            password: Joi.string().min(6)
        });
        return schema.validate(data);
    }
};

module.exports = userValidation;
                </code>
            </div>

            <h2>5. Route Handlers</h2>
            <p>Implement route handlers with proper error handling:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// routes/auth.js
const router = require('express').Router();
const User = require('../models/User');
const { auth } = require('../middleware/auth');
const { login: validateLogin } = require('../validation/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        // Validate request
        const { error } = validateLogin(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Check if user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Verify password
        const isValid = await user.comparePassword(req.body.password);
        if (!isValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// routes/users.js
const router = require('express').Router();
const User = require('../models/User');
const { auth, adminOnly } = require('../middleware/auth');
const { register: validateRegister } = require('../validation/user');

router.post('/', async (req, res) => {
    try {
        // Validate request
        const { error } = validateRegister(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create new user
        user = new User(req.body);
        await user.save();

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(201).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all users (admin only)
router.get('/', [auth, adminOnly], async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
                </code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Implement global error handling middleware:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// middleware/error.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            error: Object.values(err.errors).map(e => e.message)
        });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    if (err.code === 11000) {
        return res.status(400).json({
            error: 'Duplicate field value entered'
        });
    }

    res.status(500).json({
        error: 'Something went wrong'
    });
};

// Custom error class
class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { errorHandler, APIError };
                </code>
            </div>

            <h2>7. Rate Limiting</h2>
            <p>Implement rate limiting to prevent abuse:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('ioredis');

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

const limiter = rateLimit({
    store: new RedisStore({
        client: redis,
        prefix: 'rate-limit:'
    }),
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests, please try again later.'
    }
});

// Apply rate limiting to all routes
app.use(limiter);

// Custom rate limits for specific routes
const authLimiter = rateLimit({
    store: new RedisStore({
        client: redis,
        prefix: 'auth-limit:'
    }),
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 attempts per hour
    message: {
        error: 'Too many login attempts, please try again later.'
    }
});

app.use('/api/auth/login', authLimiter);
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use environment variables for configuration</li>
                <li>Implement proper error handling and validation</li>
                <li>Use security middleware (helmet, cors, etc.)</li>
                <li>Implement rate limiting</li>
                <li>Use proper HTTP status codes</li>
                <li>Validate and sanitize all inputs</li>
                <li>Implement proper logging</li>
                <li>Use async/await for better error handling</li>
            </ul>

            <h2>Security Considerations</h2>
            <ul>
                <li>Use HTTPS in production</li>
                <li>Implement proper authentication and authorization</li>
                <li>Hash passwords using strong algorithms</li>
                <li>Validate and sanitize user input</li>
                <li>Set secure HTTP headers</li>
                <li>Implement rate limiting</li>
                <li>Use security best practices for JWT</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use caching strategies</li>
                <li>Implement database indexing</li>
                <li>Use compression middleware</li>
                <li>Optimize database queries</li>
                <li>Implement proper error handling</li>
                <li>Use connection pooling</li>
                <li>Implement proper logging levels</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Building a secure and scalable RESTful API requires careful consideration of many factors including security, performance, and maintainability. By following these best practices and implementing proper error handling, validation, and security measures, you can create robust APIs that meet production requirements.</p>
        `
    },
    {
        id: 6,
        title: "Docker and Container Orchestration: A Complete Guide",
        date: "March 30, 2025",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500",
        preview: "Master Docker containerization and orchestration. Learn how to build, deploy, and manage containerized applications using Docker and Docker Compose.",
        content: `
            <h1>Docker and Container Orchestration: A Complete Guide</h1>
            <p>This comprehensive guide covers everything you need to know about Docker containerization, from basic concepts to advanced orchestration techniques.</p>

            <h2>1. Docker Basics</h2>
            <p>Let's start with the fundamental concepts and commands:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-dockerfile">
# Basic Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]

# Build and run commands
docker build -t myapp .
docker run -p 3000:3000 myapp

# Basic Docker commands
docker ps                  # List running containers
docker images             # List images
docker stop <container>   # Stop a container
docker rm <container>     # Remove a container
docker rmi <image>        # Remove an image
docker logs <container>   # View container logs
docker exec -it <container> sh  # Enter container shell
                </code>
            </div>

            <h2>2. Multi-Stage Builds</h2>
            <p>Optimize your Docker images using multi-stage builds:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-dockerfile">
# Multi-stage Dockerfile for a React application
# Build stage
FROM node:16-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build command
docker build -t myapp:prod .
                </code>
            </div>

            <h2>3. Docker Compose</h2>
            <p>Manage multi-container applications with Docker Compose:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-yaml">
# docker-compose.yml
version: '3.8'

services:
  web:
    build: 
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://db:27017/myapp
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: mongo:latest
    volumes:
      - mongodb_data:/data/db
    networks:
      - app-network

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  mongodb_data:
  redis_data:

# Docker Compose commands
docker-compose up -d      # Start services in background
docker-compose down      # Stop and remove containers
docker-compose logs     # View service logs
docker-compose ps       # List running services
                </code>
            </div>

            <h2>4. Docker Networks</h2>
            <p>Understand and configure Docker networking:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-bash">
# Create a custom network
docker network create --driver bridge my-network

# Run containers in the network
docker run -d --name api --network my-network myapi
docker run -d --name db --network my-network mongo

# Network commands
docker network ls                # List networks
docker network inspect my-network  # Inspect network
docker network connect my-network container  # Connect container to network
docker network disconnect my-network container  # Disconnect from network
                </code>
            </div>

            <h2>5. Docker Volumes</h2>
            <p>Manage persistent data with Docker volumes:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-bash">
# Create and manage volumes
docker volume create my-volume
docker volume ls
docker volume inspect my-volume

# Use volumes in containers
docker run -d \
  --name postgres \
  -v postgres_data:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=mysecret \
  postgres

# Backup volume data
docker run --rm \
  -v postgres_data:/source \
  -v $(pwd):/backup \
  alpine tar czf /backup/postgres_backup.tar.gz -C /source .

# Restore volume data
docker run --rm \
  -v postgres_data:/target \
  -v $(pwd):/backup \
  alpine tar xzf /backup/postgres_backup.tar.gz -C /target
                </code>
            </div>

            <h2>6. Production Best Practices</h2>
            <p>Follow these Dockerfile best practices:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-dockerfile">
# Use specific version tags
FROM node:16.14.2-alpine3.15

# Use COPY instead of ADD
COPY package*.json ./

# Combine RUN commands
RUN apk add --no-cache python3 make g++ && \
    npm install && \
    npm cache clean --force

# Set proper permissions
RUN addgroup -g 1001 appuser && \
    adduser -D -G appuser -u 1001 appuser && \
    chown -R appuser:appuser /app

USER appuser

# Use health checks
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1

# Use .dockerignore
# .dockerignore
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
README.md
                </code>
            </div>

            <h2>7. Container Orchestration</h2>
            <p>Scale and manage containers with Docker Swarm:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-yaml">
# docker-compose.prod.yml
version: '3.8'

services:
  web:
    image: myapp:latest
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    ports:
      - "80:3000"
    networks:
      - app-network

  db:
    image: mongo:latest
    deploy:
      placement:
        constraints:
          - node.role == manager
    volumes:
      - mongodb_data:/data/db
    networks:
      - app-network

networks:
  app-network:
    driver: overlay

volumes:
  mongodb_data:

# Swarm commands
docker swarm init
docker stack deploy -c docker-compose.prod.yml myapp
docker service ls
docker service scale myapp_web=5
docker stack ps myapp
                </code>
            </div>

            <h2>8. Monitoring and Logging</h2>
            <p>Set up monitoring and logging for Docker containers:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-yaml">
# docker-compose.monitoring.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana
    depends_on:
      - prometheus
    ports:
      - "3000:3000"

  cadvisor:
    image: gcr.io/cadvisor/cadvisor
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    ports:
      - "8080:8080"

  loki:
    image: grafana/loki
    ports:
      - "3100:3100"

  promtail:
    image: grafana/promtail
    volumes:
      - /var/log:/var/log
    command: -config.file=/etc/promtail/config.yml
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use multi-stage builds to minimize image size</li>
                <li>Implement proper security measures</li>
                <li>Use health checks for container monitoring</li>
                <li>Implement proper logging strategies</li>
                <li>Use Docker Compose for development</li>
                <li>Implement CI/CD pipelines</li>
                <li>Regular security scanning of images</li>
            </ul>

            <h2>Security Considerations</h2>
            <ul>
                <li>Use official base images</li>
                <li>Scan images for vulnerabilities</li>
                <li>Run containers as non-root users</li>
                <li>Implement resource limits</li>
                <li>Use secrets management</li>
                <li>Regular security updates</li>
                <li>Network segmentation</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Optimize Dockerfile for layer caching</li>
                <li>Use multi-stage builds</li>
                <li>Implement proper resource limits</li>
                <li>Use appropriate base images</li>
                <li>Optimize application code</li>
                <li>Use volume mounts efficiently</li>
                <li>Monitor container metrics</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Docker containerization provides a powerful way to package, distribute, and run applications. By following these best practices and implementing proper security and monitoring measures, you can create robust and scalable containerized applications.</p>
        `
    },
    {
        id: 7,
        title: "Next.js 13: The Complete Guide to Server Components",
        date: "March 28, 2025",
        image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500",
        preview: "Master Next.js 13's revolutionary server components. Learn about streaming, suspense boundaries, and the future of React development.",
        content: `
            <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 8,
        title: "Rust Programming: Building High-Performance Systems",
        date: "March 26, 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
        preview: "Learn Rust programming from basics to advanced concepts. Build secure and high-performance systems with Rust's powerful features.",
        content: `
            <h1>Rust Programming: Building High-Performance Systems</h1>
            <p>Rust combines performance with safety in systems programming...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 9,
        title: "Vue.js 3 Composition API Deep Dive",
        date: "March 24, 2025",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500",
        preview: "Master Vue.js 3's Composition API. Learn about refs, reactive state, composables, and building scalable applications.",
        content: `
            <h1>Vue.js 3 Composition API Deep Dive</h1>
            <p>The Composition API revolutionizes how we write Vue applications...</p>
              <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 10,
        title: "Advanced Git Workflows for Teams",
        date: "March 22, 2025",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500",
        preview: "Learn professional Git workflows, branching strategies, and collaboration techniques for large teams.",
        content: `
            <h1>Advanced Git Workflows for Teams</h1>
            <p>Effective Git workflows are crucial for team collaboration...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 11,
        title: "Building Scalable Microservices with gRPC",
        date: "March 20, 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
        preview: "Learn how to build high-performance microservices using gRPC. Master protocol buffers, streaming, and service mesh integration.",
        content: `
            <h1>Building Scalable Microservices with gRPC</h1>
            <p>gRPC enables efficient communication between microservices...</p>
           <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 12,
        title: "WebAssembly: The Future of Web Performance",
        date: "March 18, 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
        preview: "Explore WebAssembly and its impact on web performance. Learn how to use Rust and C++ in web applications.",
        content: `
            <h1>WebAssembly: The Future of Web Performance</h1>
            <p>WebAssembly brings near-native performance to the web...</p>
               <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 13,
        title: "Kubernetes Security Best Practices",
        date: "March 16, 2025",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
        preview: "Master Kubernetes security. Learn about RBAC, network policies, security contexts, and container scanning.",
        content: `
            <h1>Kubernetes Security Best Practices</h1>
            <p>Security is crucial for Kubernetes deployments...</p>
            <!-- Rest of the content -->
        `
    },
    {
        id: 14,
        title: "Building AI-Powered Applications with TensorFlow.js",
        date: "March 14, 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
        preview: "Learn how to integrate machine learning models into web applications using TensorFlow.js.",
        content: `
            <h1>Building AI-Powered Applications with TensorFlow.js</h1>
            <p>TensorFlow.js brings machine learning to the browser...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 15,
        title: "Advanced CSS Architecture and Performance",
        date: "March 12, 2025",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
        preview: "Master modern CSS architecture. Learn about CSS modules, CSS-in-JS, performance optimization, and design systems.",
        content: `
            <h1>Advanced CSS Architecture and Performance</h1>
            <p>Building maintainable and performant CSS systems...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 16,
        title: "Blockchain Development with Solidity",
        date: "March 10, 2025",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
        preview: "Learn blockchain development with Solidity. Build smart contracts and decentralized applications on Ethereum.",
        content: `
            <h1>Blockchain Development with Solidity</h1>
            <p>Smart contracts power the decentralized web...</p>
             <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 17,
        title: "Real-Time Applications with WebSockets",
        date: "March 8, 2025",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500",
        preview: "Build real-time web applications using WebSockets. Learn about Socket.io, scaling, and best practices.",
        content: `
            <h1>Real-Time Applications with WebSockets</h1>
            <p>WebSockets enable bidirectional real-time communication...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 18,
        title: "Advanced PostgreSQL for Developers",
        date: "March 6, 2025",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
        preview: "Master advanced PostgreSQL features. Learn about indexing, partitioning, JSON operations, and performance tuning.",
        content: `
            <h1>Advanced PostgreSQL for Developers</h1>
            <p>PostgreSQL offers powerful features for modern applications...</p>
              <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 19,
        title: "Building Desktop Applications with Electron",
        date: "March 4, 2025",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
        preview: "Learn how to build cross-platform desktop applications using Electron and web technologies.",
        content: `
            <h1>Building Desktop Applications with Electron</h1>
            <p>Electron enables building native apps with web technologies...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 20,
        title: "Advanced Redux Patterns and Performance",
        date: "March 2, 2025",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500",
        preview: "Master advanced Redux patterns. Learn about middleware, selectors, normalization, and performance optimization.",
        content: `
            <h1>Advanced Redux Patterns and Performance</h1>
            <p>Redux patterns for large-scale applications...</p>
               <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 21,
        title: "GraphQL Federation and Microservices",
        date: "February 28, 2025",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500",
        preview: "Learn how to implement GraphQL Federation for microservices architecture. Master schema stitching and gateway patterns.",
        content: `
            <h1>GraphQL Federation and Microservices</h1>
            <p>Federation enables scalable GraphQL architectures...</p>
              <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 22,
        title: "Serverless Architecture with AWS Lambda",
        date: "February 26, 2025",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        preview: "Master serverless architecture using AWS Lambda. Learn about event-driven design, scaling, and best practices.",
        content: `
            <h1>Serverless Architecture with AWS Lambda</h1>
            <p>Serverless computing revolutionizes application deployment...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 23,
        title: "Mobile Development with React Native",
        date: "February 24, 2025",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
        preview: "Learn cross-platform mobile development with React Native. Build native mobile apps using React.",
        content: `
            <h1>Mobile Development with React Native</h1>
            <p>React Native enables efficient mobile app development...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 24,
        title: "Building CI/CD Pipelines with GitHub Actions",
        date: "February 22, 2025",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500",
        preview: "Learn how to build efficient CI/CD pipelines using GitHub Actions. Master workflows, actions, and deployment.",
        content: `
            <h1>Building CI/CD Pipelines with GitHub Actions</h1>
            <p>Automate your development workflow with GitHub Actions...</p>
               <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 25,
        title: "Advanced Node.js Performance Optimization",
        date: "February 20, 2025",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500",
        preview: "Master Node.js performance optimization. Learn about clustering, memory management, and profiling.",
        content: `
            <h1>Advanced Node.js Performance Optimization</h1>
            <p>Optimize Node.js applications for production...</p>
              <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 26,
        title: "Building PWAs with Workbox",
        date: "February 18, 2025",
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500",
        preview: "Learn how to build Progressive Web Apps using Workbox. Master service workers, caching, and offline functionality.",
        content: `
            <h1>Building PWAs with Workbox</h1>
            <p>Workbox simplifies PWA development...</p>
             <h1>TypeScript Advanced Features and Best Practices</h1>
            <p>TypeScript extends JavaScript by adding static types and powerful features. This comprehensive guide explores advanced TypeScript concepts and how to use them effectively.</p>

            <h2>1. Advanced Types</h2>
            <p>TypeScript provides several advanced type features for better type safety:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Union Types
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    reports: Employee[];
};

type ManagerWithEmployee = Employee & Manager;

// Type Guards
function isManager(employee: Employee | Manager): employee is Manager {
    return 'department' in employee;
}

// Discriminated Unions
type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'triangle'; base: number; height: number };

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return (shape.base * shape.height) / 2;
    }
}
                </code>
            </div>

            <h2>2. Generics</h2>
            <p>Generics enable type-safe reusable code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interfaces
interface Repository<T> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<void>;
}

// Generic Classes
class Queue<T> {
    private data: T[] = [];

    push(item: T): void {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }
}

// Generic Constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): number {
    console.log(arg.length);
    return arg.length;
}

// Generic Type Inference
const numbers = [1, 2, 3]; // Type is inferred as number[]
const random = identity("Hello"); // Type is inferred as string
                </code>
            </div>

            <h2>3. Decorators</h2>
            <p>Decorators provide a way to add annotations and metadata to your code:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Class Decorator
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        created = new Date();
    };
}

// Method Decorator
function measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();
        console.log(\`\${propertyKey} took \${end - start}ms\`);
        return result;
    };

    return descriptor;
}

// Property Decorator
function required(target: any, propertyKey: string) {
    let value: any;
    
    const getter = function() {
        return value;
    };
    
    const setter = function(newVal: any) {
        if (newVal === undefined || newVal === null) {
            throw new Error(\`\${propertyKey} is required\`);
        }
        value = newVal;
    };
    
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Using Decorators
@logger
class UserService {
    @required
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    @measure
    async getUsers(): Promise<User[]> {
        // Implementation
        return [];
    }
}
                </code>
            </div>

            <h2>4. Utility Types</h2>
            <p>TypeScript provides built-in utility types for common type transformations:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    settings: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;

// Omit - Creates a type without the specified properties
type PublicUser = Omit<User, 'id' | 'settings'>;

// Record - Creates an object type with specified keys and value type
type Roles = Record<'admin' | 'user', { permissions: string[] }>;

// Readonly - Makes all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extracts the return type of a function
async function fetchUser(): Promise<User> {
    // Implementation
    return {} as User;
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<User>

// Parameters - Extracts parameter types as a tuple
function createUser(name: string, email: string, role: User['role']) {
    // Implementation
}

type CreateUserParams = Parameters<typeof createUser>; // [string, string, "admin" | "user"]
                </code>
            </div>

            <h2>5. Advanced Type Inference</h2>
            <p>TypeScript can infer complex types in various scenarios:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Conditional Types
type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type MouseEvents = EventName<'click' | 'mousedown' | 'mouseup'>;

// Inference in Conditional Types
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// Type Inference in Array Methods
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// TypeScript infers the correct types
const ids = items.map(item => item.id); // number[]
const names = items.map(item => item.name); // string[]

// Type Inference with Generic Functions
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John',
    age: 30
};

const name = prop(user, 'name'); // TypeScript knows this is string
const age = prop(user, 'age'); // TypeScript knows this is number
                </code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Use strict mode with noImplicitAny and strictNullChecks</li>
                <li>Leverage type inference when possible</li>
                <li>Use interfaces for object types that will be implemented</li>
                <li>Use type for unions, intersections, and mapped types</li>
                <li>Make good use of generics for reusable code</li>
                <li>Document complex types with JSDoc comments</li>
            </ul>

            <h2>Common Patterns</h2>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Builder Pattern with Method Chaining
class QueryBuilder<T> {
    private conditions: string[] = [];

    where(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: keyof T): this {
        // Implementation
        return this;
    }

    build(): string {
        return this.conditions.join(' AND ');
    }
}

// Factory Pattern with Type Safety
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() { return 'Woof!'; }
}

class Cat implements Animal {
    speak() { return 'Meow!'; }
}

type AnimalType = 'dog' | 'cat';

function createAnimal(type: AnimalType): Animal {
    switch (type) {
        case 'dog':
            return new Dog();
        case 'cat':
            return new Cat();
        default:
            throw new Error(\`Unknown animal type: \${type}\`);
    }
}

// Singleton Pattern
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
                </code>
            </div>

            <h2>Error Handling</h2>
            <p>Implement proper error handling with TypeScript:</p>
            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-typescript">
// Custom error classes
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class APIError extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

// Result Type for Error Handling
type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

async function tryOperation<T>(
    operation: () => Promise<T>
): Promise<Result<T>> {
    try {
        const value = await operation();
        return { success: true, value };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error : new Error(String(error))
        };
    }
}

// Using the Result Type
async function fetchUserData(id: string): Promise<Result<User>> {
    const result = await tryOperation(async () => {
        const response = await fetch(\`/api/users/\${id}\`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    if (!result.success) {
        console.error('Error fetching user:', result.error);
    }

    return result;
}
                </code>
            </div>

            <h2>Performance Considerations</h2>
            <ul>
                <li>Use const assertions for better type inference</li>
                <li>Avoid excessive use of any type</li>
                <li>Use type-only imports to reduce bundle size</li>
                <li>Leverage TypeScript's build-time type checking</li>
                <li>Use proper tsconfig.json settings for optimization</li>
            </ul>

            <h2>Conclusion</h2>
            <p>TypeScript's advanced features provide powerful tools for building type-safe applications. By understanding and applying these concepts, you can write more maintainable and robust code while catching potential errors at compile time.</p>
        `
    },
    {
        id: 27,
        title: "Advanced MongoDB Aggregation Pipeline",
        date: "February 16, 2025",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
        preview: "Master MongoDB's aggregation pipeline. Learn about complex queries, optimization, and best practices.",
        content: `
            <h1>Advanced MongoDB Aggregation Pipeline</h1>
            <p>MongoDB's aggregation pipeline for complex data processing...</p>
            <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    },
    {
        id: 28,
        title: "Building Scalable APIs with FastAPI",
        date: "February 14, 2025",
        image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=500",
        preview: "Learn how to build high-performance APIs with FastAPI. Master async programming, validation, and documentation.",
        content: `
            <h1>Building Scalable APIs with FastAPI</h1>
            <p>FastAPI enables rapid API development with Python...</p>
            <!-- Rest of the content -->
        `
    },
    {
        id: 29,
        title: "Advanced Testing Strategies for React",
        date: "February 12, 2025",
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500",
        preview: "Master testing in React applications. Learn about unit testing, integration testing, and end-to-end testing.",
        content: `
            <h1>Advanced Testing Strategies for React</h1>
            <p>Comprehensive testing ensures application reliability...</p>
            <!-- Rest of the content -->
        `
    },
    {
        id: 30,
        title: "Building 3D Web Applications with Three.js",
        date: "February 10, 2025",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500",
        preview: "Learn how to create immersive 3D web experiences using Three.js. Master 3D graphics and animations.",
        content: `
            <h1>Building 3D Web Applications with Three.js</h1>
            <p>Three.js brings 3D graphics to the web...</p>
               <h1>Next.js 13: The Complete Guide to Server Components</h1>
            
            <p>Next.js 13 introduces a revolutionary approach to React development with Server Components. In this comprehensive guide, we'll explore everything you need to know about this game-changing feature.</p>

            <h2>1. Understanding Server Components</h2>
            <p>Server Components allow you to render React components on the server, reducing the JavaScript bundle size and improving performance. Here's how they work:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/page.tsx - Server Component by default
async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <main>
            <h1>Latest Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}

// Force client component with 'use client'
'use client'
function BlogPost({ post }) {
    const [likes, setLikes] = useState(0);
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => setLikes(l => l + 1)}>
                Likes: {likes}
            </button>
        </article>
    );
}</code>
            </div>

            <h2>2. The App Router</h2>
            <p>Next.js 13 introduces a new file-system based router built on Server Components. This new routing system provides better performance and simpler routing patterns.</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-plaintext">
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── layout.tsx  # Blog layout
│   ├── page.tsx    # Blog index
│   └── [slug]/
│       └── page.tsx # Individual blog post
└── api/
    └── posts/
        └── route.ts # API routes</code>
            </div>

            <h2>3. Data Fetching Patterns</h2>
            <p>Server Components enable new patterns for data fetching that are more efficient and easier to implement:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/blog/[slug]/page.tsx
async function BlogPost({ params }) {
    // Fetch data directly in Server Component
    const post = await fetch(
        \`https://api.example.com/posts/\${params.slug}\`,
        { cache: 'force-cache' } // Default caching
    ).then(r => r.json());

    return (
        <article>
            <h1>{post.title}</h1>
            <Content>{post.content}</Content>
        </article>
    );
}

// Parallel data fetching
async function Dashboard() {
    const [user, posts, analytics] = await Promise.all([
        getUser(),
        getPosts(),
        getAnalytics()
    ]);

    return (
        <main>
            <UserProfile user={user} />
            <RecentPosts posts={posts} />
            <AnalyticsDashboard data={analytics} />
        </main>
    );
}</code>
            </div>

            <h2>4. Streaming and Suspense</h2>
            <p>Next.js 13 supports streaming and Suspense boundaries for improved loading states. This allows you to progressively render content and show loading states for specific components:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import { Suspense } from 'react';

function BlogPage() {
    return (
        <main>
            <h1>My Blog</h1>
            
            {/* Show immediately */}
            <BlogHeader />
            
            {/* Stream in with loading state */}
            <Suspense fallback={<PostsSkeleton />}>
                <Posts />
            </Suspense>
            
            {/* Stream in after Posts */}
            <Suspense fallback={<CommentsSkeleton />}>
                <Comments />
            </Suspense>
        </main>
    );
}</code>
            </div>

            <h2>5. Static and Dynamic Rendering</h2>
            <p>Server Components support both static and dynamic rendering, giving you flexibility in how your content is served:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Static by default
export default async function Page() {
    const posts = await getPosts();
    return <PostList posts={posts} />;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export default async function Page() {
    const data = await getData();
    return <Dashboard data={data} />;
}

// Revalidate on a schedule
export const revalidate = 3600; // Every hour</code>
            </div>

            <h2>6. Error Handling</h2>
            <p>Next.js 13 provides a robust error handling system with error boundaries and recovery mechanisms:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// app/error.tsx
'use client'

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="error-container">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

// app/posts/error.tsx
'use client'

export default function PostError() {
    return (
        <div className="post-error">
            <h2>Error Loading Posts</h2>
            <p>Please try again later</p>
        </div>
    );
}</code>
            </div>

            <h2>7. Advanced Features</h2>
            <p>Next.js 13 includes several advanced features that enhance development:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
// Middleware for authentication
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

// Route Handlers
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const data = await request.json();
    const newPost = await createPost(data);
    return NextResponse.json(newPost, { status: 201 });
}</code>
            </div>

            <h2>8. Image Optimization</h2>
            <p>Next.js provides built-in image optimization with the Image component:</p>

            <div class="code-block">
                <button class="copy-button"><i class="far fa-copy"></i> Copy</button>
                <code class="language-javascript">
import Image from 'next/image';

function BlogHeader() {
    return (
        <div className="blog-header">
            <Image
                src="/hero.jpg"
                alt="Blog Hero"
                width={1200}
                height={600}
                priority
                className="hero-image"
            />
        </div>
    );
}</code>
            </div>

            <h2>Best Practices</h2>
            <ul>
                <li>Keep components server-side by default</li>
                <li>Use client components only when needed (interactivity, browser APIs)</li>
                <li>Implement proper loading and error states</li>
                <li>Utilize parallel data fetching</li>
                <li>Implement proper caching strategies</li>
                <li>Use Image component for optimized images</li>
                <li>Implement proper error boundaries</li>
                <li>Use TypeScript for better type safety</li>
            </ul>

            <h2>Performance Optimization</h2>
            <ul>
                <li>Use proper image optimization with next/image</li>
                <li>Implement proper caching strategies</li>
                <li>Utilize streaming for better UX</li>
                <li>Keep client-side JavaScript minimal</li>
                <li>Use proper code splitting</li>
                <li>Implement proper lazy loading</li>
                <li>Use proper font optimization</li>
                <li>Implement proper meta tags for SEO</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Next.js 13's Server Components represent a significant advancement in React development. By leveraging server-side rendering capabilities while maintaining the flexibility of client-side interactivity, developers can build faster, more efficient applications with improved user experiences.</p>

            <p>The combination of Server Components, the new App Router, and features like streaming and Suspense boundaries makes Next.js 13 a powerful framework for building modern web applications. By following the best practices and patterns outlined in this guide, you can create performant, scalable, and maintainable applications.</p>
        `
    }
];

// Function to display blog posts on the home page
function displayBlogPosts(posts = blogPosts) {
    const blogContainer = document.getElementById('blogContainer');
    if (!blogContainer) return;

    if (posts.length === 0) {
        blogContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>No blog posts found matching your search.</p>
            </div>
        `;
        return;
    }

    blogContainer.innerHTML = posts.map(post => `
        <div class="blog-card" data-aos="fade-up">
            <a href="blog-details.html?id=${post.id}" class="blog-image-container">
                <img src="${post.image}" alt="${post.title}" class="blog-image">
                <div class="image-overlay">
                    <span class="view-post">View Post</span>
                </div>
            </a>
            <div class="blog-content">
                <a href="blog-details.html?id=${post.id}" class="blog-title-link">
                    <h3 class="blog-title">${post.title}</h3>
                </a>
                <div class="blog-date">
                    <i class="far fa-calendar-alt"></i> ${post.date}
                </div>
                <p class="blog-preview">${post.preview.substring(0, 150)}${post.preview.length > 150 ? '...' : ''}</p>
                <div class="blog-footer">
                    <a href="blog-details.html?id=${post.id}" class="read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to display single blog post on the details page
function displayBlogPost() {
    const blogContent = document.getElementById('blogContent');
    if (!blogContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        document.title = `${post.title} - Code with Panda`;
        
        blogContent.innerHTML = `
            <div class="blog-details-header">
                <h1 class="blog-details-title">${post.title}</h1>
                <div class="blog-details-date">
                    <i class="far fa-calendar-alt"></i> ${post.date}
                </div>
            </div>
            <img src="${post.image}" alt="${post.title}" class="blog-details-image">
            <div class="blog-details-content">
                ${post.content}
            </div>
        `;

        // Add back button
        const backButton = document.createElement('a');
        backButton.href = 'index.html#blog';
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Blogs';
        document.body.appendChild(backButton);

        // Add copy functionality to code blocks
        const codeBlocks = document.querySelectorAll('.code-block');
        codeBlocks.forEach(block => {
            const copyButton = block.querySelector('.copy-button');
            const codeContent = block.querySelector('code');

            copyButton.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(codeContent.textContent);
                    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    copyButton.classList.add('copied');
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
                        copyButton.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            });
        });

        // Initialize syntax highlighting
        if (window.Prism) {
            Prism.highlightAll();
        }
    } else {
        blogContent.innerHTML = `
            <div class="blog-details-header">
                <h1 class="blog-details-title">Blog post not found</h1>
                <a href="index.html#blog" class="back-button">
                    <i class="fas fa-arrow-left"></i> Back to Blogs
                </a>
            </div>
        `;
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('blogSearch');
    const searchButton = document.getElementById('searchButton');

    if (!searchInput || !searchButton) return;

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.preview.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm)
        );
        displayBlogPosts(filteredPosts);
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('blog-details.html')) {
        displayBlogPost();
    } else {
        displayBlogPosts();
        initializeSearch();
    }
});
