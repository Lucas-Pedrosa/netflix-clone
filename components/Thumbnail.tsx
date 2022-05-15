import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}

export const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image 
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path || movie.backdrop_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill" />
    </div>
  )
}
/*relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 */
/*rounded-sm object-cover md:rounded */