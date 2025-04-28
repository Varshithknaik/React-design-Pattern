import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import TopQuotes from "./components/top-quotes";
// import SearchMeal from "./components/search-meals";
// import Users from "./components/users";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Users /> */}

      {/* <SearchMeal /> */}

      <QueryClientProvider client={queryClient}>
        <TopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
