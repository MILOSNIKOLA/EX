'use client'

interface PoseItemProps {
  nameFr: string
  nameSanskrit?: string
  instruction?: string
  isActive?: boolean
  isCompleted?: boolean
}

export default function PoseItem({
  nameFr,
  nameSanskrit,
  instruction,
  isActive = false,
  isCompleted = false,
}: PoseItemProps) {
  return (
    <div
      className={`p-4 rounded-xl border transition-all duration-300 ${
        isActive
          ? 'bg-yoga-primary/10 border-yoga-primary'
          : isCompleted
            ? 'bg-slate-50 border-slate-200'
            : 'bg-white border-slate-100'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`font-display font-semibold ${
            isActive ? 'text-yoga-primary' : isCompleted ? 'text-yoga-text-light' : 'text-yoga-text'
          }`}>
            {nameFr}
          </h3>
          {nameSanskrit && (
            <p className="text-sm text-yoga-text-light italic">
              {nameSanskrit}
            </p>
          )}
        </div>
        
        {isCompleted && (
          <span className="w-6 h-6 rounded-full bg-yoga-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>
      
      {instruction && (
        <p className={`mt-2 text-sm ${
          isActive ? 'text-yoga-text' : 'text-yoga-text-light'
        }`}>
          {instruction}
        </p>
      )}
    </div>
  )
}
