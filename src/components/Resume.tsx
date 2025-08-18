import React from 'react';
import { Link } from "react-router-dom";
import BackButton from "./ButtonBack";

export default function ResumePage() {
    const pdfUrl = "/cv.pdf"; // place your CV PDF in the public folder as cv.pdf
  
    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <div className="mx-auto max-w-5xl px-4 py-4">
            <Link to="/#projects">
        <BackButton/>
        </Link>
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Resume / CV
              </h1>
              <p className="text-black/70 dark:text-white/70 mt-1">
                Preview online or download the PDF.
              </p>
            </div>
          </header>
      
          <section className="mt-6">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* PDF preview */}
              <div className="relative aspect-[3/4] sm:aspect-[16/9] bg-black/5 dark:bg-white/5">
                <object
                  data={pdfUrl + "#view=FitH"}
                  type="application/pdf"
                  className="h-full w-full"
                >
                  <iframe title="CV Preview" src={pdfUrl} className="h-full w-full" />
                </object>
              </div>
      
              <div className="p-4 sm:p-6 flex items-center justify-between gap-3">
                <div className="text-sm text-black/70 dark:text-white/70">
                  If the preview doesn’t load, use the buttons above to open or
                  download the PDF.
                </div>
                <div className="flex gap-2">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-3 py-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                  >
                    Open
                  </a>
                  <a
                    href={pdfUrl}
                    download
                    className="rounded-xl px-3 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </section>
      
          {/* Contact row 
          <section className="mt-8">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4 sm:p-6">
              <h2 className="text-lg font-semibold">Need a tailored version?</h2>
              <p className="text-black/70 dark:text-white/70 mt-1">
                Request a role-specific CV or send updates via WhatsApp or email.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:you@example.com?subject=CV%20Request"
                  className="rounded-xl px-4 py-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                >
                  Email Me
                </a>
                <a
                  href="https://wa.me/6200000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-4 py-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>*/}
        </div>
      </div>
      
    );
  }
  