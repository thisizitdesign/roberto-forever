interface Parallax {
  image: string;
  height?: string;
  position?: string;
}

export default function Parallax({
  image,
  height = "h-[400px]",
  position = "center",
}: Parallax) {
  return (
    <section
      className={`relative ${height} overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: position,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}