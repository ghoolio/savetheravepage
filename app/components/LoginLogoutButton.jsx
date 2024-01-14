"use client";

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const LoginLogoutButton = () => {
  const router = useRouter();
  const session = useSession();
  const supabaseClient = useSupabaseClient();

  const signOutHandler = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.push("/");
  };
  return (
    <>
      {!session?.user ? (
        <Link
          href={`/login`}
          className='px-3 py-2 rounded-xl bg-blue-500 text-white text-sm'>
          Einloggen
        </Link>
      ) : (
        <button
          onClick={signOutHandler}
          className='px-3 py-2 rounded-xl bg-blue-500 text-white text-sm'>
          Ausloggen
        </button>
      )}
    </>
  )
}

export default LoginLogoutButton