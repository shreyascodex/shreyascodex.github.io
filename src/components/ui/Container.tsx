import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-6 md:px-8 max-w-6xl w-full", className)} {...props}>
      {children}
    </div>
  );
}
