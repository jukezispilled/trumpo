import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import Globe from './globe';

function App() {
  const [isModalOpen, setModalOpen] = useState(true);
  const [playAudio, setPlayAudio] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(false);
    setPlayAudio(true);
    setStartAnimation(true);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center relative bg-amber-600 overflow-hidden">
      
      {startAnimation && (
        <>
          <Globe />
          {/* Curved text for medium screens and up */}
          <svg className="absolute top-[45px] md:-top-7 left-0 w-full h-1/3 pointer-events-none" viewBox="0 0 100 33">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              id="curve"
              fill="transparent"
              d="M 0 33 Q 50 0 100 33"
            />
            {/* For medium and larger screens */}
            <motion.text
              fill="yellow"
              fontSize="6"
              className="stadium-light-text font-custom hidden md:block"
              filter="url(#glow)"
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              }}
            >
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                TRUMPO WORLD
              </textPath>
            </motion.text>

            {/* For small screens: TRUMPO and WORLD stacked but following the arc */}
            <motion.text
              fill="yellow"
              fontSize="6"
              className="stadium-light-text font-custom md:hidden text-[12px]"
              filter="url(#glow)"
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              }}
            >
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                TRUMPO
              </textPath>
            </motion.text>
            <motion.text
              fill="yellow"
              fontSize="6"
              className="stadium-light-text font-custom md:hidden translate-y-3 text-[10px]"
              filter="url(#glow)"
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              }}
            >
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                WORLD
              </textPath>
            </motion.text>
          </svg>
        </>
      )}

      {isModalOpen && (
        <motion.div
          className="absolute bg-white p-3 text-center"
          animate={{ 
            opacity: 1, 
            scale: [1, 1.03, 1]  // Pulsing effect
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,  // Repeat the animation
            repeatType: "reverse"  // Reverse the direction to create a pulse
          }}
        >
          <button
            onClick={handleButtonClick}
            className="text-amber-600 py-2 px-4 rounded transition duration-300 font-custom text-xl md:text-2xl"
          >
            JOIN THE CULT
          </button>
        </motion.div>
      )}

      <motion.img
        src="tl.png"
        alt="PL"
        className="absolute bottom-0 -left-10 h-[80%] hidden md:block"
        initial={{ y: '100vh' }}
        animate={startAnimation ? { y: '0vh', transition: { duration: 2, ease: 'easeOut' } } : {}}
        whileInView={{
          scale: [1, 1.1, 1],
          transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
        }}
        viewport={{ once: true }}
      />

      <motion.img
        src="tr.png"
        alt="PR"
        className="absolute bottom-0 md:-right-5"
        initial={{ y: '100vh' }}
        animate={startAnimation ? { y: '0vh', transition: { duration: 2, ease: 'easeOut' } } : {}}
        whileInView={{
          scale: [1, 1.1, 1],
          transition: { duration: 1, repeat: Infinity, repeatType: 'loop' },
        }}
        viewport={{ once: true }}
      />

      {playAudio && (
        <ReactAudioPlayer
          src="https://ia902306.us.archive.org/20/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3"
          autoPlay
        />
      )}
    </div>
  );
}

export default App;