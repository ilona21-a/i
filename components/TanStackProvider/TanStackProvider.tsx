"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProviderProps {
  children: React.ReactNode;
}

const clientInstance = new QueryClient();

const TanStackProvider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={clientInstance}>
      {children}
    </QueryClientProvider>
  );
};

export default TanStackProvider;