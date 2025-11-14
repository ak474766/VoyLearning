'use client';

import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { BookOpen, Home, FolderGit2, Bot, FileText, Code } from 'lucide-react';
import Link from 'next/link';

export default function DashboardSidebar() {
  const pathname = usePathname();

  const courses = [
    { name: 'ATA', icon: <Bot />, href: '/dashboard/ata' },
    { name: 'BDA', icon: <FolderGit2 />, href: '/dashboard/bda' },
    { name: 'FSP', icon: <Code />, href: '/dashboard/fsp' },
    { name: 'LANA', icon: <FileText />, href: '/dashboard/lana' },
  ]
  
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <SidebarTrigger className="flex md:hidden" />
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
            VoyLearning
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/dashboard'} tooltip="Home">
              <Link href="/dashboard">
                <Home />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {courses.map((course) => (
             <SidebarMenuItem key={course.name}>
             <SidebarMenuButton asChild isActive={pathname.startsWith(course.href)} tooltip={course.name}>
               <Link href={course.href}>
                 {course.icon}
                 <span>{course.name}</span>
               </Link>
             </SidebarMenuButton>
           </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
