import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const iconStyles =
    "text-2xl cursor-pointer hover:scale-105 hover:text-slate-200";
  return (
    <div className="flex mt-5 gap-4 flex-col items-center text-white text-center h-min justify-center font-jacques uppercase tracking-wider md:pt-10">
      <Link to="/">
        <p className="text-5xl cursor-pointer">Niko Hienonen</p>
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <p className="">
          Composer | Producer <span className="invisible md:visible">|</span>
        </p>
        <p className=""> Sound Designer | Writer</p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <a
          target="_blank"
          href="https://open.spotify.com/artist/1ygbp7sr11sSTJmXNh7sJG?si=M4BxGHggSNyhlLFVOXxtDw"
        >
          <FontAwesomeIcon className={iconStyles} icon={faSpotify} />
        </a>
        <a target="_blank" href="https://www.youtube.com/@nikohienonen198">
          <FontAwesomeIcon className={iconStyles} icon={faYoutube} />
        </a>
        <a target="_blank" href="https://www.instagram.com/big_nikoh/">
          <FontAwesomeIcon className={iconStyles} icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};
