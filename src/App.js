import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import Globe from './globe';
import Marquee from "react-fast-marquee";
import Memes from './meme';

const RainingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji = {
        id: Math.random(),
        x: Math.random() * 100,
        y: -10,
        emoji: Math.random() > 0.5 ? '🐹' : '💰',
      };
      setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmojis((prevEmojis) => prevEmojis.slice(1));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [emojis]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {emojis.map((emoji) => (
        <motion.div
          key={emoji.id}
          className="absolute text-4xl"
          initial={{ x: `${emoji.x}vw`, y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{ duration: 5, ease: 'linear' }}
        >
          {emoji.emoji}
        </motion.div>
      ))}
    </div>
  );
};

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
    <div className=''>
      <div className="h-screen w-screen flex justify-center items-center relative bg-slate-300 overflow-hidden">
        <div className='absolute top-0 bg-[#000080] text-[#FFFF00] py-1 w-full text-center text-[6px] md:text-[9px] font-custom z-20'>CA: updating...</div>
        
        <div className='absolute top-7 right-3 flex items-center z-50'>
            <a href="https://x.com/trumpoworld" className='transition ease-in-out duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-11 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="yellow" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/trumpoport" className='transition ease-in-out duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-11 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="yellow" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
        </div>

        {startAnimation && (
          <>
            <RainingEmojis />
            <Globe />
            <div className="">
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
            </div>
          </>
        )}

        {isModalOpen && (
          <motion.div
            className="absolute bg-[#000080] p-3 text-center z-30"
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
              className="text-[#FFFF00] py-2 px-4 rounded transition duration-300 font-custom text-xl md:text-2xl"
            >
              JOIN THE CULT
            </button>
          </motion.div>
        )}

        <motion.img
          src="tl.png"
          alt="PL"
          className="absolute bottom-0 -left-10 h-[80%] hidden md:block z-20"
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
          className="absolute bottom-0 md:-right-5 z-20"
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
      <Marquee speed={150}>
        <div className='py-2 bg-[#FFFF00] font-custom text-[#000080]'>
          &nbsp;TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 TRUMPO WORLD ORDER 🌐 
        </div>
      </Marquee>
      {!isModalOpen && <Memes />}
    </div>
  );
}

export default App;