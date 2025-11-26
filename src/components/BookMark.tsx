'use client';

import { BookmarkIcon, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

import ProgressCard from './ProgressCard';

const Data = {
  title: '사피엔스',
  author: '유발 하라리',
  genre: '인문/역사',
  page: 300,
  read: 252,
};

export default function BookMark() {
  //TODO - fetch data
  const { title, author, genre, page, read } = Data;
  const progress = (read / page) * 100;

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardDescription className="flex items-center gap-2">
          <BookmarkIcon className="w-[14px]" />
          <span>책갈피</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className="text-primary text-2xl mb-2 font-bold">{title}</div>
          <div className="text-muted-foreground text-sm mb-4">
            {author} · {genre}
          </div>
        </div>
        <ProgressCard className="mb-6" description={`${read}/${page}`} value={progress} />
      </CardContent>
      <CardFooter>
        <Button variant="highlight" className="w-full py-6 text-primary-foreground">
          <Play fill="currentColor" />
          <span>계속읽기</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
