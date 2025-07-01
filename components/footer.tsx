export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Taufik Pragusga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
