import { SessionProvider } from 'next-auth/react';

import ReactQueryProvider from '@/components/ReactQueryProvider';
import SidebarLayout from '@/layouts/SidebarLayout';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <SidebarLayout>{children}</SidebarLayout>
      </ReactQueryProvider>
    </SessionProvider>
  );
}
