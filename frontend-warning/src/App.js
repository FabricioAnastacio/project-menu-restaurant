import './App.css';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import Footer from './components/Footer';
import Header from './components/Header';
import comunicado from './pictures/comunicado.jpg';
import qrcode from './pictures/qrcodeTanjiro.jpg';

function App() {
  const maxWidth = 920;
  const width = window.innerWidth;
  if (width > maxWidth) {
    return (
      <div className="Desktop-msg">
        <h1>Atenção</h1>
        <img className="qrcode" src={ qrcode } alt="Qr code Big lanches do Tanjiro" />
        <p>Nosso sistema não esta disponivel para desktop no momento!</p>
        <p>Por favor, escaneie o QR code e acesse pelo celular.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <AudioPlayer />
        <img className="Comunicado" src={ comunicado } alt="Aviso!" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
