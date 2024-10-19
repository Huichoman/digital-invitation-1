import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

import { RefObject } from "react";

export default function Schedule({ refSchedule }: { refSchedule: RefObject<HTMLElement> }) {
  const text1 = useVisibility();
  const text3 = useVisibility();
  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule}>
        <motion.h1
          ref={text1.ref}
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="latin-20 z-10"
        >
          Itinerario
        </motion.h1>
        <div className="w-full h-full flex flex-col gap-5 z-10 relative p-2 pb-4">
          {/* column 1 */}
          {/* <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={
                text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-2xl text-gray-400 mb-4"
            >
              Tanggal 18
            </motion.h2>
      
            <motion.div
              ref={text2.ref}
              initial={{ scaleY: 0 }}
              animate={text2.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full min-h-[6rem] relative text-xl origin-top"
            >
              
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text2.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"
              />
              <div className="absolute top-0 right-full whitespace-nowrap p-4 mt-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text2.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="flex items-center justify-center"
                >
                  16 WIB
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text2.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute top-0 left-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dashed"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text2.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="font-bold"
                  >
                    Siraman
                  </motion.p>
                  <p className="absolute top-full left-0 pt-2 pl-4 w-full whitespace-normal capitalize text-[14px]">
                    awal pembukaan acara oleh shiina mashiro untuk menakhlukan
                    sekai
                  </p>
                </motion.div>
              </div>
             <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text2.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"
              />
            </motion.div>
          </div>
           */}
          {/* column 2 */}
          <div className="relative h-full w-full flex flex-col items-center">
            {/* <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={
                text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-2xl text-gray-400 mb-4"
            >
              Tanggal 19
            </motion.h2> */}
            {/* middle line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full min-h-[40rem] relative text-xl origin-top"
            >
              {/* rounded */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text3.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"
              />
              {/* content */}

              <div
                ref={text3.ref}
                className="absolute top-0 left-full whitespace-nowrap p-4 mt-2 text-gray-400"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex items-center justify-center gap-2 ml-5"
                >
                  <img
                    src="/images/ring.png"
                    alt="ring"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                  7:00 PM
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1 }}
                    className="font-bold text-center whitespace-pre-wrap"
                  >
                    Ceremonia Religiosa
                  </motion.p>
                </motion.div>
              </div>
              {/* Recepción*/}
              <div className="absolute top-[5rem] right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-center"
                >
                  8:00 PM
                  <img
                    src="/images/reception.png"
                    alt="reception"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full whitespace-nowrap px-4 pb-1 ml-4 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold"
                  >
                    Recepción
                  </motion.p>
                </motion.div>
              </div>

              {/* Vals */}
              <div className="absolute top-[10rem] left-full whitespace-nowrap p-4 mt-2 ml-5 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1.4 }}
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src="/images/vals.png"
                    alt="quran"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                  9:00 PM
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 mr-5 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1.4 }}
                    className="font-bold"
                  >
                    Vals
                  </motion.p>
                </motion.div>
              </div>

              {/* Brindis */}
              <div className="absolute top-[15rem] right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-center"
                >
                  10:00 PM
                  <img
                    src="/images/brindis.png"
                    alt="reception"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full whitespace-nowrap px-4 pb-1 ml-4 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold"
                  >
                    Brindis
                  </motion.p>
                </motion.div>
              </div>


              {/* Cena */}
              <div className="absolute top-[20rem] left-full whitespace-nowrap p-4 mt-2 ml-5 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1.4 }}
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src="/images/dinner.png"
                    alt="quran"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                  10:30 PM
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 mr-5 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1.4 }}
                    className="font-bold"
                  >
                    Cena
                  </motion.p>
                </motion.div>
              </div>

              {/* Pastel */}
              <div className="absolute top-[25rem] right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-center"
                >
                  11:00 PM
                  <img
                    src="/images/cake.png"
                    alt="reception"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full whitespace-nowrap px-4 pb-1 ml-4 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold"
                  >
                    Pastel
                  </motion.p>
                </motion.div>
              </div>

              {/* Baile */}
              <div className="absolute top-[30rem] left-full whitespace-nowrap p-4 mt-2 ml-5 text-gray-400 ">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1.4 }}
                  className="flex items-center justify-center gap-2 pl-5"
                >
                  <img
                    src="/images/party.png"
                    alt="quran"
                    className="w-full h-full max-h-12"
                  />
                  11:30 PM
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 mr-5 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1.4 }}
                    className="font-bold"
                  >
                    ¡Fiesta!
                  </motion.p>
                </motion.div>
              </div>

              {/* Just married */}
              <div className="absolute top-[35rem] right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-center gap-2"
                >
                  3:00 AM
                  <img
                    src="/images/justmarried.png"
                    alt="Felices por siempre"
                    className="w-full h-full  max-h-14"
                  />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full  px-4 pb-1 ml-4  "
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold w-3 text-center whitespace-pre-wrap"
                  >
                    ¡Felices &nbsp;&nbsp;&nbsp;por Siempre!
                  </motion.p>
                </motion.div>
              </div>

              {/* rounded */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text3.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"
              />

            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
