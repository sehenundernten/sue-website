"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function KontaktPage() {
  const [copied, setCopied] = useState(false);
  const email = "mail@sehenundernten.org";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fehler beim Kopieren:", err);
    }
  };

  return (
    <main className="min-h-screen bg-brand-beige">
      <div className="container mx-auto px-4 xl:px-0 pt-48 pb-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl xl:text-6xl font-bold text-brand-blue mb-6">
              Kontakt
            </h1>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Du hast Fragen oder möchtest mehr über uns erfahren? Wir freuen
              uns darauf, von dir zu hören!
            </p>
          </div>

          {/* Kontakt Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Adresse */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-brand-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">
                      Adresse
                    </h3>
                    <p className="text-lg text-brand-gray">
                      Mathildenstraße 10
                    </p>
                    <p className="text-lg text-brand-gray">12459 Berlin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* E-Mail */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-brand-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">
                      E-Mail
                    </h3>
                    <p className="text-lg text-brand-gray mb-4">{email}</p>
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      size="default"
                      className="w-full"
                    >
                      {copied ? (
                        <div className="flex flex-row justify-center items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Kopiert!
                        </div>
                      ) : (
                        <div className="flex flex-row justify-center items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          E-Mail kopieren
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center flex flex-col gap-6">
                <div className="flex justify-center gap-8">
                  <Link
                    href="https://www.instagram.com/sehenundernten/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-brand-blue hover:bg-brand-blue/60 transition-colors"
                    aria-label="Instagram Profil öffnen"
                  >
                    <Image
                      src="/instagram-logo.svg"
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/sehen-und-ernten/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-brand-blue hover:bg-brand-blue/60 transition-colors"
                    aria-label="LinkedIn Profil öffnen"
                  >
                    <Image
                      src="/linkedin-logo.svg"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </Link>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-6">
                  Folge uns auf Instagram und LinkedIn
                </h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
