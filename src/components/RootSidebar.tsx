'use client';

import { BookOpen, Bot, ChevronRight, FileText, Home, Settings } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './ui/sidebar';

const items = [
  {
    title: '대시보드',
    url: '/',
    icon: Home,
  },
  {
    title: '서재',
    url: '/library',
    icon: BookOpen,
  },
  { title: '독후감', url: '#', icon: FileText },
  { title: '사서', url: '#', icon: Bot },
];

export default function RootSidebar() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <ChevronRight
            className={cn([open ? 'rotate-180' : '', 'transition-transform duration-300'])}
          />
        </Button>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="p-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings />
                <span>설정</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
