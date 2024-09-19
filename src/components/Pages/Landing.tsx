import { BlackButton } from "components/common/BlackButton";
import { Glitch } from "components/common/Glitch";
import { Link } from "react-router-dom";
import { routes } from "router";

export const Landing = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-20 text-white uppercase tracking-wide font-jacques gap-6">
      <Glitch title="EXISTENTIAL HORROR" />
      <p className="md:w-1/2 px-2 md:text-xl text-center">
        An OST about a gothic town rife with strange creatures that are looking
        to awaken something called "The Suneater". Will you be the one to stop
        them?
      </p>
      <Link to={`${routes.existentialHorror}/${1}`}>
        <BlackButton title="Face your fears" arrow="right" />
      </Link>
      <p>Or</p>
      <Link to={routes.music}>
        <BlackButton title="Continue to site" arrow="right" colorInverse />
      </Link>
    </div>
  );
};
