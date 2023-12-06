import React, { Component } from 'react';

// ErrorBoundary component
export default class OfflineErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please check your internet connection and try again.</p>
        </div>
      );
    }

    // If no error, render the children components
    return this.props.children;
  }
}

// Your application component wrapped with OfflineErrorBoundary
const App = () => {
  return (
    <OfflineErrorBoundary>
      {/* Your entire application components go here */}
      {/* For example, include your navigation, routes, etc. */}
      {/* You can also nest additional ErrorBoundaries for specific parts of your app */}
      <Router>
        {/* Your routes and components */}
      </Router>
    </OfflineErrorBoundary>
  );
};

