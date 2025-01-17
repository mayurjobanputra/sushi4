import { ModeToggle } from './ModeToggle';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold">
          Sushi4
        </Link>
        <div className="flex items-center gap-4">
          <Cart />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
