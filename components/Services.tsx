import { Code, Layout, Smartphone, Globe, Database, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and secure websites using modern technologies like React, Next.js, and Node.js.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that provide a seamless user experience.",
    icon: Layout,
  },
  {
    title: "Mobile App Dev",
    description: "Developing cross-platform mobile applications for iOS and Android using React Native.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to drive more organic traffic.",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description: "Designing robust APIs and database architectures to power your applications.",
    icon: Database,
  },
  {
    title: "Brand Identity",
    description: "Crafting unique brand identities, logos, and visual assets that resonate with your audience.",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">What I Do</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services & Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I provide a wide range of digital services to help you achieve your business goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
