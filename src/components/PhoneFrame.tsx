import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Device chrome wrapping a real app screenshot. */
export function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: PhoneFrameProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[2rem] border-[3px] border-[#1a1b2e] bg-[#0d0e23] shadow-[0_24px_50px_rgba(13,14,35,0.35)]",
        "ring-1 ring-white/10",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
      <Image
        src={src}
        alt={alt}
        width={470}
        height={1024}
        priority={priority}
        className="h-auto w-full select-none"
      />
    </div>
  );
}
