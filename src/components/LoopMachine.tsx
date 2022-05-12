import React, { useEffect, useRef, useState } from 'react';
import { audioFiles } from '../AudioFiles';
import Pad from './Pad';
import PowerToggle from './PowerToggle';

function LoopMachine() {
    // App States
    const [display, setDisplay] = useState({
        displayFiles: audioFiles
    }); // Display Key Press Sate
    const [powerToggle, setPowerToggle] = useState(true); // Power Toggle

    // Button Ref
    const buttonRef = useRef<HTMLButtonElement[] | []>([]);

     // Play Sound Function
    const playSound = (id: string) => {
        const audio = document.getElementById(id) as HTMLAudioElement;

        audio.currentTime = 0;
        audio.play().catch((error) => {
        console.error(error);
        });
    };
     
    // Pouse Sound Function
    const pauseSound = (id: string) => {
        const audio = document.getElementById(id) as HTMLAudioElement;

        audio.currentTime = 0;
        audio.pause();
    };

    const powerSwitch = () => {
        setPowerToggle(!powerToggle);
        //setDisplay(powerToggle ? 'POWER OFF' : 'POWER ON');
        display.displayFiles.forEach(item => {
            if (powerToggle && item.play){
                playSound(item.key);
            } else if(!powerToggle){
                pauseSound(item.key);
            }
        });
    };


    const handleClick = (id: string) => {
        display.displayFiles.forEach(item => {
            if (item.key == id){
                // if(item.play) {
                //     pauseSound(id);
                // } else {
                //     playSound(id);
                // }
                item.play = !item.play;
            }
        });
        
        setDisplay({...display, displayFiles: display.displayFiles});
        //}
        //const target = audioFiles.find((item) => item.key === id);
        // if (target) {
        //   const label = target.label;
        //   setDisplay(label);
        // //   const idArray = buttonRef.current.find((element) => element.id === label);
        // //   if (idArray) {
        // //     idArray.focus();
        // //     setTimeout(() => idArray.blur(), 5);
        // //   }
        // }
    };

    
    return (
        <div className='LoopMachine'>
            <div>
                <PowerToggle powerSwitch={powerSwitch} />
            </div>
            <Pad
                audioFiles={audioFiles}
                buttonRef={buttonRef}
                handleClick={handleClick}
                powerToggle={powerToggle}
            />
        </div>
    );
}

export default LoopMachine;