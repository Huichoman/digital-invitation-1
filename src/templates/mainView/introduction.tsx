import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";


export default function Introduction({
  refBride,
}: {
  refBride: React.RefObject<HTMLDivElement>;
}) {
  const bismillah = useVisibility();
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const text4 = useVisibility();

  return (
    <MainLayout>
      <div
        ref={refBride}
        className="relative flex justify-center items-start w-full max-w-[350px] -my-10"
      >
        <motion.div
          ref={bismillah.ref}
          animate={bismillah.isVisible ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{
            duration: 0.7,
            type: "tween",
          }}
          className="absolute w-full h-20 bg-white origin-right"
        />
      </div>
      <div className="text-center flex flex-col items-center">
        <motion.p
          ref={text1.ref}
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7 }}
          className="font-light text-kobicha mt-3 font-poppins text-lg"
        >
          “La vida me regaló un instante a tu lado y mi corazón decidió que ese instante fuera eterno”.
        </motion.p>{" "}
        <motion.p
          ref={text2.ref}
          animate={text2.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-montserrat font-semibold mt-14 mb-12"
        >
          Con la bendición de Dios y de nuestros padres.
        </motion.p>

        <motion.p
          ref={text3.ref}
          animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-badScript font-semibold text-xl mb-1"
        >
          Prof. Rigoberto Victoria Ruiz
        </motion.p>
        <motion.p
          ref={text3.ref}
          animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-badScript font-semibold text-xl mb-7"
        >
          Profa. Gregoria Somoza Barrientos
        </motion.p>

        <motion.p
          ref={text3.ref}
          animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-badScript font-semibold text-xl mb-1"
        >
          Sr. Juan José Álvarez García
        </motion.p>
        <motion.p
          ref={text3.ref}
          animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 font-badScript font-semibold text-xl"
        >
          Sra. Abigail Fuentes Zárate
        </motion.p>

        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <motion.p
            ref={text4.ref}
            animate={text4.isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-500 font-montserrat font-semibold mt-10 mb-6"
          >
            Tenemos el honor de invitarlos a la celebración de nuestra boda.
          </motion.p>
        </footer>
      </div>
    </MainLayout>
  );
}
