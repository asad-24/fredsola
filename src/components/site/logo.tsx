import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group relative block h-12 w-40 transition-opacity hover:opacity-80 sm:w-44 ${className}`}
      aria-label="FKSola Financial home"
    >
      <Image
        src="/images/logo-cropped.png"
        alt="FKSola Financial"
        fill
        sizes="(max-width: 640px) 160px, 176px"
        className="object-contain object-center"
        priority
      />
    </Link>
  );
}
