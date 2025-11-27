import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function RandingPage() {
  return (
    <main className="p-4">
      <h1>Randing Page</h1>
      <Button asChild>
        <Link href="/home">Dashboard</Link>
      </Button>
    </main>
  );
}
