
import { Provider } from "react-redux"; // Import Provider from react-redux
import { Toaster } from "react-hot-toast";
import Router from "./Router/Router";
import { ThemeProvider } from "./components/theme-provider";
import store from "./store/Store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}> {/* Wrap Router with Provider */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
