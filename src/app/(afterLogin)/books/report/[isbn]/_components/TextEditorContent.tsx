'use client';

import { Editor, EditorContent } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

export default function TextEditorContent({ editor }: Props) {
  return <EditorContent editor={editor} />;
}
