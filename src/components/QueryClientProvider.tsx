"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import queryClient from "../../utils/queryClient";
interface Props {
  children:React.ReactNode 
}
export default function QueryClientProviderWrapper({ children }:Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
