
"use client"
import { ReactNode } from "react";
import "../app/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ResultContextProvider } from "./contexts/resultContext";
import ReduxProvider from "../components/ReduxProvider";
import QueryClientProviderWrapper from "../components/QueryClientProvider";



type Props = {
  children: ReactNode;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <ResultContextProvider>
            <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
            </ResultContextProvider>
        {/* <ReduxProvider>
        </ReduxProvider> */}
      </body>
    </html>
  );
}




