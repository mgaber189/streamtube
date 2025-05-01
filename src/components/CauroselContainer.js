import React from 'react'
import MovieCarosel from './MovieCarosel'
import { fetcher } from '@/lib/Fetcher'

async function CauroselContainer() {
    const movie = await fetcher("discover/movie",[{name:"page",value:"1"}])
  return (
    <MovieCarosel movie={movie}/>
  )
}

export default CauroselContainer
