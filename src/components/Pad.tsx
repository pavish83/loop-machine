import React from 'react';

interface AudioFiles {
    label: string;
    play: boolean;
    key: string;
    file: any;
  }
  
  interface PadProps {
    audioFiles: AudioFiles[];
    handleClick(e: string, p: boolean): void;
    buttonRef: React.MutableRefObject<HTMLButtonElement[]>;
    powerToggle: boolean;
  }

function Pad({
    audioFiles,
    handleClick,
    buttonRef,
    powerToggle,
  }: PadProps) {
    return (
      <div
        id='glow-blue'
        className={
          'DrumPad p-6 h-80 w-96 grid grid-cols-3 gap-1 rounded-b-xl md:rounded-b-none md:rounded-r-xl transition ease-out duration-300 '
        }
      >
        {audioFiles.map((item) => (
          <button
            id={item.label}
            key={item.key}
            ref={(element) => {
              if (element) {
                buttonRef.current.push(element);
              }
            }}
            className={
              'drum-pad rounded-lg bg-gray-300 text-gray-700 focus:outline-none transform focus:translate-y-1 focus:bg-opacity-10 | transition ease-out duration-300 ' +
              (item.play ? 'play' : 'off')
            }
            onClick={() => handleClick(item.key, !item.play)}
          >
            {item.key}
            <audio 
              id={item.key}
              className='clip'
              src={item.file}
            ></audio>
          </button>
        ))}
      </div>
    );
  }
  
  export default Pad;