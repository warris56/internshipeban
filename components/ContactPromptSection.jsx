export default function ContactPromptSection() {
    return (
      <section className="bg-[rgb(84,122,240)] text-white py-36 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Heading (centered) */}
          <div className="text-4xl md:text-5xl font-bold text-center">
            You can reach us directly for more clarification
          </div>
  
          {/* Two‑column contact area */}
          <div className="flex flex-col sm:flex-row justify-between gap-16">
            {/* Left column (WhatsApp and Call) */}
            <div className="text-2xl leading-loose space-y-6 text-left">
              <p>
                WhatsApp Us on <strong><br></br>024 497 6661</strong>
              </p>
              <p>
                Email Us On <strong><br></br>info@ebanregister.com</strong>
              </p>
            </div>
  
            {/* Right column (Email and Facebook) */}
            <div className="text-2xl leading-loose space-y-6 text-right">
              <p>
                Call us On <strong><br></br>055 582 7223 / 020 588 2762</strong>
              </p>
              
              <p>
                Reach us on Facebook:{' '}<br></br>
                <a
                  href="https://www.facebook.com/ebanregister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/80"
                >
                  https://www.facebook.com/ebanregister
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  