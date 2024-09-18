"use client";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import LocaleSwitcher from "../../components/LocaleSwitcher/LocaleSwitcher";
import "../../app/style.css";
import { Provider, useSelector } from "react-redux";
 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});
// type Props = {
//   params: { locale: string };
// };

// export default function IndexPage({ params: { locale } }: Props) {
export default function IndexPage() {
  // Enable static rendering

  // unstable_setRequestLocale(locale);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
        <LocaleSwitcher />
      {/* </Provider> */}
    </QueryClientProvider>
  );
}
