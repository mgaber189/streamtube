import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { fetcher } from "@/lib/Fetcher";
import Link from "next/link";

async function DropDown() {
  const data = await fetcher("genre/movie/list", [
    { name: "page", value: "1" },
  ]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center gap-2 text-xl">
        Type <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((e) => {
          return (
            <Link href={ { pathname:`/${e.id}/type/${e.name}`}} key={e?.id}>
              <DropdownMenuItem key={e.id}>{e.name}</DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
