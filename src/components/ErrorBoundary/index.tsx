import React, { Component, ErrorInfo } from "react";

import NotFound from "screens/NotFound";

class ErrorBoundary extends Component {
  state = {
    errorMsg: "",
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMsg: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error: ", error, info);
  }

  render() {
    if (this.state.errorMsg) return <NotFound />;
    return this.props.children;
  }
}

export default ErrorBoundary;
