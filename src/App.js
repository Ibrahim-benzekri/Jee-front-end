import logo from "./logo.svg";
import "./App.css";
import Main from "./Layouts/Main";
import Register from "./components/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        {/* <Main/> */}
        {/* <Register /> */}
        <Login />
      </QueryClientProvider>
    </>
  );
}

export default App;
