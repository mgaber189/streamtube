import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetcher } from "@/lib/Fetcher";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
const GenreDropDown = async () => {
  const data = await fetcher("genre/movie/list", [{ name: "page", value: "1" }]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
        Genre <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((genre) => (
          <DropdownMenuItem key={genre?.id}>
            <Link href={`/genre/${genre?.id}?genre=${genre.name}`}>
              {genre?.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDown;
