export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Crafted with intention, built to endure.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Our story began in a small workshop with a simple observation: most furniture is made to be replaced, not kept. We saw an opportunity to do things differently—to create pieces that honor the materials, the makers, and the moments they’ll witness. Every chair, table, and shelf we produce starts with sustainably sourced wood, passes through the hands of artisans who have spent decades perfecting their craft, and ends with a finish that ages gracefully, not quickly.
        </p>
        <blockquote className="mx-auto my-10 max-w-2xl border-l-4 border-accent pl-6 text-left">
          <p className="text-xl italic leading-relaxed text-foreground md:text-2xl">
            We don’t sell furniture. We steward the things your family will pass down.
          </p>
        </blockquote>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          This philosophy guides every decision we make, from the way we source timber to the way we pack each order. We pay our craftspeople a living wage, we minimize waste at every step, and we offer a lifetime repair guarantee because we believe that quality isn’t a feature—it’s a promise. When you choose our work, you’re not just buying a product; you’re joining a quiet rebellion against disposability, one that values patience over speed and legacy over trend.
        </p>
      </div>
    </section>
  );
}