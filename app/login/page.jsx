"use client";

import React from 'react'
import { Auth } from '@supabase/auth-ui-react';
import { supabaseClient } from '@/lib/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared'

const page = () => {
  return (
    <div>
        <div className='mt-10 md:mt-0 w-full'>
            <h1 className='text-2xl'>CMP Login</h1>
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