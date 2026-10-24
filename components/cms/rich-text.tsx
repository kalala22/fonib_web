import React from 'react'
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'

interface RichTextProps {
  content?: any
  className?: string
}

export function RichText({ content, className }: RichTextProps) {
  if (!content) return null

  return (
    <div
      className={cn(
        'max-w-none text-fonib-ink/80 leading-relaxed font-sans text-base sm:text-lg',
        '[&>p]:mb-5 [&>p]:leading-relaxed',
        '[&>h1]:font-display [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-fonib-ink [&>h1]:mt-8 [&>h1]:mb-4 sm:[&>h1]:text-4xl',
        '[&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-fonib-ink [&>h2]:mt-8 [&>h2]:mb-4 sm:[&>h2]:text-3xl',
        '[&>h3]:font-display [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-fonib-ink [&>h3]:mt-6 [&>h3]:mb-3 sm:[&>h3]:text-2xl',
        '[&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:mb-2',
        '[&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol>li]:mb-2',
        '[&>blockquote]:border-l-4 [&>blockquote]:border-fonib-orange [&>blockquote]:pl-5 [&>blockquote]:py-1 [&>blockquote]:italic [&>blockquote]:my-6 [&>blockquote]:text-fonib-ink/90 [&>blockquote]:bg-fonib-cream/50 [&>blockquote]:rounded-r-xl',
        '[&_a]:text-fonib-orange [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-fonib-ink transition-colors',
        '[&_img]:rounded-3xl [&_img]:my-8 [&_img]:shadow-md',
        className,
      )}
    >
      <LexicalRichText data={content} />
    </div>
  )
}

