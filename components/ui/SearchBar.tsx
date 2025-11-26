"use client";

import { Search } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/Button"

interface SearchBarProps {
    placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
    const [term, setTerm] = React.useState("");

    function handleSearchClick() {
        console.log("검색: ", term);
    }

    return (
        <div className="relative flex flex-1 justify-center items-center w-full py-4">
            <input className="w-full max-w-xl h-[45px] rounded-md outline-none border border-[#e0d6c5] py-[9px] pl-4 mr-3 mb-5 text-md outline-2 placeholder:text-brown/50"
                placeholder={placeholder}
                value={term}
                onChange={(e) => {
                    setTerm(e.target.value);
                }}
            >
            </input>
            <Button variant="search" onClick={handleSearchClick} className="mb-5">
                <Search className="w-5 h-5 mr-2 text-white" />
                검색
            </Button>
        </div>
    )
}