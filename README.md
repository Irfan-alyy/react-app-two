# React Blog Project

This is a **React Blog App** that utilizes **React Router** for navigation and **Redux** for state management. The project supports dynamic routing, a persistent layout, and a 404 page for incorrect paths.

## Features
- **React Router**
  - Implemented using both `Routes` and `createBrowserRouter`
  - Dynamic routing for viewing individual blogs by ID
  - A `Page Not Found` component for incorrect paths
- **Redux for State Management**
  - Stores and manages blog data in a centralized Redux store
- **Persistent Layout**
  - Common layout components visible across all pages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-blog-app.git
   cd react-blog-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage
- The homepage displays a list of blogs.
- Click on a blog to navigate to its details page (dynamic routing).
- If an incorrect URL is entered, the app redirects to the **404 Page Not Found**.
- The layout remains consistent across different pages.

## Technologies Used
- React
- React Router (`Routes` & `createBrowserRouter`)
- Redux (for global state management)
- JavaScript (ES6+)
- CSS / Tailwind CSS (for styling)

## Folder Structure
```
/react-blog-app
├── src
│   ├── components  # Reusable UI components
│   ├── assets      # Redux store, slices, and actions,  layout of entire webste
│   ├── App.js      # Main component
│   ├── index.js    # Entry point
│
├── public          # Static assets
├── package.json    # Dependencies & scripts
├── README.md       # Project documentation
```

## Contributing
Feel free to submit issues and pull requests. Contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).


