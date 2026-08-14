import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center rounded-lg border border-border bg-card p-8 text-card-foreground shadow-sm sm:p-10">
            <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-card-foreground">
              {"This service completely transformed our workflow. The team was responsive, professional, and the results exceeded every expectation we had. I honestly can't imagine going back to our old process."}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Sarah Mitchell"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"Sarah Mitchell"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"VP of Operations, BrightPath Logistics"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"From day one, the quality and attention to detail were unmatched. It felt like having an in-house expert without the overhead."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="James Carter"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"James Carter"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Founder, Carter & Co."}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"We saw tangible results within the first month. The support is outstanding, and the entire experience has been seamless from start to finish."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="Priya Sharma"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"Priya Sharma"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Marketing Director, NovaTech Solutions"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}