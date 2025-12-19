'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retryOnMount: true,
            refetchOnReconnect: false,
            retry: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
    </QueryClientProvider>
  );
}
