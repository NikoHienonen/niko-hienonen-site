import { SongInfo } from "components/Album/SongInfo";
import { BlackButton } from "components/common/BlackButton";
import { EHData } from "data/EHData";
import { useNavigate, useParams } from "react-router-dom";

export const EH = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { songIndex } = params;
  const index = songIndex ? Number(songIndex) - 1 : 0;
  const { name, spotifySource, info } = EHData[index];
  return (
    <div className="w-full text-white flex flex-col px-2 md:px-12 lg:px-36">
      <BlackButton title="Back" arrow="left" onClick={() => navigate("/")} />
      <div className="pt-12 md:pt-24 flex flex-col justify-center items-center  gap-12">
        <p className="font-amsterdam text-center uppercase tracking-wide text-4xl">
          You are listening to:{" "}
          <span className="font-jacques italic">Existential Horror</span>
        </p>
        <div className="animate-fadeIn">
          <SongInfo
            name={`${index + 1}. ${name}`}
            spotifySource={spotifySource}
            info={info}
            next={EHData[index + 1]?.name ?? null}
            previous={index === 0 ? null : EHData[index - 1].name}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};
