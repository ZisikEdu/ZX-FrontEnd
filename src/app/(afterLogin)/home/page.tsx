import BookMark from '@/components/BookMark';
import BookShelf from '@/components/BookShelf';

export default function HomePage() {
  return (
    <main className="w-[920px] m-auto h-dvh flex flex-col p-4  gap-4">
      <h1>Home</h1>
      <BookShelf />
      <BookMark />
    </main>
  );
}
