1. Project Overview

Customer Support Zone is a React-based web application designed to manage customer tickets efficiently. It allows users to track ticket progress, move tasks to completion, and dynamically update ticket statistics.

The project follows a Figma design and includes additional features such as task management logic, toast notifications, and full responsiveness.

#Technologies Used

i)React.js (Mandatory)
ii) JavaScript (ES6)
iii) Tailwind CSS
iv) DaisyUI
v) React-Toastify
vi) HTML5
vii) CSS3

#Features

# Navbar

- Website logo/name on the left
- Navigation menu items on the right
- “New Ticket” button

# Banner Section

- Linear gradient background
- Displays:
  - In Progress Ticket Count
  - Resolved Ticket Count (default 0)

#Customer Tickets Section

- 10–15 tickets created using JSON data
- Each ticket includes:
  - id
  - title
  - description
  - customer
  - priority
  - status
  - createdAt

- Tickets displayed in a 2-column responsive grid layout

# Task Status Section

- Clicking a ticket adds it to the Task Status panel
- Shows toast notification
- Increases In Progress count

#Task Completion Logic (Challenge Requirement)

When clicking the Complete button:

- Ticket is removed from Task Status
- Ticket is added to Resolved List
- In Progress count decreases
- Resolved count increases
- Ticket is removed from Customer Tickets list
- Toast notification appears

# Footer

- Designed according to Figma
- Includes company information and links

# Responsiveness

- Fully responsive layout
- Mobile-friendly design using Tailwind CSS grid system

### React-Toastify

- Replaced all alert() with stylish toast notifications

---

# React Questions & Answers

---

1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

It makes UI development easier because:

- It improves readability
- It allows writing UI structure inside JavaScript
- It helps React create elements efficiently

Example:

```jsx
const element = <h1>Hello World</h1>;
```

JSX is compiled into JavaScript using Babel before being rendered in the browser.

---

2. What is the difference between State and Props?

# State

- Managed inside a component
- Can change over time
- Used for dynamic data
- Updating state re-renders the component

Example:

```jsx
const [count, setCount] = useState(0);
```

# Props

- Passed from parent to child component
- Read-only (cannot be modified by child)
- Used to share data between components

Example:

```jsx
<Banner count={5} />
```

Difference Summary:

| State              | Props                |
| ------------------ | -------------------- |
| Managed internally | Passed from parent   |
| Mutable            | Immutable            |
| Causes re-render   | Used to display data |

3. What is the useState Hook, and how does it work?

useState is a React Hook that allows functional components to manage state.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

- state → current value
- setState → function to update value
- initialValue → starting value

When setState is called:

- React updates the state
- Component re-renders automatically

Example:

```jsx
const [count, setCount] = useState(0);
```

---

4. How can you share state between components in React?

State can be shared by:

# Lifting State Up

Move state to the nearest common parent component and pass it down using props.

Example:
App.jsx holds state and passes it to:

- TicketList
- TaskStatus
- Banner

# Context API (Advanced)

For global state management across many components.

In this project, state is shared using "Lifting State Up".

---

5. How is event handling done in React?

Event handling in React is done using camelCase syntax and passing a function.

Example:

```jsx
<button onClick={handleClick}>Click</button>
```

Rules:

- Use camelCase (onClick, onChange)
- Pass a function reference
- Can pass arguments using arrow functions

Example:

```jsx
<button onClick={() => handleAdd(ticket)}>Add</button>
```

React uses Synthetic Events for better cross-browser compatibility.
