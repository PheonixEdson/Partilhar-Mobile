export type Product = { id: string; name: string; price: number; quantity?: number; };
export type Sale = { id: string; productId: string; quantity: number; total: number; date: string; };
export type Subscriber = { id: string; name: string; email?: string; phone?: string; };