// import { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS } from 'react-joyride';
import './App.css';
import { Step } from 'react-joyride';
import { useSetState } from 'react-use';

export function logGroup(type: string, data: any) {
  console.groupCollapsed(type);
  console.log(data);
  console.groupEnd();
}

interface Props {
  breakpoint: string;
}

interface State {
  run: boolean;
  steps: Step[];
}

function App() {

  // const [showSplash, setShowSplash] = useState(false);
  // const [pinDigits, setPinDigits] = useState(['', '', '']);

  const [{ run, steps }, setState] = useSetState<State>({
    run: false,
    steps: [
      {
        content: <h2>Welcome To Our Website!</h2>,
        locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
        target: '.hero-section-circle',
        placement: 'center',
      },

      {
        content: (
          <h3>Password: 000</h3>
        ),
        placement: 'top',
        target: '.pin-code',
        title: 'Our Mission',
      },

      {
        content: (
          <div>
            <h3>Preview Songs</h3>
          </div>
        ),
        target: '.spotify iframe',
        placement: 'top',
        locale: { last: "Khatam Shudd" },
      },
    ],
  });


  const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setState({
      run: true,
    });
  };


  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ run: false });
    }

    logGroup(type, data);
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        run={run}
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
        styles={{
          options: {
            zIndex: 1000,
          },
        }}
      />

      < nav>
        <ul>
          <li><a href="#spotify">Preview</a></li>
          <li><a href="#lyrics-main">Unlock Lyrics</a></li>
          <button onClick={handleClickStart}>JOYRIDE</button>
        </ul>
      </nav >

      <div className="hero-section" id="hero-background">

        <div className="hero-section-circle" id="circle">

          <img src="assets/parental-advisory-sticker.png" className="advisory-sticker" id="advisory-sticker"
            alt="Parental Advisory Explicit Content" />

          <div className="hero-square" >
            <video poster="//gagadaily.com/images/banners/plasticdoll_poster.jpg"
              src="'../assets/plasticdoll_video.mp4'" loop muted>
            </video>
          </div>


        </div>
      </div>

      <img src="assets/barbed-wire.png" alt="Barbed Wire" className="barbed-wire" height="auto" />

      <div style={{ marginBottom: "20%" }} id="lyrics-main">
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

      <div className="lyrics-unlock flex-center flex-column spotify" id="spotify">
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
