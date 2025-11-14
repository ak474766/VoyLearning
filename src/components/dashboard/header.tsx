'use client';
import { useUser } from '@/firebase';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/auth/user-nav';
import { Skeleton } from '../ui/skeleton';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Breadcrumb = {
  label: string;
  href?: string;
};

type DashboardHeaderProps = {
  title?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function DashboardHeader({ title, breadcrumbs }: DashboardHeaderProps) {
  const { user, isUserLoading } = useUser();

  const renderTitle = () => {
    if (isUserLoading) {
      return <Skeleton className="h-8 w-64" />;
    }
    
    if(breadcrumbs && breadcrumbs.length > 0) {
      return (
         <div className="flex items-center text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-foreground">{crumb.label}</Link>
              ) : (
                <span className="font-medium text-foreground">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 mx-1" />}
            </div>
          ))}
        </div>
      )
    }

    if (user) {
      return (
        <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
          Welcome, {user.displayName || user.email}! 👋
        </h1>
      );
    }
    return <Skeleton className="h-8 w-64" />;
  };
  
  const renderSubTitle = () => {
    if(title && !isUserLoading) {
       return <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
    }
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <SidebarTrigger className="mr-2 md:hidden" />
        <div className="flex-1 flex flex-col justify-center">
          {renderTitle()}
          {renderSubTitle()}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
