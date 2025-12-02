"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold
                 text-brown bg-white border border-[#E5DED5]
                 rounded-full shadow-sm hover:bg-[#F5F1EB] transition"
    >
      <ChevronLeft className="w-4 h-4 text-brown" />
      뒤로
    </button>
  );
}
