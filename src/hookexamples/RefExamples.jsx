import React, { useEffect, useRef, useState } from 'react'
import VIDEO from './video.mp4'

const RefExamples = () => {
    // const RefExamples = () =>{
        const [play, setplay] = useState(true);
        const eleRef = useRef();
        const videoRef = useRef();
        console.log(videoRef);
        useEffect(()=>{
            eleRef.current.style = "teal";
            eleRef.current.innerText = "React Ref"
        
        });

        let playOrpause= ()=>{
            if(play == true){
                videoRef.current.play();
                console.log(play);
                setplay(false);
        
            }
            else{
                videoRef.current.pause();
                console.log(play);
                setplay(true);

            }

        }
  return (
    <div>
        <h1 ref={eleRef}>RefExamples</h1>
        <video src={VIDEO} ref={videoRef} onClick={playOrpause}></video>
        </div>
  )
}

export default RefExamples