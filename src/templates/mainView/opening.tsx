import Dan from "../../assets/dan";
import Bride from "../../assets/bride";
import Groom from "../../assets/groom";
import { useState } from "react";

import { RefObject } from "react";
import CountdownCard from "../components/countdownCard";
import useVisibility from "../../services/hooks/useVisibility";

export default function Opening({ refHome }: { refHome: RefObject<HTMLDivElement> }) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("November 22, 2024 00:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      updateDuration(0);
      return;
    }

    updateDuration(distance);
  }, 1000);

  const updateDuration = (duration: number) => {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    setTime({ days, hours, minutes, seconds });
  };

  const countdown = useVisibility();
  return (
    <section ref={refHome} className="w-full h-[110vh] ">
      <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center gap-4">
        {/* <p id="theWeddingOf" className="text-white">
          The Wedding Of
        </p> */}
        <div className="relative flex flex-col max-w-[150px] mb-4">
          <div id="tina" className={`max-w-full`}>
            <Groom className="fill-white w-full" />
          </div>
          <div id="dan" className="max-w-full">
            <Dan
              viewBox="0 0 36.66 50.28"
              className="fill-white max-w-[full] w-full"
            />
          </div>
          <div id="dewa" className={`max-w-full`}>
            <Bride className="fill-white w-full" />
          </div>
        </div>
        <p id="theWeddingOf" className="font-poppins text-2xl text-white mt-4">Nuestra Boda</p>
        <div className="flex justify-center items-center gap-2 text-white text-xl">
          <p id="day" className="text-4">22</p>
          <div
            id="dateParent"
            className="text-center border-gray-200/70 "
          >
            <h1 id="date" className="">
              / 11 /
            </h1>
            {/* <p id="year">2024</p> */}
          </div>
          <p id="month">2024</p>
        </div>
        <div id='year' ref={countdown.ref} className="flex gap-3 justify-center text-white">
          <CountdownCard
            isInView={countdown.isVisible}
            num={time.days}
            desc="Days"
            delay={0}
          />
          <CountdownCard
            isInView={countdown.isVisible}
            num={time.hours}
            desc="Hours"
            delay={0.2}
          />
          <CountdownCard
            isInView={countdown.isVisible}
            num={time.minutes}
            desc="Min"
            delay={0.4}
          />
          <CountdownCard
            isInView={countdown.isVisible}
            num={time.seconds}
            desc="Sec"
            delay={0.6}
          />
        </div>
      </main>
    </section>
  );
}
