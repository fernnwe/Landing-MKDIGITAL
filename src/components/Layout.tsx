import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Asistente from './Asistente';
import { CartProvider } from '../context/CartContext';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Asistente />
      </>
    </CartProvider>
  );
}
