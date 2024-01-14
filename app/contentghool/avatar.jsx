import React from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import Image from 'next/image';

const Avatar = ({seed, large}) => {

  const session = useSession();

  return (
    <div className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'}`}>
      <Image 
        fill
        src={`https://avatars.dicebar.com/api/open-peeps/${
          session?.user?.name || 'placeholder'
        }.svg`} 
      />
    </div>
  )
}

export default Avatar