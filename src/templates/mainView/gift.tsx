import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Gift() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const text4 = useVisibility();

  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
        className="latin-25"
      >
        Mesa de Regalos
      </motion.h1>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
      >
        Si quieres tener un detalle con nosotros dejaremos algunas opciones que recibiremos con mucho cariño.
      </motion.p>

      <motion.div
        ref={text3.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="flex flex-col font-light z-10 gap-2 mb-6"
      >
        <img
          src="/images/liverpool.png"
          alt="Dress code"
          className="w-[250px] rounded-xl"
        />
        <p className="text-kobicha font-semibold text-2xl">Evento #51460568</p>
      </motion.div>

      <motion.div
        ref={text4.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-light z-10 gap-2"
      >
        <img
          src="/images/envelopemoney.png"
          alt="Dress code"
          className="w-[250px] "
        />
        <p className="text-kobicha font-semibold text-2xl">Lluvia de Sobres</p>
      </motion.div>

    </MainLayout>
  );
}
