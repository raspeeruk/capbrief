import { clsx } from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ className, padding = 'md', children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-[#FDFAF5] border border-[#D4C9B8] rounded-[2px] shadow-[0_1px_4px_rgba(28,25,23,0.08)]',
        {
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('pb-4 border-b border-[#D4C9B8]', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.04em] uppercase text-[#1C1917]', className)} {...props}>
      {children}
    </h3>
  )
}
