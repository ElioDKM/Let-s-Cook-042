import { HeartIcon as LikeSolide } from '@heroicons/react/24/solid'



export default function ButtonLike({ setLikePage, likePage }) {


    function handleLikePage() {
        if (!likePage) {
            setLikePage(true)
        }else{
            setLikePage(false)
        }
    }

    return (
        <button className="w-6 " onClick={ () => handleLikePage()}>
            {!likePage ? <LikeSolide className="w-11" /> : <LikeSolide className="w-11 text-red-800" />}
        </button>
    )        
}