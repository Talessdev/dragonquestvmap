import { Switch, Route, Router as WouterRouter } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import MonsterMap from "@/pages/MonsterMap";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MonsterMap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;
