export default function Images({
  url,
  id,
  onClick,
}: {
  url: string;
  id: number;
  onClick: () => void;
}) {
  return (
    <div
      className="relative max-w-[300px] max-h-[300px] overflow-hidden group hover:cursor-pointer rounded-xl"
      id={id.toString()}
      onClick={onClick}
    >
      <img
        src={url}
        alt=""
        className="group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-xl">
        Open
      </div>
    </div>
  );
}
