import Wave from "../../assets/wave";

export default function MainLayout({
  children,
  height = "min-h-screen",
  className = "",
  backgroundColor = "bg-white",
}: {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  backgroundColor?: string;
}) {
  return (
    <section
      className={`relative w-full ${height} flex flex-col justify-center items-center ${backgroundColor} p-20 px-10 ${className}`}
    >
      <div className={`w-full h-full -top-10 overflow-hidden absolute z-0`}>
        <Wave />
      </div>
      {children}
    </section>
  );
}
