import { Sushi } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import { IoLeaf } from 'react-icons/io5';

interface SushiCardProps {
  sushi: Sushi;
}

export function SushiCard({ sushi }: SushiCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={sushi.image}
              alt={sushi.name}
              className="object-cover w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-lg">{sushi.name}</CardTitle>
            <div className="flex gap-1">
              {sushi.isSpicy && (
                <Badge variant="destructive">
                  <FaFire className="mr-1" /> Spicy
                </Badge>
              )}
              {sushi.isVegetarian && (
                <Badge variant="secondary">
                  <IoLeaf className="mr-1" /> Veg
                </Badge>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{sushi.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">${sushi.price.toFixed(2)}</span>
          <Button
            onClick={() => {
              addToCart(sushi);
            }}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
