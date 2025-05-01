import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
// import TopQuotes from "./components/top-quotes";
// import UpdateQuotes from "./components/update-quotes";
import { ToastContainer } from "react-toastify";
// import PaginatedQuotes from "./components/paginated-quotes";
// import InifinityScrollQuotes from "./components/inifinity-scroll-quotes";
import QueryCancelationWithAbortSignal from "./components/query-cancellation";
// import SearchMeal from "./components/search-meals";
// import Users from "./components/users";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Users /> */}

      {/* <SearchMeal /> */}

      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <TopQuotes />
        <UpdateQuotes /> */}
        {/* <PaginatedQuotes /> */}
        {/* <InifinityScrollQuotes /> */}
        <QueryCancelationWithAbortSignal />
      </QueryClientProvider>
    </>
  );
}

export default App;
