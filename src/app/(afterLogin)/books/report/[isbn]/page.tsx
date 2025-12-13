'use client';

import { Save } from 'lucide-react';

import Toolbar from '@/app/(afterLogin)/books/report/[isbn]/_components/TextEditorToolbar';
import PageContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';

import TextEditorContent from './_components/TextEditorContent';
import useTextEditor from './_components/useTextEditor';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Content } from '@tiptap/react';

export default function BookReportPage() {
  const { isbn } = useParams();
  const [data, setData] = useState<Content>(null);
  const { editor } = useTextEditor({ content: data });
  const [isLoading, setIsLoading] = useState(true);

  const saveRecord = async () => {
    if (!editor) return;
    const content = editor.getJSON();
    console.log(content);
    const url = '/api/books/report';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn,
          content,
        }),
      });
      const result = await response.json();
      console.log(result);
      //TODO - response success toast
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!isbn) return;
      console.log('fetching data for isbn:', isbn);
      try {
        setIsLoading(true);
        const response = await fetch(`/api/books/report?query=${isbn}`, {
          cache: 'no-store',
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const res = await response.json();
        setData(res[res.length - 1]?.content);
        console.log('fetched data:', res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isbn]);

  useEffect(() => {
    console.log('Page component data updated:', data);
  }, [data]);

  if (isLoading) {
    return (
      <PageContainer className="flex h-dvh items-center justify-center">
        <span>Loading...</span>
      </PageContainer>
    );
  }

  //TODO - 임시 저장 기능 구현
  return (
    <PageContainer className="h-dvh">
      <div className="bg-black">
        {editor && (
          <>
            <Toolbar editor={editor} />
            <TextEditorContent editor={editor} />
          </>
        )}
        <div className="bg-primary-foreground fixed right-0 bottom-0 left-0 flex p-2">
          <Button
            onClick={saveRecord}
            className="flex items-center justify-center gap-1"
          >
            <Save />
            <span>저장하기</span>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
