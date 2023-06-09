import React, { useState, useEffect } from 'react';
import GenerateScramble from './components/ScrambleGenerator';
import TimerClock from './components/TimerClock';
import Statistics from './components/Statistics';

export default function Index() {
  const [spacebarIntervalCount, setSpacebarIntervalCount] = useState(1);
  const [intervalCount, setIntervalCount] = useState(0);
  const [timeArray, setTimeArray] = useState([]);
  // console.log(Date())
  // Insert timer value to timeArray
  function callBackFunction(sec) {
    setTimeArray([...timeArray, sec]);
    const formatted_time = new Date().toLocaleString(); 
    console.log(formatted_time)
  };

  // Spacebar interval
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code !== "Space") return;
      if (spacebarIntervalCount === 1){
        setIntervalCount(1);

        setSpacebarIntervalCount(2);
      } else if (spacebarIntervalCount === 3){
        setIntervalCount(3);

        setSpacebarIntervalCount(4);
      }
    };
    const handleKeyUp = (event) => {
      if (event.code !== "Space") return;
      if (spacebarIntervalCount === 2){
        setIntervalCount(2);

        setSpacebarIntervalCount(3);
      } else if (spacebarIntervalCount === 4){
        setIntervalCount(4);

        setSpacebarIntervalCount(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [spacebarIntervalCount]);

  return (
    <>
      <GenerateScramble intervalCount={intervalCount}/>
      
      <TimerClock parentCallBack={callBackFunction} intervalCount={intervalCount}/>

      <Statistics timeArray={timeArray}/>

      <div>
        <h1>FAQ</h1>
        
        <h3>How do i start the timer?</h3>
        <p>To start the timer, hold down spacebar for 0.3 seconds. When you let go of the spacebar the timer will start and you can solve your cube. To stop the timer, press and let go of spacebar as normal</p>

        <h3>What are the letter combination at the top of the screen?</h3>
        <p>The are there for scrambeling the rubik's cube. The letters represent different ways to turn the cube. ( ' ) means a turn should be done counter clockwise, whilst ( 2 ) signifies that is should be a double turn</p>

        <h3>What does current and best mean?</h3>
        <p>The current title is refering to you current time and averages, and the best title is refering to the "all time best" time and averages</p>

        <h3>What does "Mo3, Ao5 and Ao12" mean?</h3>
        <p>Mo3 stands for "meadian of three", its three cube times devided by three to get the average. Ao5 and Ao12 stands for "average of" and then five or twelve, where you remove the best and the worst time from the average before calculating the average</p>

        <h3>Are my results saved?</h3>
        <p>Currently the results are not saved anywhere. This is only because i havent taken the time to create a login system and save the times in a database yet</p>

        <h3>Where are my results saved?</h3>
        <p>Your results are not currently beeing saved anywhere. But if they were, there would have been a loginsystem in the program where a user first logs in, and then get the to see the times assosiated with that loged in user</p>
      </div>
    </>
  );
}

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   const solve = await prisma.Solve.create({
//     data: {
//       time: "10.12"
//     }
//   })
//   console.log(solve)
// }

// main()
//   .catch(e => {

//   })
//   .finally(async () => {
//     await prisma.disconnect()
//   })