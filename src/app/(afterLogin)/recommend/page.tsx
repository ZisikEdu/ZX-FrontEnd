import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { BOOK_LIST_QUERY_KEY, fetchBookListProxy } from '@/lib/aladin.api';

import BookRecommendedContainer from './_components/BookRecommendedContainer';

export default async function RecommendPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: BOOK_LIST_QUERY_KEY,
    queryFn: fetchBookListProxy,
  });

  //NOTE - PrefetchQuery 이후 사용해야 됨
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="m-auto min-h-dvh w-[920px] p-4">
      <h1>Books Recommended Page</h1>
      <HydrationBoundary state={dehydratedState}>
        <BookRecommendedContainer />
      </HydrationBoundary>
    </main>
  );
}
