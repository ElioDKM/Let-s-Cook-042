

export default function Footer() {
    return (
        <footer className="text-white">
            <div>
                <img src="src\assets\img\footer.svg" alt="design" />
            </div>
            <div className="p-2 flex bg-red-700 flex-wrap justify-center items-center gap-5">
                <div className="max-w-xs">
                    <img src="src\assets\img\download.jpg" alt="" />
                </div>
                <div className="max-w-md flex flex-col justify-center items-center p-4">
                    <h2 className="font-semibold text-3xl m-4">Téléchargez Notre Livre de Recettes Gratuit !</h2>
                    <p className="mb-3">Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !</p>
                    <button type="button" className=" w-full text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Télécharger maintenant</button>
                </div>
            </div>
            <div className="bg-red-950 text-center p-4">
                <p>©️ Copyright 2024 Let's Cook</p>
            </div>
        </footer>
    )
}