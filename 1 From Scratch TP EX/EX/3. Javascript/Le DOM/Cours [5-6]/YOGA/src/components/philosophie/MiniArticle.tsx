'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, BookOpenIcon } from '@heroicons/react/24/outline'

interface Article {
  id: string
  title: string
  readTime: number
  excerpt: string
  content: string
}

interface MiniArticleProps {
  article: Article
}

export default function MiniArticle({ article }: MiniArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-start gap-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yoga-primary/10 flex items-center justify-center">
          <BookOpenIcon className="w-6 h-6 text-yoga-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display font-semibold text-yoga-text">
              {article.title}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDownIcon className="w-5 h-5 text-slate-400" />
            </motion.div>
          </div>
          
          <p className="text-sm text-yoga-text-light">
            {article.readTime} min de lecture
          </p>
          
          {!isExpanded && (
            <p className="mt-2 text-sm text-yoga-text-light line-clamp-2">
              {article.excerpt}
            </p>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0">
              <div className="pl-16">
                <p className="text-yoga-text leading-relaxed">
                  {article.content}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
