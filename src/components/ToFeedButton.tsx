'use client'

import { ChevronLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/Button'

const ToFeedButton = () => {
  const pathname = usePathname()

  // if path is /forum/mycom, turn into /
  // if path is /forum/mycom/post/cligad6jf0003uhest4qqkeco, turn into /forum/mycom

  const threadPath = getThreadPath(pathname)

  return (
    <a href={threadPath} className={buttonVariants({ variant: 'ghost' })}>
      <ChevronLeft className='h-4 w-4 mr-1' />
      {threadPath === '/' ? 'Back home' : 'Back to community'}
    </a>
  )
}

const getThreadPath = (pathname: string) => {
  const splitPath = pathname.split('/')

  if (splitPath.length === 3) return '/'
  else if (splitPath.length > 3) return `/${splitPath[1]}/${splitPath[2]}`
  // default path, in case pathname does not match expected format
  else return '/'
}

export default ToFeedButton
