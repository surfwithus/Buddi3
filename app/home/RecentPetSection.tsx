import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { pets } from "@/mock-data/pets";

const recentAnimals = pets.slice(-3);

export default function RecentPetSection() {
    return (
        <section className="px-40 py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-[45px] font-bold mb-4 text-foreground">
                최근 등록된 보호 동물
              </h2>
              <p className="text-xl">
                새롭게 보호소에 등록된 동물들을 확인하세요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {recentAnimals.map((animal) => (
                <Link key={animal.id} href={`/detail/${animal.id}`}>
                  <div className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow transition-all hover:shadow-xl">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={animal.imageSrc}
                        alt={animal.breed}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                        {animal.breed}
                      </h4>
                      <p className="mb-2 text-sm text-muted-foreground">
                        <MapPin className="mr-1 inline h-4 w-4" />
                        {animal.location}
                      </p>
                      <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                        {animal.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </section>
    );
}