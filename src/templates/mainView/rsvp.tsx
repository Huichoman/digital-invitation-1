import { useState } from "react";
import MainLayout from "../components/mainLayout";
// import ModalRsvp from "../components/modalRsvp";
import axios, { AxiosResponse, AxiosError } from "axios";
import toast from "react-hot-toast";

interface RsvpProps {
  name: string;
  tickets: number;
  phone: number;
}

type InvitationType = {
  name: string;
  phone: number;
  tickets: number;
  attendance: string;
  message: string;
}

// const images = [
//   { original: "/images/std-1.jpg", width: 232, height: 155, src: "/images/std-1.jpg" },
//   { original: "/images/std-2.jpg", width: 232, height: 155, src: "/images/std-2.jpg" },
//   { original: "/images/std-3.jpg", width: 232, height: 155, src: "/images/std-3.jpg" },
//   { original: "/images/std-4.jpg", width: 232, height: 155, src: "/images/std-4.jpg" },
//   { original: "/images/std-5.jpg", width: 232, height: 155, src: "/images/std-5.jpg" },
//   { original: "/images/std-6.jpg", width: 232, height: 155, src: "/images/std-6.jpg" },
//   { original: "/images/std-7.jpg", width: 232, height: 155, src: "/images/std-7.jpg" },
//   { original: "/images/std-8.jpg", width: 232, height: 155, src: "/images/std-8.jpg" },
//   { original: "/images/std-9.jpg", width: 232, height: 155, src: "/images/std-9.jpg" },
//   { original: "/images/std-10.jpg", width: 232, height: 155, src: "/images/std-10.jpg" },
//   { original: "/images/std-11.jpg", width: 232, height: 155, src: "/images/std-11.jpg" },
//   { original: "/images/std-12.jpg", width: 232, height: 155, src: "/images/std-12.jpg" },
//   { original: "/images/std-13.jpg", width: 232, height: 155, src: "/images/std-13.jpg" },
//   { original: "/images/std-14.jpg", width: 232, height: 155, src: "/images/std-14.jpg" },
// ]


export default function Rsvp({ name, tickets, phone }: RsvpProps) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  // const [selectedImage, setSelectedImage] = useState("");

  // const onImageClick = (imageSrc: string) => () => {
  //   setSelectedImage(imageSrc);
  //   if (isModalOpen) {
  //     setIsModalOpen(false)
  //     setTimeout(() => { setIsModalOpen(true) }, 50)
  //   } else setIsModalOpen(true)
  // }

  const sendAttendanceResponse = async (): Promise<{ error: string } | InvitationType | undefined> => {

    const config = {
      data: {
        phone: phone,
        attendance: attendance,
        message: message
      },
      headers: {
        "Content-Type": "text/plain",
      },
      maxBodyLength: Infinity,
      method: "POST",
      url: `${import.meta.env.VITE_BASE_URL}update`,
    };

    const response = await axios
      .request(config)
      .then((response: AxiosResponse<InvitationType>) => {
        // console.log("response", response.data);
        toast.success("Respuesta enviada con éxito");
        return response.data;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log("Error >", error.message);
        return error.response?.data;
      });

    return response;
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendAttendanceResponse().then((response) => {
      console.log('response', response)
      if (response && 'error' in response) {
        console.log('error', response.error)
      } else {

        console.log('name', response)
      }
    })
  }


  return (
    <>
      <MainLayout height="h-full" className="text-center gap-4">
        <h2 className="latin-25 mb-4">Confirma tu Asistencia</h2>
        <div className="flex flex-col w-full h-[12rem] items-center justify-around bg-bone rounded-md shadow-shadow28 text-kobicha  p-4">
          <p className=" text-lg mb-3">Invitación para</p>
          <p className="text-2xl font-semibold mb-6">{name}</p>
          <div className="flex justify-center">
            <p className="text-lg">Pase para</p>
            <p className="text-xl font-semibold mb-6 mx-2">{` ${tickets} `}</p>
            <p className="text-lg">{tickets == 1 ? "persona" : "personas"}</p>
          </div>

        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col p-4 z-10 w-full shadow-shadow32 bg-isabelline rounded-sm">
          <div className="flex justify-center gap-6 mb-6">
            <button
              type="button"
              onClick={() => setAttendance("Si")}
              className={`flex justify-center items-center rounded-full shadow-shadow32 transition-all duration-300 text-wrap px-2 text-lg w-28 h-28 ${attendance == 'Si' ? "text-white bg-resedaGreen " : "bg-[#e6e6d7]  text-resedaGreen"}`}>
              {tickets == 1 ? "Si Asistiré" : "Si Asistiremos"}
            </button>
            <button
              type="button"
              onClick={() => setAttendance("No")}
              className={`flex justify-center items-center rounded-full shadow-shadow32 transition-all duration-300 text-wrap px-2 text-lg w-28 h-28 ${attendance == 'No' ? "text-white bg-resedaGreen " : "bg-[#e6e6d7]  text-resedaGreen"}`}>
              {tickets == 1 ? "No Asistiré" : "No Asistiremos"}
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-resedaGreen mb-2">¡Dedícanos unas bonitas palabras!</p>
            <textarea
              className={`flex justify-between items-center w-full min-h-28 rounded-md px-3 py-1.5 border text-kobicha border-gray-400 outline-none resize-none`}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="px-2 h-8 bg-resedaGreen text-white rounded-md shadow-shadow10 mt-4">Enviar</button>
        </form>

        {/* <h2 className="latin-25 mb-4 mt-12">Nosotros</h2>
        <div className="flex flex-wrap justify-around w-full cursor-pointer mb-6 h-fit min-h-60 z-10 rounded-md">
          {images ? images.map((image, index) => (
            <div onClick={onImageClick(image.src)} key={index + image.src} className=" cursor-pointer flex justify-center items-center rounded-full w-24 h-24 border overflow-clip" >
              <img className="min-w-40 cursor-pointer  " src={image.src} alt={image.src} /></div>
          )) : null}
        </div> */}
      </MainLayout>
      {/* {isModalOpen && (
        <ModalRsvp setIsModalOpen={setIsModalOpen} imageSrc={selectedImage} />
      )} */}
    </>
  );
}
