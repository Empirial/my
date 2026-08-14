export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Crafted with intention, built to endure.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Our journey began in a modest atelier with a clear conviction: too much of what we surround ourselves with is designed for obsolescence, not permanence. We set out to challenge that norm—to create objects that respect the hands that shape them, the forests that provide for them, and the generations who will inherit them. Each piece we produce begins with responsibly harvested timber, is refined by artisans whose skill spans decades, and is finished to develop character over time, not to fade with it.
        </p>
        <blockquote className="mx-auto my-10 max-w-2xl border-l-4 border-accent pl-6 text-left">
          <p className="text-xl italic leading-relaxed text-foreground md:text-2xl">
            We don’t merely furnish spaces. We safeguard the heirlooms your family will cherish for generations.
          </p>
        </blockquote>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          This ethos informs every choice we make, from the selection of raw materials to the care taken in packaging each order. Our craftspeople are compensated fairly, our production minimizes waste at every turn, and our lifetime repair commitment stands as a testament to our conviction that true quality is a covenant, not a claim. When you bring our work into your home, you are not acquiring a commodity—you are embracing a deliberate stand against the disposable, a celebration of patience over haste, and a legacy over the fleeting.
        </p>
      </div>
    </section>
  );
}