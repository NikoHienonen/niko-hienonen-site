import { BlackButton } from "components/common/BlackButton";
import { Link } from "react-router-dom";
import { routes } from "router";

export interface SongInfoProps {
  name: string;
  spotifySource: string;
  info: string;
  next?: string | null;
  previous?: string | null;
  index?: number;
}

export const SongInfo = ({
  name,
  spotifySource,
  info,
  next,
  previous,
  index = 0,
}: SongInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5">
      <iframe
        className="rounded-md h-32 md:h-96"
        src={spotifySource}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <div className="flex flex-col gap-5">
        <p className="uppercase tracking-widest font-amsterdam text-3xl">
          {name}
        </p>
        <p className="font-jacques text-xl">{info}</p>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
          {previous && previous !== name && (
            <Link to={`${routes.existentialHorror}/${index}`}>
              <BlackButton title={`Previous: ${previous}`} arrow="left" />
            </Link>
          )}
          {next ? (
            <Link to={`${routes.existentialHorror}/${index + 2}`}>
              <BlackButton title={`Up next: ${next}`} arrow="right" />
            </Link>
          ) : (
            <Link to={routes.music}>
              <BlackButton
                title="Explore other music by Niko Hienonen"
                arrow="right"
                colorInverse
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
