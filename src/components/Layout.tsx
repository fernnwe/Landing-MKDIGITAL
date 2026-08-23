import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FlyerPopup from './FlyerPopup';
import Asistente from './Asistente';
import { CartProvider } from '../context/CartContext';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <>
        <FlyerPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Asistente />
      </>
    </CartProvider>
  );
}
