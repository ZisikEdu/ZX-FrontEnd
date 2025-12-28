import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

export default function SearchField() {
  return (
    <div
      className={cn([
        'group/search flex items-center gap-4',
        'bg-background-primary w-4/5 px-4 py-2',
        'border-border-secondary rounded-full border',
        'outline-border-brand-tertiary',
        'hover:bg-background-primary-hover',
        'focus-within:border-border-brand-tertiary focus-within:outline',
        'transition-all',
      ])}
    >
      <label htmlFor="search">
        <SearchIcon
          className="stroke-icon-primary group-focus-within/search:stroke-icon-brand-secondary"
          size={18}
        />
      </label>
      <input
        id="search"
        className={cn([
          'w-full',
          'text-text-neutral-tertiary',
          'hover:placeholder:text-text-tertiary',
          'focus-visible:outline-0 focus-visible:placeholder:opacity-0',
        ])}
        placeholder="책 제목, 저자, 장르 검색"
      />
    </div>
  );
}
