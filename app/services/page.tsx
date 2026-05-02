export default function ServicesPage() {
  return (
    <>
      {/* Hero / Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="font-['Manrope'] text-5xl md:text-6xl font-bold tracking-tight text-[#006485] mb-6">
            Our Specialized Expertise
          </h1>
          <p className="text-lg text-[#3f484d]">
            We bridge the gap between architectural excellence and ecological
            responsibility, delivering structures that are built to last and
            designed to thrive with the environment.
          </p>
        </header>
      </div>

      {/* Services Grid (Bento Style) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sustainable Residential Building */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-[#f9f2ec] shadow-[0_4px_20px_rgba(44,125,160,0.08)] transition-all border border-[#bfc8ce]/20">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                alt="Sustainable Residential Building"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqF--gJtHa6raNt3MIMmMU9YGEgsZ6NF9IzIVyNGRrqtXdserNlbwz6jt39_L_bh4rFWk78LUH4CMR8AbBkZ5OJ18ZQIjyB7w-P5rC6ldz5cK5KKOUz1jydAEjUF-VEKPFXD9tm6QlmiXt5PmjokywlIg1m3f8sxbZBoDziR7QJ_Uk19DMoJM5cDiQ8vJauga0wbzyuDpbc_HA1bV5amzu-P9i189ejIKnh9tLuC7agk1TeqzTdod39cza1-BnUPjRn9TgImeU3Ozm"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#006c48] text-2xl [font-variation-settings:'FILL'_1]">
                  eco
                </span>
                <h2 className="font-['Manrope'] text-2xl font-semibold text-[#006485]">
                  Sustainable Residential Building
                </h2>
              </div>
              <p className="text-[#3f484d] mb-4">
                Crafting bespoke homes that utilize passive solar design,
                geothermal heating, and low-impact materials without
                compromising on luxury or structural integrity.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#006c48] hover:underline"
              >
                View Portfolio{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Right Column Split */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Eco-Friendly Commercial Spaces */}
            <div className="flex-grow rounded-xl bg-[#c1e8ff] p-6 text-[#001e2b] shadow-[0_4px_20px_rgba(44,125,160,0.08)]">
              <span className="material-symbols-outlined text-4xl mb-2 [font-variation-settings:'FILL'_0]">
                business_center
              </span>
              <h2 className="font-['Manrope'] text-2xl font-semibold mb-2">
                Eco-Friendly Commercial Spaces
              </h2>
              <p className="opacity-90">
                Scalable, carbon-neutral commercial environments designed for
                modern enterprises that prioritize employee wellness and
                environmental footprint.
              </p>
            </div>
            {/* Commercial Image */}
            <div className="h-48 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(44,125,160,0.08)]">
              <img
                alt="Modern Commercial Interior"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArOcfn-_TSpoOv-baoS3rMw227kW3pcurKrwKT-rK01D_Bf01NI85u3lsxf2ZybIVJ-cKOQaFaBWjsc3IQdUcUPJhnazzTMNMHQktC9GUrLpJ4NVniutooxUl8GVEluUYofOOZN3s1OtaPf5Lol5tvcBCAPjI50Q1KiAkjm_QrLjALu_BRvXvBU53zR7_Kzh-VRXy5UXaW_a3GzF8FwWrb8qhQpWOstZqEowWIrw6d4hRhMxN4u5H0JouBv2pD7e0jCRh-avOqFfh-"
              />
            </div>
          </div>

          {/* Green Renovations (Asymmetric Wide) */}
          <div className="md:col-span-12 group rounded-xl bg-white/50 backdrop-blur-sm border border-[#92f7c3] p-6 flex flex-col md:flex-row gap-6 items-center shadow-[0_4px_20px_rgba(44,125,160,0.08)]">
            <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
              <img
                alt="Green Renovations"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUzNV3ON4g5pN4UcuyYRZtjbAOl3ISmfmXuPABw-Y6Xl7-YIT6puxg7CWOW8fQEpwVnQcwurC_4mH2MX1AypVh49WUG2Ay88VD5cKK-ZvO5HBFryHykudqmRT3cY-YCgxmssdl9epAZq5aaZDNKQ325OJS1kBIngwprTcuQkT8NaNOkpzKEpPJgVX0IxCsyWFeZfBKfSpcIx-2gYbwKBfGUGNFasYKC7Ui43h77yAbepDPaSFdTQ69hAthO3L7xlVhwo8nHVrzx0k8"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#006c48]">
                  recycling
                </span>
                <h2 className="font-['Manrope'] text-2xl font-semibold text-[#006c48]">
                  Green Renovations
                </h2>
              </div>
              <p className="text-lg text-[#3f484d] max-w-2xl">
                Breathing new life into existing structures. We specialize in
                deep energy retrofits and material circularity, ensuring your
                historical or dated property meets tomorrow's environmental
                standards today.
              </p>
            </div>
            <button className="bg-[#006c48] text-white px-8 py-3 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-[#005235] transition-colors">
              Request a Quote
            </button>
          </div>
        </div>

        {/* Trust Badge Section */}
        <section className="mt-20 py-8 border-y border-stone-200/50 flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-['Manrope'] text-lg font-semibold">
            <span className="material-symbols-outlined">verified</span> LEED
            Platinum
          </div>
          <div className="flex items-center gap-2 font-['Manrope'] text-lg font-semibold">
            <span className="material-symbols-outlined">architecture</span> ISO
            14001
          </div>
          <div className="flex items-center gap-2 font-['Manrope'] text-lg font-semibold">
            <span className="material-symbols-outlined">nature</span> Carbon
            Neutral
          </div>
        </section>
      </div>
    </>
  );
}