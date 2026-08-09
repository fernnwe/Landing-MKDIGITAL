import './Testimonios.css';

const testimonios = [
  {
    img: 'https://scontent.fmga11-2.fna.fbcdn.net/v/t39.30808-6/477074284_3554499034844286_6683701472792848202_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=PUKtlj3eTj4Q7kNvwHQ0tTd&_nc_oc=Adrj7vT7DDJtfXCPnhMaGSV6iJ6W71g_HuJT3F9e6J3u4p5C0ZgsBx6Tc1ogdmMsACU&_nc_zt=23&_nc_ht=scontent.fmga11-2.fna&_nc_gid=FIXiDzRXF21F0znA_MHeOw&_nc_ss=7b2a8&oh=00_Af2pYEWtvV-_caMafxhxi79Weg3hdBAd3GA2EW_bpWmx0g&oe=69F86842',
    alt: 'Diego Espino',
    text: 'Me instalaron Office y Adobe en menos de 30 minutos. Atención rápida y segura.',
    author: 'Diego Espino',
    role: 'Supervisor de IBEX ⭐⭐⭐⭐⭐',
  },
  {
    img: 'https://scontent.fmga3-1.fna.fbcdn.net/v/t39.30808-6/493081666_122105584904878436_3428209111323622382_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ZDkvsBQKVysQ7kNvwFCFGFB&_nc_oc=AdroK8hbVZSIbZ3-59Iz1m_ukThjYUWvOBO4wjbRPXxeTdHBLpFvAUHx3N20f9uaSKY&_nc_zt=23&_nc_ht=scontent.fmga3-1.fna&_nc_gid=I9QdzYkfGbxCtp1tTgnJQw&_nc_ss=7b2a8&oh=00_Af20jNlexOcYDHaL_hAvQ7gjkOYoQABGEBgr92sSm4Guag&oe=69F87F56',
    alt: 'Juan Caldera',
    text: 'Logré instalar el sistema para mi negocio de pollo gracias a ellos',
    author: 'Juan Caldera',
    role: 'Comerciante ⭐⭐⭐⭐⭐',
  },
  {
    img: 'https://scontent.fmga3-2.fna.fbcdn.net/v/t39.30808-6/682706330_1453691210103160_4001106066378769170_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MizJLhj5lvEQ7kNvwEUE4iY&_nc_oc=AdpUrfbXVKhXkgA0p_RRAlOjo-1x3NHNoc-oJQSyPtnVG6oSzCDwkrXmbauTBSqL8rc&_nc_zt=23&se=-1&_nc_ht=scontent.fmga3-2.fna&_nc_gid=gnNRXqopo-K2gWxAsFoduQ&_nc_ss=7b2a8&oh=00_Af1AXlYgSIldjw9_89QUI1U8JYfD6fwbY6Kmx0iKRuIT8Q&oe=69F88BEC',
    alt: 'Tropi Gamer',
    text: 'Estoy en la USA y desde allá me atendieron, 1o/10',
    author: 'Tropi Gamer',
    role: 'Tiktoker ⭐⭐⭐⭐⭐',
  },
];

export default function Testimonios() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">OPINIONES REALES</span>
          <h2 className="reveal reveal-up stagger-1">Clientes que ya confiaron en nosotros</h2>
          <p className="reveal reveal-up stagger-2">Empresas, estudiantes y profesionales en toda Nicaragua.</p>
        </div>

        <div className="testimonials-grid">
          {testimonios.map((t, i) => (
            <div key={t.author} className={`card glow-card testimonial-card reveal reveal-up stagger-${i + 3}`}>
              <div className="testimonial-avatar">
                <img src={t.img} alt={t.alt} loading="lazy" />
              </div>
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
