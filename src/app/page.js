import CauroselContainer from "@/components/CauroselContainer";
import MovieContainer from "@/components/MovieContainer";

export default async function Home() {
  return (
    <main>
      <CauroselContainer/>
      <MovieContainer  title="Now Playing"/>
      <MovieContainer  title="Up Coming"/>
      <MovieContainer title="Top Rated"/>
      <MovieContainer title="Popular"/>
    </main>
  );
}
