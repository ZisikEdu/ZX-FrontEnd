import BookMark from '@/components/BookMark';
import PageContainer from '@/components/PageContainer';

import ProfileCard from './_components/ProfileCard';

export default function HomePage() {
  return (
    <PageContainer as="main">
      <div className="flex gap-4">
        <div className="grow">
          <ProfileCard />
        </div>
        <BookMark />
      </div>
    </PageContainer>
  );
}
