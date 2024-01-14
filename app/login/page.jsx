"use client";

import React, { useEffect, useState } from 'react'
import { Auth } from '@supabase/auth-ui-react';
import { supabaseClient } from '@/lib/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (user) {
    router.push("/contentghool");
    return <p>Laden ..</p>
  }

  if (loading) {
    return <p>Laden ..</p>
  }

  return (
    <div className='h-[calc(100vh-80px)] flex items-center justify-center'>
        <div className='mt-10 md:mt-0 md:w-8/12 mx-auto'>
        
        <div className='mx-auto' style={{ width: 'fit-content' }}>
          <Image
            className='z-10'
            src="/images/stradminlogo.png"
            width={300}
            height={300}
          />
        </div>
            <h1 className='text-2xl'>Login</h1>
            <Auth 
                localization={{
                    variables: {
                        sign_up: {
                            email_label: "Deine E-Mail-Adresse eingeben",
                            password_label: "Dein Passwort eingeben",
                            button_label: "Registrieren",
                            email_input_placeholder: "Deine E-Mail-Adresse",
                            password_input_placeholder: "Dein sicheres Passwort",
                            link_text: "Kein Account? Jetzt registrieren",
                            social_provider_text: "Einloggen mit",
                        },
                        sign_in: {
                            social_provider_text: "Einloggen mit",
                            email_label: "Deine E-Mail-Adresse eingeben",
                            password_label: "Dein Passwort eingeben",
                            button_label: "Einloggen",
                            email_input_placeholder: "Deine E-Mail-Adresse",
                            password_input_placeholder: "Dein sicheres Passwort",
                            link_text: "Hast Du bereits einen Account? Jetzt einloggen",
                        },
                        forgotten_password: {
                            link_text: "Passwort vergessen?",
                            password_label: "Passwort eingeben",
                            email_input_placeholder: "Deine E-Mail-Adresse",
                            email_label: "Deine E-Mail-Adresse eingeben",
                            button_label: 
                                "Anweisungen zum Zurücksetzen des Passworts senden",
                        },
                    }
                }}
                providers={["google"]}
                appearance={{
                    theme: ThemeSupa,
                    style: {
                        background: "#f17833",
                        color: "white",
                        border: "none"
                    },
                    input: {
                        color: "#f17833",
                    }
                }}
                supabaseClient={supabaseClient}
            />
        </div>
    </div>
  )
}

export default page