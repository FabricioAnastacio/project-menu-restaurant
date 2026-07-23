import logo from '../pictures/logoChamas.mp4';
import iconsWhatsapp from '../pictures/icons8-whatsapp-48.png';
import iconsInstagram from '../pictures/icons8-instagram-48.png';
import '../style/header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="Header_move">
        <video autoPlay muted loop playsInline className="Header-logoVideo">
          <source src={ logo } type="video/mp4" />
        </video>
        <div className="Header-Title-CARDAPIO">
          <aside className="Title-profile">
            <h1>
              AVISO
            </h1>
          </aside>
          <section className="Section-network">
            <a
              className="Btms-network"
              href="https://wa.me/31999739177"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsWhatsapp } alt="whatsapp" />
            </a>
            <a
              className="Btms-network"
              href="https://www.instagram.com/biglanchesdotanjiro/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsInstagram } alt="instagram" />
            </a>
          </section>
        </div>
      </div>
      <div className="Container_text">
        <h2>
          ❤️ Muito obrigado!
        </h2>
        <p>
          Agradecemos de coração a todos os clientes que fizeram parte desta temporada.

          Este é apenas um <span>até logo</span>. Em breve esperamos voltar com novas novidades, mais sabor e a mesma dedicação de sempre.

          <span> Obrigado por fazer parte da nossa história. Até breve!</span>
        </p>
      </div>
    </header>
  )
}

export default Header;
