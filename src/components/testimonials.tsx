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
      "We replaced 5 different tools with this one. Instead of switching between Zapier, Slack bots, internal scripts, and cron jobs, we just built it all in one place. I can finally manage automations myself without depending on engineering every time.",
  },
  {
    name: "Hasan Demir",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "We used to maintain separate pipelines for cron-based jobs, deployment triggers, and webhook handlers. Now, it all lives in a single, visual workspace that anyone on the team can understand and iterate on. Debugging and scaling is so much easier.",
  },
  {
    name: "Leila Okafor",
    role: "AI Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "I plugged in OpenAI and Gemini nodes in minutes and had a fully functional summarization pipeline that sends outputs to Notion and Slack. I didn’t have to write any backend glue logic. This is the fastest way I’ve ever deployed AI into an actual workflow.",
  },
  {
    name: "Oğuz Kılıç",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    quote:
      "I used to hate no-code tools because they always felt limiting. But this one feels different. You can start visually, but still drop into actual logic where needed. I added a custom node for Telegram alerts using just a few lines of JS.",
  },
  {
    name: "Julie Tran",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "As a solo founder, I needed a way to quickly validate ideas without hiring a full dev team. This platform let me prototype my AI-powered backend in just a few days. It's flexible enough for MVPs, but also production-ready when I need to scale.",
  },
  {
    name: "David Park",
    role: "CTO, Fintech Startup",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    quote:
      "We built automated compliance workflows, KYC checks, Stripe event listeners, and even contract generation — all within this system. Being able to self-host and control our data was a critical requirement, and it delivers.",
  },
  {
    name: "Sarah Meijer",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "Before this, I had to request engineering help every time I wanted a new report automation. Now I build flows that fetch, process, and send insights across teams — all by myself. It’s empowering and saves everyone time.",
  },
  {
    name: "Yusuf Arslan",
    role: "Cloud Architect",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    quote:
      "We needed an automation system that was scalable, auditable, and secure. The role-based access controls, detailed logging, and node customization options made it easy to adopt for our cloud infrastructure needs.",
  },
  {
    name: "Chloe Tan",
    role: "Design Systems Lead",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "We use this for syncing design tokens, publishing release notes, and notifying teams in real-time. It removed the glue code between Figma, GitHub, and Slack — and now everything just flows. Even our designers can trigger deployments!",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "I appreciate how unopinionated and extendable this is. I created custom nodes, added auth logic, and exposed internal APIs as flow triggers. It's rare to find a tool that is both beginner-friendly and hacker-friendly.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "This feels like if GitHub Actions and Zapier had a baby — but open-source and fully customizable. We've migrated 80% of our internal tools over, and I honestly don't see us going back.",
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
    <section id="testimonials">
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
