import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Nguyen",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    quote:
      "I built our internal automations with zero DevOps friction. The visual editor is intuitive and powerful.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      "We replaced 5 different tools with this one. One workflow builder to rule them all.",
  },
  {
    name: "Hasan Demir",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "No more custom cron scripts or Zapier limits — this changed how we automate infrastructure events.",
  },
  {
    name: "Leila Okafor",
    role: "AI Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "LLM integration took literally 5 minutes. It just works — Gemini, OpenAI, everything.",
  },
  {
    name: "Oğuz Kılıç",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    quote:
      "I used to hate no-code tools, but this one actually lets me drop into code. Best of both worlds.",
  },
  {
    name: "Julie Tran",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "We ship backend features 10x faster now. This platform is our team’s secret weapon.",
  },
  {
    name: "David Park",
    role: "CTO, Fintech Startup",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    quote:
      "Built KYC verification, email workflows, and Stripe notifications — all in one place.",
  },
  {
    name: "Sarah Meijer",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "I’m not a dev, but I build workflows that sync dashboards, email teams, and trigger reports. I love this!",
  },
  {
    name: "Yusuf Arslan",
    role: "Cloud Architect",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    quote:
      "Self-hosting + RBAC + full API access — this ticks every enterprise requirement we had.",
  },
  {
    name: "Chloe Tan",
    role: "Design Systems Lead",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "We use this for design token syncs, release notes automation, and more. Non-dev friendly, dev-loved.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "You’re not locked in. I forked nodes, added custom logic, and even deployed new triggers. Amazing.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "If GitHub Actions and Zapier had a baby — this would be it. But open-source and scalable.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              Loved by developers, trusted by teams
            </h2>
            <p className="text-body mt-6">
              Hear from those building automation, internal tools, and AI-first
              platforms — faster than ever.
            </p>
          </div>
          <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="space-y-3 *:border-none *:shadow-none"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{name}</h3>
                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>
                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
