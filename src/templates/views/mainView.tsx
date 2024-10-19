import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Opening from "../mainView/opening";
import Introduction from "../mainView/introduction";
import StartAnimation from "../components/startAnimation";
import Location from "../mainView/location";
import DressCode from "../mainView/DressCode";

import Navbar from "./navbar";
import Gift from "../mainView/gift";
import Schedule from "../mainView/schedule";
import { useSearchParams } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import Rsvp from "../mainView/rsvp";
import useWindowWidth from "../../services/hooks/useWindowWidth";
import Memorable from "../mainView/memorable";

type InvitationType = {
  name: string;
  phone: number;
  tickets: number;
  attendance: string;
  message: string;
}

export default function MainView({
  isOpen,
  audio,
}: {
  isOpen: boolean;
  audio: React.RefObject<HTMLAudioElement>;
}) {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("invitacion");

  console.log('invitacion', code)

  const readInvitation = async (phone: number): Promise<{ error: string } | InvitationType | undefined> => {

    const config = {
      data: {
        phone: phone
      },
      headers: {
        "Content-Type": "text/plain",
      },
      maxBodyLength: Infinity,
      method: "POST",
      url: `${import.meta.env.VITE_BASE_URL}read`,
    };

    const response = await axios
      .request(config)
      .then((response: AxiosResponse<InvitationType>) => {
        // console.log("response", response.data);
        return response.data;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.log("Error >", error.message);
        return error.response?.data;
      });

    return response;

  }
  const windowWidth = useWindowWidth();
  const refHome = useRef(null);
  const refBride = useRef(null);
  const refLocation = useRef(null);
  const refSchedule = useRef(null);
  const refComment = useRef(null);
  const refImage = useRef(null);

  const [, setName] = useState("");
  const [invitation, setInvitation] = useState<InvitationType | undefined>(undefined);

  useEffect(() => {
    if (code) {
      readInvitation(Number(code)).then((response) => {
        console.log('response', response)
        if (response && 'error' in response) {
          console.log('error', response.error)
        } else {
          setInvitation(response);
          console.log('name', response)
        }
      })
    }
  }, [code]);


  useEffect(() => {
    const path = window.location.pathname;
    const name = path?.split("/")[1].split("-").join(" ");
    setName(name);
  }, []);

  useEffect(() => {
    if (isOpen) {
      StartAnimation();
    }
  }, [isOpen]);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleAudio = () => {
    if (audio?.current) {
      if (audio?.current?.paused) {
        audio?.current?.play();
        setIsPlaying(true);
      } else {
        audio?.current?.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (!audio?.current) {
      return;
    }
    //audio?.current?.play();
  }, [audio]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          isOpen && {
            opacity: 1,
            display: "block",
            transition: { duration: 0.5, opacity: { delay: 1.2 } }, //1.2
          }
        }
        className="max-w-xl w-full h-full opacity-0"
      >
        <div className="absolute w-full h-full left-0 top-0 bg-blue-300 -z-10" />
        <div className="absolute w-full h-full left-0 top-0 flex justify-center">
          <div
            className="w-full max-w-xl h-[112vh] -z-10"
            style={{
              backgroundImage: "url('/images/welcome.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionX: "46%",
              backgroundSize: "cover",
              filter: "brightness(0.3)",
            }}
          />
        </div>
        {/* WELCOME */}
        {isOpen && (
          <React.Fragment>
            <button
              onClick={handleAudio}
              className="fixed right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-blue-400 shadow-xl outline-none p-2 z-10"
            >
              {isPlaying ? (
                <img src="/icons/pause.png" alt="" className="w-full h-full" />
              ) : (
                <img src="/icons/play.png" alt="" className="w-full h-full" />
              )}
            </button>
            <Navbar
              refHome={refHome}
              refBride={refBride}
              refLocation={refLocation}
              refSchedule={refSchedule}
              refComment={refComment}
            />
            <Opening refHome={refHome} />
            <Introduction refBride={refBride} />
            <Location refLocation={refLocation} />
            <Schedule refSchedule={refSchedule} />
            <DressCode />
            <Gift />
            {invitation ? <Rsvp name={invitation.name} tickets={invitation.tickets} phone={invitation.phone} /> : null}
            <Memorable windowWidth={windowWidth} refImage={refImage} />
          </React.Fragment>
        )}
      </motion.div>
    </React.Fragment>
  );
}
