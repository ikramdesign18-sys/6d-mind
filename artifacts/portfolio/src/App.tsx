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
const Solutions = lazy(() => import("@/pages/Solutions"));
const Why6DMind = lazy(() => import("@/pages/Why6DMind"));
const WorkDetail = lazy(() => import("@/pages/WorkDetail"));
const LogoBrandIdentityCollection = lazy(
  () => import("@/pages/LogoBrandIdentityCollection"),
);
const LuminaBotanicalsCaseStudy = lazy(
  () => import("@/pages/LuminaBotanicalsCaseStudy"),
);
const OrpheviaBrandingCaseStudy = lazy(
  () => import("@/pages/OrpheviaBrandingCaseStudy"),
);
const Process = lazy(() => import("@/pages/Process"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));

const queryClient = new QueryClient();

// Page loader fallback
const PageLoader = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4 opacity-50">
      <img
        src="/brand/6d-mind/6d-mind-icon.png"
        width="650"
        height="650"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 animate-pulse object-contain motion-reduce:animate-none"
      />
      <div className="font-mono text-xs tracking-widest text-primary">
        LOADING 6D MIND
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
          <Route path="/solutions" component={Solutions} />
          <Route path="/why-6d-mind" component={Why6DMind} />
          <Route
            path="/work/graphic-design/logo-branding-collection"
            component={LogoBrandIdentityCollection}
          />
          <Route
            path="/work/graphic-design/lumina-botanicals"
            component={LuminaBotanicalsCaseStudy}
          />
          <Route
            path="/work/graphic-design/orphevia-branding"
            component={OrpheviaBrandingCaseStudy}
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
