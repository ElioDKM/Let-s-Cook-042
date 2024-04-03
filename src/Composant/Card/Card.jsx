import Star from "./Star";
import Like from "./Like";

export default function Card({ data }) {


  return (
    <section className="flex flex-wrap gap-2.5 justify-center ">
      {data.map((element) => (
          <article className="shrink grow basis-72 m-2 shadow-lg rounded-xl" key={element.id}>
            <div className="relative">
              <img src={element.imageUrl} alt={element.title} className="rounded-xl"/>
              <Like element={element}></Like>
            </div>
            <div className="p-3" >
              <h3 className="text-xl text-red-800">{element.title}</h3>
              <div className="flex gap-2">          
                <div className="relative w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-7 h-6 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <p>{element.author}</p>
                <Star difficulty={element.difficulty} />
                <p className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">{element.category}</p>
              </div>
              <p>{element.description}</p>
              <div className="flex justify-end">
                <a href="#">En savoir plus</a>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}