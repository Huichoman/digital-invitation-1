import { useState } from "react";
import Modal from "./modal";



export default function ModalRsvp({
  setIsModalOpen,
  imageSrc,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  imageSrc: string;
}) {
  const [close, setClose] = useState(false);

  const onClose = () => {

    setClose(true);
  }

  return (
    <Modal
      width="max-w-xl"
      onClose={() => setIsModalOpen(false)}
      closed={close}
    >
      <div className="flex flex-col gap-3 text-neutral-600 h-full w-full bg-black bg-opacity-25">
        <img onClick={onClose} src={imageSrc} alt={imageSrc} className="cursor-pointer" />
        {/* <h1 className="text-center font-bold text-xl">RSVP</h1>
        <p className="text-sm font-light text-gray-500">
          <span className="text-red-500">*</span> : Wajib Diisikan
        </p>
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              Nama Tamu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              defaultValue={username}
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              placeholder="Nama tamu"
              required
            />
          </div>
          <section className="flex flex-row gap-3 sm:flex-col w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="telepon" className="font-medium">
                No Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="telepon"
                id="telepon"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
                required
                placeholder="08123456789"
                onKeyDown={preventInvalidInput}
                onPaste={preventPaste}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
                required
                placeholder="alexbusiness.code@gmail.com"
              />
            </div>
          </section>
          <section>
            <h1 className="mb-1 font-medium">
              Info Kehadiran <span className="text-red-500">*</span>
            </h1>
            <label htmlFor="hadir" className="cursor-pointer">
              <input
                type="radio"
                id="hadir"
                name="presence"
                className="mr-1"
                value="hadir"
                defaultChecked
              />
              Hadir
            </label>
            <label htmlFor="tidakHadir" className="cursor-pointer">
              <input
                type="radio"
                id="tidakHadir"
                name="presence"
                className="mr-1 ml-2 text-black"
                value="tidakHadir"
              />
              Tidak Hadir
            </label>
          </section>
          <div className="flex flex-col gap-1">
            <label htmlFor="jumlah" className="font-medium">
              Jumlah Kehadiran <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              required
              onKeyDown={preventInvalidInput}
              onPaste={preventPaste}
              placeholder="1 - 99"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="keterangan" className="font-medium">
              Keterangan
            </label>
            <input
              type="text"
              id="keterangan"
              name="keterangan"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              placeholder="(optional) tuliskan pesan kepada mempelai"
            />
          </div>
        </form>
        <div className="w-full flex gap-3 justify-center">
          <button
            onClick={() => handleButtonClick()}
            disabled={close}
            className="bg-blue-400 px-3 py-1 text-white rounded-xl mt-3"
          >
            Konfirm
          </button>
          <button
            onClick={() => setClose(true)}
            disabled={close}
            className="bg-gray-500 px-3 py-1 text-white rounded-xl mt-3"
          >
            Cancel
          </button>
        </div> */}
      </div>
    </Modal>
  );
}
