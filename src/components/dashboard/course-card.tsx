'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CourseCardProps = {
  acronym: string;
  title: string;
  description: string;
  color: string;
  href: string;
};

export default function CourseCard({ acronym, title, description, color, href }: CourseCardProps) {
  return (
    <Card className={cn("flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1", color)}>
      <CardHeader>
        <CardTitle className="text-4xl font-extrabold">{acronym}</CardTitle>
        <CardDescription className="font-semibold">{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          <Link href={href}>Let's See</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
