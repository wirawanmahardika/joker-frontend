import { NavLink } from "react-router-dom";
import videoPng from '../assets/video.png'

export default function Learn() {
    return <div className="container mx-auto p-5 min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold mt-10">Belajar materi terkait</h2>

        <div className="flex flex-col mt-7 shadow-xl">
            <Card title="Setup Project React" />
            <Card title="Hashing Algorithm dengan BCRYPT" />
            <Card title="Menggunakan ORM untuk ambil data di database" />
        </div>
    </div>
}

function Card({title}: {title: string}) {
    return <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">{title}</div>
        <div className="collapse-content text-sm grid md:grid-cols-4">
            <div className="card bg-base-200 shadow-sm">
                <figure>
                    <img
                        src={videoPng}
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
}