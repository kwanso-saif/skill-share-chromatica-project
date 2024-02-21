import { useEffect, useState } from 'react';
import './App.css'
import SplashScreen from './SplashScreen'

function App() {

  const [showSplash, setShowSplash] = useState(false);
  // const [pinDigits, setPinDigits] = useState(['', '', '']);

  useEffect(() => {
    const adjustCircleSize = () => {
      const circle = document.getElementById("circle");
      const advisorySticker = document.getElementById("advisory-sticker");

      const minDimension = Math.min(window.innerWidth, window.innerHeight);

      if (circle && circle.style && circle.style.width) {
        circle.style.width = `${minDimension}px`;
      }

      if (circle && circle.style && circle.style.height)
        circle.style.height = `${minDimension}px`;

      if (advisorySticker && advisorySticker.style && advisorySticker.style.height) {
        let currentHeight = parseInt(advisorySticker.style.height);
        currentHeight -= minDimension;
        advisorySticker.style.height = currentHeight + 'px';
      }

      if (advisorySticker && advisorySticker.style && advisorySticker.style.width) {
        let currentHeight = parseInt(advisorySticker.style.height);
        currentHeight -= minDimension + 40;
        advisorySticker.style.width = currentHeight + 'px';
      }

      const background = document.getElementById("hero-background");

      if (window.innerWidth < window.innerHeight)
        background!.style.height = `${window.innerWidth}px`;
      else
        background!.style.height = `${circle!.style.width + 5}px`;

      if (window.innerWidth < window.innerHeight && background && background.style && background.style.height) {
        background.style.height = `${window.innerWidth}px`;
      } else {
        let height = circle && parseInt(circle.style.width);
        if (height) height += 5;
        if (background && background.style && background.style.height)
          background.style.height = `${height! + 5} px`;
      }
    };

    window.onload = () => {
      setTimeout(() => setShowSplash(false), 3000);
      adjustCircleSize();
    };

    window.addEventListener('resize', adjustCircleSize);

    return () => {
      window.removeEventListener('resize', adjustCircleSize);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      < nav>
        <ul>
          <li><a href="#spotify">Preview</a></li>
          <li><a href="#lyrics-main">Unlock Lyrics</a></li>
        </ul>
      </nav >

      <div className="hero-section" id="hero-background">

        <div className="hero-section-circle" id="circle">

          <img src="assets/parental-advisory-sticker.png" className="advisory-sticker" id="advisory-sticker"
            alt="Parental Advisory Explicit Content" />

          <div className="hero-square">
            <video poster="//gagadaily.com/images/banners/plasticdoll_poster.jpg"
              src="//" loop muted>
            </video>
          </div>


        </div>
      </div>

      <img src="assets/barbed-wire.png" alt="Barbed Wire" className="barbed-wire" height="auto" />

      <div style={{ marginBottom: "20%;" }} id="lyrics-main">
        <h1>
          <span className="magic"><span className="magic-text">LUST FOR LIFE</span>
          </span>
          <p>02/16</p>
        </h1>
      </div>


      <div className="lyrics-unlock flex-center flex-column">
        <img src="assets/heart.png" alt="Heart Shaped Lock" className="heart" id="heart" />

        <div className="pin-code" id="pin-code">
          <input type="number" id="digit1" maxLength={1} />
          <input type="number" id="digit2" maxLength={1} />
          <input type="number" id="digit3" maxLength={1} />
          <div id="lyrics-unlock-button">
            <button className="arrow-button" id="arrow-button"> ➤</button>
          </div>
        </div>

        <div className="lyrics" id="lyrics">It's funny how life can change or be shaped passing by a stranger
        </div>
      </div>

      <div className="lyrics-unlock flex-center flex-column" id="spotify">
        <iframe style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/album/05c49JgPmL4Uz2ZeqRx5SP?utm_source=generator" width="100%"
          height="652"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
      </div>
    </>
  );

}
export default App
