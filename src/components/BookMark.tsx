'use client';

import { BookmarkIcon, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

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
          <div className="mb-6">
            <div className="w-full flex justify-between items-end">
              <span className="text-xs text-muted-foreground">
                {read}/{page}
              </span>
              <span className="text-brand text-sm">{progress}%</span>
            </div>
            <div className="w-full h-2 border relative">
              <div
                className="bg-brand h-full absolute left-0 top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
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
