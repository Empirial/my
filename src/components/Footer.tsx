import { Mail, Phone, MapPin, MapPinned } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <span className="text-xl font-bold tracking-tight">
              Pinnacle Studio
            </span>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:hello@yourbusiness.com`}
                  className="transition-colors hover:text-foreground"
                >
                  hello@yourbusiness.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:(555) 123-4567`}
                  className="transition-colors hover:text-foreground"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>123 Main Street, Springfield, IL 62701</span>
              </li>
            </ul>

            <nav className="mt-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <a
                    href={`#hero`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={`#about`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={`#services`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <div className="flex h-48 w-full items-center justify-center rounded-lg border border-border bg-muted md:h-full">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <MapPinned className="h-8 w-8" aria-hidden="true" />
                <span className="text-sm">Map preview unavailable</span>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground md:text-left">
              123 Main Street, Springfield, IL 62701
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Pinnacle Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}