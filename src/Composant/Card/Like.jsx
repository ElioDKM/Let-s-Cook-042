import { useState } from "react"
import { HeartIcon as LikeSolide } from '@heroicons/react/24/solid'
import { HeartIcon as LikeOutline } from '@heroicons/react/24/outline'


export default function Like() {
    const [isLike, setIsLike] = useState(false)

    function handleLike() {
        if (!isLike) {
            setIsLike(true)
        }else{
            setIsLike(false)
        }
    }

    return (
        <button className="w-6 absolute top-1 right-3" onClick={ () => handleLike()}>
            {!isLike ? <LikeOutline className="w-7" /> : <LikeSolide className="w-7 text-red-800" />}
        </button>
    )
}