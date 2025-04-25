import { NavLink } from "react-router-dom";

export default function Watch() {
    return <div className="container mx-auto p-5 min-h-screen">
        <div className="grid md:grid-cols-3 gap-5">
            <div className="col-span-2 flex flex-col">
                <video className="w-full shadow-md border border-base-300" controls>
                    <source src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="flex flex-col py-5">
                    <h2 className="font-bold text-2xl">Tutorial menggunakan algoritma hashing bcrypt pada laravel</h2>
                    <span className="mt-5 text-lg font-semibold">Source Belajar Tambahan : </span>
                    <ul className="text-sm">
                        <li>HTML : <a className="text-blue-600" href="https://www.w3schools.com/">w3school</a></li>
                        <li>CSS : <a className="text-blue-600" href="https://www.w3schools.com/">w3school</a></li>
                        <li>Javascript : <a className="text-blue-600" href="https://www.w3schools.com/">w3school</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-y-8">
                <span className="font-bold text-2xl">Next Materi</span>
                <div className="card bg-base-200 shadow-sm">
                    <figure>
                        <img
                            src="/video.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Setup Project</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad recusandae, aperiam commodi, tenetur nobis, consectetur corrupti debitis deleniti adipisci iste eos sunt saepe dolore similique. Rerum praesentium nulla laborum!</p>
                        <div className="card-actions justify-end">
                            <NavLink to={'/watch/123'} className="btn btn-primary">Watch</NavLink>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-sm">
                    <figure>
                        <img
                            src="/video.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Setup Project</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad recusandae, aperiam commodi, tenetur nobis, consectetur corrupti debitis deleniti adipisci iste eos sunt saepe dolore similique. Rerum praesentium nulla laborum!</p>
                        <div className="card-actions justify-end">
                            <NavLink to={'/watch/123'} className="btn btn-primary">Watch</NavLink>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-sm">
                    <figure>
                        <img
                            src="/video.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Setup Project</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad recusandae, aperiam commodi, tenetur nobis, consectetur corrupti debitis deleniti adipisci iste eos sunt saepe dolore similique. Rerum praesentium nulla laborum!</p>
                        <div className="card-actions justify-end">
                            <NavLink to={'/watch/123'} className="btn btn-primary">Watch</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}