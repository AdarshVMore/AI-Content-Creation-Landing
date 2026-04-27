'use client'

import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className='text-slate-500 inline-flex'><a className="font-medium hover:underline text-slate-50" href="https://github.com/cruip/tailwind-landing-page-template" target="_blank" rel="noreferrer">Download<span className="hidden sm:inline"> on GitHub</span></a> <span className="italic px-1.5">or</span> <a className="font-medium hover:underline text-emerald-400" href="https://cruip.com/simple/" target="_blank" rel="noreferrer">Check Premium Version</a></div>
            
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                
            </button>
          </div>
        </div>
      )}
    </>
  )
}
