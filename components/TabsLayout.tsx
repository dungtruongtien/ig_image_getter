'use client'

import { useState } from 'react'
import AppClient from '@/components/AppClient'
import ReelsClient from '@/components/ReelsClient'

const tabs = [
  {
    id: 'photo',
    label: 'Instagram Photo',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'reels',
    label: 'Instagram Reels',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
] as const

type TabId = typeof tabs[number]['id']

export default function TabsLayout({ siteKey }: { siteKey: string }) {
  const [active, setActive] = useState<TabId>('photo')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex max-w-md mx-auto mb-6 bg-gray-100 rounded-xl p-1 gap-1">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex flex-1 items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
              active === id
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {active === 'photo' && <AppClient siteKey={siteKey} />}
      {active === 'reels' && <ReelsClient siteKey={siteKey} />}
    </div>
  )
}
