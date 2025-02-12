import React, { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";

const MaintenanceComponent = ({
  title = "Please bear with us! We're currently under maintenance.",
  description = "It's going to take some time to fix the error. We'll be back online in.",
  targetDate = "2025-03-31T23:59:59", // Default target date
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const dest = new Date(targetDate).getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <MainLayout>
      <section className="py-10 pb-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
            {/* Content */}
            <div className="w-full flex-col justify-center items-center gap-5 flex">
              <div className="w-full flex-col justify-center items-center gap-6 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                    {title}
                  </h2>
                  <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="flex items-start jetbrains justify-center w-full gap-1 count-down-main">
                  <div className="timer">
                    <h3 className="countdown-element days text-center text-black text-3xl font-normal font-manrope leading-normal">
                      {timeLeft.days}
                    </h3>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <h3 className="countdown-element hours text-center text-black text-3xl font-normal font-manrope leading-normal">
                      {timeLeft.hours}
                    </h3>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <h3 className="countdown-element minutes text-center text-black text-3xl font-normal font-manrope leading-normal">
                      {timeLeft.minutes}
                    </h3>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <h3 className="countdown-element seconds text-center text-black text-3xl font-normal font-manrope leading-normal">
                      {timeLeft.seconds}
                    </h3>
                  </div>
                </div>

                {/* Notify Me Form */}
                <div className="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                  <input
                    type="text"
                    className="sm:w-80 w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                    placeholder="Your mail"
                  />
                  <button className="green-btn">Notify Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MaintenanceComponent;
