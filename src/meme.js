import React from 'react';
import { Window, WindowHeader, WindowContent } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

function Memes() {
  return (
    <ThemeProvider theme={original}>
      <div className='h-min py-[7.5%] w-screen flex flex-col items-center justify-center bg-slate-300 p-4'>
        <div className='font-custom text-[#FFFF00] text-3xl md:text-5xl mb-[5%]'>MEMES</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='aspect-w-1 aspect-h-1'>
              <Window className='w-full h-full'>
                <WindowHeader className='font-custom text-xs'><span className='text-[#FFFF00]'>TRUMPO WORLD ORDER</span></WindowHeader>
                <WindowContent className='p-0 flex justify-center items-center bg-yellow-300'>
                  <img
                    src={`meme${index + 1}.png`}
                    alt={`Meme ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </WindowContent>
              </Window>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Memes;