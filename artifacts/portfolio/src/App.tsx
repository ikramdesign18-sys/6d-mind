import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { lazy, Suspense } from "react";

import Layout from "@/components/layout/Layout";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Lazy load pages for route-based code splitting
const Home = lazy(() => import("@/pages/Home"));
const ExpertiseDetail = lazy(() => import("@/pages/ExpertiseDetail"));
const Work = lazy(() => import("@/pages/Work"));
const WorkDetail = lazy(() => import("@/pages/WorkDetail"));
const LogoBrandIdentityCollection = lazy(
  () => import("@/pages/LogoBrandIdentityCollection"),
);
const Process = lazy(() => import("@/pages/Process"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));

const queryClient = new QueryClient();

// Page loader fallback
const PageLoader = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4 opacity-50">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <div className="font-mono text-xs tracking-widest text-primary">
        LOADING_MODULE
      </div>
    </div>
  </div>
);

function Router() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/expertise/:slug" component={ExpertiseDetail} />
          <Route path="/work" component={Work} />
          <Route
            path="/work/graphic-design/logo-branding-collection"
            component={LogoBrandIdentityCollection}
          />
          <Route path="/work/:slug" component={WorkDetail} />
          <Route path="/process" component={Process} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
