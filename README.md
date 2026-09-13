# Dev Stack Builder

A responsive React app where developers explore popular frontend, backend, database, language, and DevOps technologies, and build a personalized tech stack by adding and removing items from a live sidebar.

## Built With

- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS 3 + DaisyUI
- react-toastify
- JSON (local dataset, loaded via fetch)

## Features

1. **Interactive stack builder** - add any technology with one click; duplicate attempts are blocked with a warning toast, and the button switches to "Added to Stack".
2. **Toast feedback on every action** - add, duplicate, remove, and remove all each show a distinct toast.
3. **Data-driven, responsive UI** - technology data loads asynchronously from a JSON file with a loading state, and the layout adapts from mobile to desktop.

## Getting Started

```bash
git clone https://github.com/Maruf-183/dev-stack-builder.git
cd dev-stack-builder
npm install
npm run dev
```


## React Concepts - Q&A

**1. What is JSX, and why is it used in React?**

JSX lets us write HTML-like markup directly inside JavaScript. React uses it because describing UI this way is more readable than calling `React.createElement()` by hand.

**2. What is the difference between props and state?**

Props are values a component receives from its parent and cannot change itself. State is data a component owns and updates, and updating it triggers a re-render.

**3. What does the useState hook do, and where did you use it here?**

`useState` gives a component memory that persists between renders. It is used in `App.jsx` for technologies, stack, and loading, and in `Navbar.jsx` for the mobile menu state.

**4. What does the useEffect hook do, and why was it needed to load the JSON?**

`useEffect` runs code after a component renders, which is appropriate for side effects like network requests. In `App.jsx`, it fetches the technology JSON once when the app loads.

**5. Why does every item in a .map() list need a unique key prop?**

The `key` lets React distinguish list items across re-renders, so it knows which item was added, removed, or changed.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering shows different UI based on a condition. `StackSidebar.jsx` shows an empty-state message when `stack.length === 0`, otherwise it renders the selected technologies.

**7. How do you pass data from a parent to a child, and how does a child send something back?**

The parent passes data down as props, such as `tech` and `isAdded` into `TechCard`. To send information back up, the parent passes a function like `onAdd`, which the child calls with the relevant data.
