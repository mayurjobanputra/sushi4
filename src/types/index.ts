export interface Sushi {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'nigiri' | 'maki' | 'sashimi' | 'special';
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface CartItem extends Sushi {
  quantity: number;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}
