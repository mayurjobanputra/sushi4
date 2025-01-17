import { SushiGrid } from '@/components/SushiGrid';
import { sushiData } from '@/data/sushi';

export function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
      <SushiGrid items={sushiData} />
    </div>
  );
}
