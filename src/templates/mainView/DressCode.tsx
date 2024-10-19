import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function DressCode() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();

  return (
    <MainLayout height="h-full gap-5 text-center">
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
        className="latin-25"
      >
        Código de Vestimenta Formal
      </motion.h1>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-light z-10"
      >
        <img
          src="/images/dresscode.png"
          alt="Dress code"
          className="w-[150px] "
        />
      </motion.p>
      <motion.h1
        ref={text3.ref}
        animate={
          text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-bold z-10 text-lg"
      >
        ¡No utilizar color blanco o rojo!
      </motion.h1>
    </MainLayout>
  );
}
