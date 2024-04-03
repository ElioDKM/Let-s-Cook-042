import { useState, useEffect } from "react"
import { HeartIcon as LikeSolide } from '@heroicons/react/24/solid'
import { HeartIcon as LikeOutline } from '@heroicons/react/24/outline'

export default function Like({ element }) {
  const [isLike, setIsLike] = useState(element.isLike || false)

  function handleLike() {
    setIsLike((prevIsLike) => !prevIsLike);
  }

  useEffect(() => {
    element.isLike = isLike;
  }, [isLike]);

  return (
    <button className="w-6 absolute top-1 right-3" onClick={handleLike}>
      {!isLike ? <LikeOutline className="w-7" /> : <LikeSolide className="w-7 text-red-800" />}
    </button>
  );
}