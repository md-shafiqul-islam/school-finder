import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-dark text-foreground-light">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">SchoolFinder</h2>
            <p className="text-sm leading-relaxed text-foreground-light/80">
              A simple platform to add, explore, and discover schools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/addSchool" className="text-accent">
                  Add School
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-accent">
                  Show Schools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">📍 Lucknow, India</p>
            <p className="text-sm">✉️ support@schoolfinder.com</p>
            <p className="text-sm">📞 +880 1234 567 890</p>
          </div>
        </div>

        <div className="border-t border-foreground-light/20 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground-light/80">
          <p>© {new Date().getFullYear()} SchoolFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
