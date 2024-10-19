import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";

export default function LocationCard({
  title,
  date,
  time,
  home,
  location,
}: {
  title: string;
  date: string;
  time: string;
  home: string;
  location: string;
}) {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text4 = useVisibility();
  const text5 = useVisibility();

  return (
    <div className="shadow-custom p-4 flex flex-col gap-2 text-center max-w-[350px] z-10 bg-white font-poppins">
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-montserrat font-bold text-2xl mb-2"
      >
        {title}
      </motion.h1>
      <motion.p
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
      >
        {date}
      </motion.p>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
      >
        {time}
      </motion.p>

      <motion.p
        ref={text4.ref}
        animate={
          text4.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="mb-1 mt-2 font-semibold"
      >
        {home}
      </motion.p>
      <motion.p
        ref={text5.ref}
        animate={
          text5.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="leading-6"
      >
        {location}
      </motion.p>
    </div>
  );
}
