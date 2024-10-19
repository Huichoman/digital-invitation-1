import React, { useEffect, useState } from "react";
import Dewa from "../../assets/bride";
import Dan from "../../assets/dan";
import Tina from "../../assets/groom";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function WelcomeView({
  setIsOpen,
  isOpen,
  audio,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
  audio: React.RefObject<HTMLAudioElement>;
}) {
  const windowWidth = useWindowWidth();
  const [name, setName] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    const name = path?.split("/")[1].split("-").join(" ");
    setName(name);
  }, []);

  const handleClick = () => {
    audio?.current?.play();
    setIsOpen(true);
  };
  return (
    <React.Fragment>
      <motion.div
        className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center items-center bg-transparent gap-2 overflow-hidden"
        animate={
          isOpen && { display: "none", opacity: 0, transition: { delay: 6.2 } }
        }
      >
        {/* <motion.p
          animate={
            isOpen && { opacity: 0, y: -30, transition: { duration: 0.5 } }
          }
          className="text-lg text-white"
        >
          The Wedding Of
        </motion.p> */}
        <motion.div
          animate={
            isOpen && {
              opacity: 0,
              y: -30,
              transition: { duration: 0.5, delay: 0.2 },
            }
          }
          className="w-60 h-60 rounded-full overflow-hidden relative"
        >
          <motion.div
            className="w-[110%] h-full absolute top-0 left-0"
            style={{
              backgroundImage: "url('/images/welcome.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          animate={
            isOpen && {
              scale: 3,
              y: -50,
              opacity: 0,
              transition: { duration: 1.5, delay: 0.6 },
            }
          }
          className="flex max-w-[16rem] h-[4rem] items-center"
        >
          <Tina className="fill-white max-w-[300px] w-full -mr-5" />
          <Dan
            viewBox="0 -25 36.66 70.28"
            className="fill-white max-w-[90px] w-full"
          />
          <Dewa className="fill-white max-w-[300px] w-full -ml-5" />
        </motion.div>
        <motion.p
          animate={
            isOpen && {
              opacity: 0,
              y: 30,
              transition: { duration: 1.5, delay: 2 },
            }
          }
          className={`text-white/80 font-montserrat`}
        >
          ¡NOS CASAMOS!
        </motion.p>
        {name !== "" && (
          <>
            <motion.h1
              animate={
                isOpen && {
                  opacity: 0,
                  y: 30,
                  transition: { duration: 0.5, delay: 0.2 },
                }
              }
              className="text-white font-medium capitalize -mt-1"
            >
              {name}
            </motion.h1>
            <motion.img
              animate={
                isOpen && {
                  opacity: 0,
                  y: 30,
                  transition: { duration: 0.5, delay: 0.1 },
                }
              }
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}`}
              alt={name}
              className="w-24 h-24 p-2 bg-white"
            />
          </>
        )}
        <motion.button
          animate={
            isOpen && { opacity: 0, y: 30, transition: { duration: 0.5 } }
          }
          onClick={handleClick}
          className={`p-[6px] px-8 font-semibold bg-[#EFEEECff] text-[#354135ff] rounded-full mt-2 hover:bg-blue-400/80 ${windowWidth < 500 && "text-SM"
            }`}
        >
          Abrir
        </motion.button>
      </motion.div>
    </React.Fragment>
  );
}
