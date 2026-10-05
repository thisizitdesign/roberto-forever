import { Bell } from "lucide-react";

const eventbriteUrl =
  "https://www.eventbrite.com/e/celebration-of-life-for-roberto-riggio-tickets-2002765521588?aff=oddtdtcreator&fbclid=IwY2xjawUxFThleHRuA2FlbQIxMQBwZG9mA3NydGMGYXBwX2lkATAAAR41IjuieOR25jZe1m2_6TWysRE_wjuiZ-eYHX-kJ6gyNGCB-69j-ooRNjvyQg_aem_o-z5NPJ5qhVZ4Ue7jIrrIg&keep_tld=true";

const updates = [
  {
    date: "October 26, 2026",
    title: "Celebration of Life for Roberto Riggio",
    time: "7:00–10:00 PM",
    location: "Sahara Lounge • Austin, TX",
    body: "An evening of remembrance and celebration of Roberto's life, with family and friends sharing memories, speeches, and recordings of Roberto's music, followed by a community jam session.",
    image: new URL(
      "../images/updates/memorial-oct26-eventbrite.webp",
      import.meta.url,
    ).href,
  },
];

export default function UpdatesSection() {
  return (
    <section id="updates" className="bg-stone-900/90 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5">
              <Bell className="h-7 w-7 text-amber-200/70" />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-stone-100 sm:text-4xl">
            Memorial Updates
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
        </div>

        <div className="space-y-6">
          {updates.map((item, i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-lg border border-stone-800 bg-stone-950/60 transition-colors hover:border-amber-200/20 sm:flex-row"
            >
              {/* Image */}
              <div className="shrink-0 sm:w-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-64 w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-8">
                <time className="text-xs uppercase tracking-[0.3em] text-amber-200/60">
                  {item.date}
                </time>

                <h3 className="mt-3 font-serif text-2xl text-stone-100">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-stone-500">
                  {item.time} · {item.location}
                </p>

                <p className="mt-5 font-light leading-relaxed text-stone-400">
                  {item.body}
                </p>

                <div className="mt-6">
                  <a
                    href={eventbriteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/5 px-5 py-2.5 text-sm font-light tracking-wide text-amber-200/80 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10 hover:text-amber-100"
                  >
                    RSVP on Eventbrite
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
