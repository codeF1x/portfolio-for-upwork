export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What my clients say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {[
              {
                body: "The website exceeded our expectations. The design is clean, modern, and very user-friendly. Highly recommended!",
                author: {
                  name: "Sarah Johnson",
                  handle: "CEO at TechStart",
                  imageUrl: "/images/sarah-johnson.jpg",
                },
              },
              {
                body: "Professional, responsive, and incredibly talented. Delivered the project on time and within budget.",
                author: {
                  name: "Michael Chen",
                  handle: "Founder of DesignCo",
                  imageUrl: "/images/michael-chen.jpg",
                },
              },
              {
                body: "I was impressed by the attention to detail and the quality of the code. A true professional.",
                author: {
                  name: "Emily Davis",
                  handle: "Product Manager",
                  imageUrl: "/images/emily-davis.jpg",
                },
              },
              // More testimonials...
            ].map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-card p-8 text-sm leading-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <blockquote className="text-foreground">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                      <div className="text-muted-foreground">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
