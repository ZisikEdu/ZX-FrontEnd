import { ArrowLeft, BookOpenIcon, FileText, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { fetchBookLookUp } from '@/lib/aladin.api';

interface Props {
  params: Promise<{ isbn: string }>;
}

export default async function BookPage({ params }: Props) {
  const { isbn } = await params;

  let book = null;
  try {
    const result = await fetchBookLookUp(isbn);
    book = Array.isArray(result) ? result[0] : result;
    console.log(book);
  } catch (error) {
    console.error(error);
  }

  if (!book) return notFound();

  return (
    <main className="mx-auto w-[920px] p-4">
      <div className="w-full">
        <Link
          href="/library"
          className="text-muted-foreground hover:text-primary flex w-fit items-center gap-1 p-2"
        >
          <ArrowLeft size={16} />
          <span>서재로 돌아가기</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[200/283] w-[320px]">
            <ImageWithFallback src={book.cover.replace('cover200', 'cover500')} alt={book.title} />
          </div>
          <Button variant="secondary" className="flex items-center gap-4" asChild>
            <Link href={book.link}>
              <ShoppingCart />
              <span>구매하기</span>
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1>
            <span>{book.title}</span>
          </h1>
          <h2>{book.author}</h2>
          <div>{book.customerReviewRank}</div>
          <p>{book.categoryName}</p>
          <div className="flex gap-4">
            <Button variant="highlight" className="grow p-6">
              <BookOpenIcon />
              <span>몰입모드</span>
            </Button>
            <Button variant="secondary" className="grow p-6">
              <FileText />
              <span>독후감</span>
            </Button>
          </div>
          <p>{book.description}</p>
        </div>
      </div>
    </main>
  );
}
