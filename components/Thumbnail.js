import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image"
import { forwardRef } from "react";



const Thumbnail = forwardRef(({ result }, ref) => {
    console.log("Yeh Thumbnail hai", result);
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    // var { backdrop_path } = result;
    // console.log("yeh image location", backdrop_path);
    var url = `${BASE_URL}${result.backdrop_path}`;
    // console.log("yeh url hai re baba ", url);
    console.log('yeh url hai', url);

    return (
        <div
            ref={ref}
            className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image alt={result.backdrop_path} layout='responsive' src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} height={1000} width={1920} />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type}+`}{" "}
                    {result.release_date || result.first_air_date}:{" "}
                    <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}

                </p>

            </div>
        </div>
    )
}
)

export default Thumbnail
