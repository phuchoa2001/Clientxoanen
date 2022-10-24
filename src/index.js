import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
// import Baotri from "./compontens/baotri";
import ProvierAuth from "./compontens/admin/auth/Provider";
import createstore from "./store";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const store = createstore();
ReactDOM.render(
  <Provider store={store}>
    <ProvierAuth>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ProvierAuth>

  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
