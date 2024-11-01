export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Husky Armory. All rights reserved.
          </p>
          <p className="text-sm text-white/80">
            Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}