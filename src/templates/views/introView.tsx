import Bride from "../../assets/bride";
import Groom from "../../assets/groom";
import Dan from "../../assets/dan";
import { motion } from "framer-motion";

export default function IntroView() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        display: "none",
        transition: { delay: 4.5, duration: 1 },
      }}
      className="absolute w-full h-[100dvh] flex justify-center bg-[#EFEEECff] overflow-hidden"
    >
      <div className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center">
        <div className="relative h-[100dvh] flex flex-col justify-center items-center">
          <div className={`max-w-[280px]`}>
            <Groom />
          </div>
          <div className="max-w-[250px] mb-3 mt-2">
            <Dan />
          </div>
          <div className={`max-w-[280px]`}>
            <Bride />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
