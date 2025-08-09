import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Resume from './Pages/Resume';
import { ThemeProvider } from './context/ThemeContext';
import { Component } from 'react';
import PropTypes from 'prop-types';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<MainLayout/>}>
   <Route index element={<div></div>} />
   <Route path='/Resume' element={<Resume/>} />
</Route>
)
);

const App = () => {
return (
  <ErrorBoundary>
    <ThemeProvider>
      <RouterProvider router = {router} />
    </ThemeProvider>
  </ErrorBoundary>
)
}

export default App

