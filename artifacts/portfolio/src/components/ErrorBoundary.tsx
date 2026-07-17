import React, { Component, ErrorInfo, ReactNode } from "react";
import { Terminal } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground p-6">
          <div className="max-w-md w-full border border-border bg-card p-8 shadow-2xl">
            <div className="w-12 h-12 bg-destructive/10 text-destructive flex items-center justify-center mb-6">
              <Terminal size={24} />
            </div>
            <h1 className="text-2xl font-bold mb-4 font-mono tracking-tight">SYSTEM_FAILURE</h1>
            <p className="text-muted-foreground mb-6 text-sm">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            <div className="p-4 bg-muted text-xs font-mono mb-8 overflow-x-auto text-muted-foreground border border-border">
              {this.state.error?.message || "Unknown error occurred"}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-foreground text-background font-medium hover:bg-primary transition-colors text-sm"
            >
              REBOOT SYSTEM
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
