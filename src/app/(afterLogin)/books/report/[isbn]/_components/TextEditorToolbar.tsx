'use client';

import { Editor } from '@tiptap/react';
import {
  BoldIcon,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  ItalicIcon,
  List,
  ListOrdered,
  Quote,
  Rows,
  Strikethrough,
  UnderlineIcon,
} from 'lucide-react';
import { useCallback } from 'react';

import { Button } from '@/components/ui/button';

interface Props {
  editor: Editor | null;
}

const styleActive = 'font-bold text-brand';

export default function TextEditorToolbar({ editor }: Props) {
  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (editor && url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <>
      <div className="toolbar border-primary flex items-center gap-4 border">
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? styleActive : ''
          }
        >
          <Heading1 />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? styleActive : ''
          }
        >
          <Heading2 />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? styleActive : ''
          }
        >
          <Heading3 />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? styleActive : ''}
        >
          <BoldIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? styleActive : ''}
        >
          <ItalicIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? styleActive : ''}
        >
          <Strikethrough />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? styleActive : ''}
        >
          <UnderlineIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? styleActive : ''}
        >
          <Quote size={16} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? styleActive : ''}
        >
          <List />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? styleActive : ''}
        >
          <ListOrdered />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Rows size={20} />
        </Button>
        <Button size="icon" variant="ghost" onClick={addImage}>
          <ImageIcon />
        </Button>
      </div>
    </>
  );
}
