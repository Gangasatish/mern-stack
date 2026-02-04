# Post & User Assignment

A React application demonstrating API fetching, dynamic routing, and component composition using React Router and Tailwind CSS.

## 📋 Project Overview

This assignment covers four main components:

### **Part 1: Post Component**
- Fetches posts from JSONPlaceholder API
- Displays posts in a beautiful card layout
- Shows loading state while fetching
- Error handling included
- Uses `useState` and `useEffect` hooks

### **Part 2: User Component**
- Demonstrates dynamic routing with `useParams`
- Reads URL parameters (`brand` and `product`)
- Example: `/user/apple/iphone` → displays "Apple" and "iPhone"

### **Part 3: User1 Component**
- Static component displaying "Batman"
- Simple example of component creation

### **Part 4: User2 Component**
- Static component displaying "Superman"
- Demonstrates component reusability

## 🚀 Installation & Setup

### Step 1: Install Dependencies
```bash
cd Post-User-Assignment
npm install
```

This installs:
- **React** - UI library
- **React DOM** - React rendering
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

### Step 2: Run the Development Server
```bash
npm run dev
```

The app will start at `http://localhost:5173`

## 🔗 Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Welcome page |
| `/posts` | Post | Fetch and display API posts |
| `/user/:brand/:product` | User | Dynamic route with URL parameters |
| `/user1` | User1 | Static component (Batman) |
| `/user2` | User2 | Static component (Superman) |

## 📝 Testing URLs

1. **Posts Page**: `http://localhost:5173/posts`
2. **User Search**: `http://localhost:5173/user/apple/iphone`
3. **Try other variations**: 
   - `http://localhost:5173/user/samsung/galaxy`
   - `http://localhost:5173/user/microsoft/xbox`
4. **Batman Page**: `http://localhost:5173/user1`
5. **Superman Page**: `http://localhost:5173/user2`

## 🧠 Key Concepts Learned

✅ **API Fetching** - Using fetch() to get data from external APIs
✅ **useEffect Hook** - Running side effects when component loads
✅ **useState Hook** - Managing component state
✅ **Array Mapping** - Rendering lists in JSX using .map()
✅ **Loading States** - Conditional rendering based on loading/error states
✅ **React Router** - Client-side routing and navigation
✅ **useParams Hook** - Reading URL parameters
✅ **Tailwind CSS** - Styling with utility classes
✅ **Component Composition** - Building reusable components

## 🎨 Styling

- **Dark theme** with gradient backgrounds
- **Tailwind CSS** for responsive design
- **Smooth animations** on hover
- **Loading spinner** for async operations
- **Gradient buttons** and cards

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 💡 How to Extend

You can add more features:
1. Add more routes and components
2. Create a dedicated layout component
3. Add form submissions
4. Implement filters on the posts list
5. Add pagination to posts

---

**Made with ❤️ using React & Tailwind CSS**
