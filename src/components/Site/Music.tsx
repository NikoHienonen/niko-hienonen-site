export const Music = () => {
  const iframeStyles = "rounded-md lg:w-1/4";
  return (
    <div className="w-full flex flex-col justify-center gap-12">
      <span className="font-jacques uppercase text-4xl w-full text-center">
        Music
      </span>
      <div className="flex  justify-center gap-5 mb-12 flex-wrap">
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/3sguqyZvGSBddsp4tKHUWF?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={iframeStyles}
          height="352"
          src="https://www.youtube.com/embed/_HWA64j6kUA?si=8aP0XHnjuZfkvHvn"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/0AEaCeXJglnV0nlKX5tyzq?utm_source=generator&theme=0"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/7hy1oBxABVJ7frFxdSyFqK?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/4wxhOnoeDu0oO8rkJuhVC2?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/7lxc6FxWz4ZYO7OgOdXeWV?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className={iframeStyles}
          src="https://open.spotify.com/embed/album/0GiHQE6GUQeIjq3qaEj2eF?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
