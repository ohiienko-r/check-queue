import { Router } from "@/Router";
import { AuthProvider } from "@/Contexts";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
