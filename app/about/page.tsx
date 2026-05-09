import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-[#92f7c3] text-[#00734d] rounded-full text-xs font-semibold tracking-wide uppercase">
              Our Philosophy
            </span>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#004d67]">
              Building the future with Earth &amp; Anchor.
            </h1>
            <p className="text-lg text-[#3f484d] max-w-xl">
              At BASETON MOORE LTD, we believe that structural integrity and
              ecological responsibility are not mutually exclusive. Our mission
              is to redefine construction by grounding every project in
              sustainable practices and uncompromising quality.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#92f7c3]/20 rounded-xl blur-2xl group-hover:bg-[#92f7c3]/30 transition-all"></div>
            <img
              alt="Sustainable Construction Site"
              className="relative rounded-xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpFgcs7y9bgVeTjqMpx85rm5XaEUhROKXgpsv3nURH4ruuA2soei9z18RzmUmLqTQW2ylwBIOWhRa1rnq-CtpX8JWbPpEKP2feur0KqMDz4EynN4XMmsB_QyKpenukV7n517QOQWZTDRAd869r8GspIfyMEUmo2NinZYYB8ySCmUmw0Oll8k_zLxGSQ2iCwgX9ak3cUpmKzNuOU6r-59sXW9wMhq6IkMfOo_FslgLyJPs9-q4Z7qPrLAaOhVbroOCESSq7WIfOEKVn"
            />
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="mb-12 text-center">
          <h2 className="font-['Manrope'] text-3xl md:text-4xl font-semibold text-[#1d1b18] mb-2">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-[#006c48] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Eco-Innovation Card */}
          <div className="bg-[#f9f2ec] p-6 rounded-xl shadow-sm border border-[#bfc8ce]/30 flex flex-col gap-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#92f7c3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#00734d]">eco</span>
            </div>
            <h3 className="font-['Manrope'] text-2xl font-semibold text-[#006c48]">
              Eco-Innovation
            </h3>
            <p className="text-[#3f484d]">
              We utilize low-carbon concrete and sustainable timber to minimize
              our environmental footprint without sacrificing strength.
            </p>
          </div>

          {/* Integrity Card - spans row (md:row-span-2) */}
          <div className="md:row-span-2 bg-[#c1e8ff] p-6 rounded-xl shadow-xl flex flex-col justify-between text-[#001e2b]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">anchor</span>
              </div>
              <h3 className="font-['Manrope'] text-3xl md:text-4xl font-bold">
                Unyielding Integrity
              </h3>
              <p className="opacity-90">
                Honesty is the foundation of every structure we build. Our
                clients trust us for transparent communication and impeccable
                safety standards from groundbreaking to completion.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#c1e8ff] bg-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaCDBnmHkjGyx5I48sltrGUZ-e-M3JscldFjw4Ifoy5suecL-enTgz0spW75Jqj-LLFPiCEir8PiUQ8RJG0bkCUhVev0gJxsNBWozOnLCw3B9Uf9OfNQDFx_IpJcUGqwZWEdFXfNMnpC9C5Q-83UES4crRsaYDACeN2MYoK-kiDEoFs-cqhxWCvNJRWV9-p4ebcovsz1LitaUDyQLyU_OMeGKll6q2hOyLmiU5glnZyZwqbHYxviaNDt33-Pb75USNh7zlsJGsUN7y"
                    alt="Team member"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#c1e8ff] bg-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNB-z-rNZM0mLYymQImBICGFKWRxF8Hefo6nCZ8F2rtNDGnNGejpuELvLILS6KeqYJhKKO-aVF4DnSEWCyMkc_DD02tTVDAhxV2AJNkY5PAC479fn1zPAR7ctbmpKTHH30KIpl-k265KEBd4SHJGX_z0rtg832SHPSciybtkV0wxUYcLzWrEaOu27fSE3th9zPnRsm-A15W9cdP748B5YXW-oUsuNAKA4hY1_r1TgoyaH6-Sm0c2pIj0wIIj2sy9tZt_IMz5Tqj_L"
                    alt="Team member"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#c1e8ff] bg-white flex items-center justify-center text-xs font-bold text-[#006485]">
                  +24
                </div>
              </div>
              <p className="text-xs font-semibold tracking-wide mt-2">
                Led by industry veterans
              </p>
            </div>
          </div>

          {/* Quality Card */}
          <div className="bg-[#f9f2ec] p-6 rounded-xl shadow-sm border border-[#bfc8ce]/30 flex flex-col gap-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#787661]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#5f5d4a]">
                precision_manufacturing
              </span>
            </div>
            <h3 className="font-['Manrope'] text-2xl font-semibold text-[#5f5d4a]">
              Meticulous Quality
            </h3>
            <p className="text-[#3f484d]">
              Precision is our hallmark. Every joint, beam, and finish is
              inspected to exceed the highest industrial standards.
            </p>
          </div>

          {/* History Card - spans 2 columns on md */}
          <div className="md:col-span-2 bg-[#e8e1db] p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
            <div className="space-y-4 flex-1">
              <h3 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                Our History
              </h3>
              <p className="text-[#3f484d]">
                Founded in 1994, BASETON MOORE LTD began as a small family
                masonry firm. Over three decades, we have evolved into a leader
                in sustainable commercial construction, blending traditional
                craftsmanship with futuristic green tech.
              </p>
            </div>
            <div className="w-full md:w-48 h-32 rounded-lg bg-[#e8e1db] flex items-center justify-center border border-[#bfc8ce] overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEbnzTGuY3PPIM0QMtGP1LrCn1JN58ceV7zg5L_H7OtC--oHiA725WsCtZR429XZvzpkQ1hNwPQ8FULwV6HtiWV42lrc02ujSes6Pj4J0BqD3oIT854ZEPHK-55OPfEfEnzkXY2O7URp9aY2AoOgKKIc9Ufa_vIZlR2ZIxZmLx_qBze1xmJwRilg0ul_tn1KlLKAkG8h7ExXVfTAulGyb3tj9x9BSTGzuszLOXaB1-PklZ8abwUDkwa9nGX8JTkBQDHHh3VSb5WXqK"
                alt="Company heritage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#fff8f2] rounded-2xl p-8 md:p-12 border border-[#006c48]/10 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#92f7c3]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#c1e8ff]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-semibold text-[#006485]">
              A Mission for Generations
            </h2>
            <p className="text-lg text-[#3f484d] italic">
              "To build spaces that don't just occupy the land, but honor it.
              We anchor our structures in reliability and nourish our
              communities with sustainable growth."
            </p>
            <div>
              <Link href="/services" className="bg-[#006c48] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all inline-flex items-center gap-2 mx-auto">
                View Our Services
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}