import React, { useEffect, useState } from "react";
import Dewa from "../../assets/dewa";
import Dan from "../../assets/dan";
import Tina from "../../assets/tina";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function WelcomeView({
  setIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}) {
  const [name, setName] = useState("");
  const windowWidth = useWindowWidth();
  useEffect(() => {
    const path = window.location.pathname;
    const name = path?.split("/")[1].split("-").join(" ");
    setName(name);
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <React.Fragment>
      <motion.div
        className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center items-center bg-transparent gap-2 overflow-hidden"
        animate={
          isOpen && { display: "none", opacity: 0, transition: { delay: 1.2 } }
        }
      >
        <motion.p
          animate={
            isOpen && { opacity: 0, y: -30, transition: { duration: 0.5 } }
          }
          className="text-lg text-white"
        >
          The Wedding Of
        </motion.p>
        <motion.div
          animate={
            isOpen && {
              opacity: 0,
              y: -30,
              transition: { duration: 0.5, delay: 0.3 },
            }
          }
          className="w-44 h-44 rounded-full"
          style={{
            backgroundImage: "url('/formal-face.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          animate={
            isOpen && {
              scale: 3,
              y: -50,
              opacity: 0,
              transition: { duration: 1.5, delay: 0.6 },
            }
          }
          className="flex max-w-[13rem]"
        >
          <Dewa className="fill-white max-w-[300px] w-full -mr-5" />
          <Dan
            viewBox="-5 68 300 110"
            className="fill-white max-w-[90px] w-full"
          />
          <Tina className="fill-white max-w-[300px] w-full -ml-5" />
        </motion.div>
        <motion.p
          animate={
            isOpen && {
              opacity: 0,
              y: 30,
              transition: { duration: 0.5, delay: 0.3 },
            }
          }
          className={`text-white/80`}
        >
          Kpd. Bpk/Ibu/Saudara/i
        </motion.p>
        {name !== "" && (
          <>
            <h1 className="text-white font-medium capitalize">{name}</h1>
            <img
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
          className={`p-[6px] px-4 bg-purple-400 text-white rounded-full mt-2 ${
            windowWidth < 500 && "text-xs"
          }`}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </React.Fragment>
  );
}
