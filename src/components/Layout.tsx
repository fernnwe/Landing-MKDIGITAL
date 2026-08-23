import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FlyerPopup from './FlyerPopup';
import Asistente from './Asistente';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <FlyerPopup />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Asistente />
    </>
  );
}
