'use client';

import { useQuery } from '@tanstack/react-query';

import { BOOK_LIST_QUERY_KEY, fetchBookListProxy } from '@/lib/aladin.api';

import BookRecommended from './BookRecommended';

export default function BookRecommendedContainer() {
  const { data } = useQuery({
    queryKey: BOOK_LIST_QUERY_KEY,
    queryFn: fetchBookListProxy,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  if (!data) return null;

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
      {data?.item.map((book) => (
        <BookRecommended key={book.isbn13} book={book} />
      ))}
    </div>
  );
}
