import { SushiCard } from './SushiCard';
import { Sushi } from '@/types';

interface SushiGridProps {
  items: Sushi[];
}

export function SushiGrid({ items }: SushiGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((sushi) => (
        <SushiCard key={sushi.id} sushi={sushi} />
      ))}
    </div>
  );
}
