const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://192.168.1.3:3000' : 'https://next-ecommerce-front.vercel.app';