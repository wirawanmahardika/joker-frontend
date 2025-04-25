import { NavLink } from "react-router-dom";
import videoPng from '../assets/video.png'

export default function Home() {
    return <div className="container mx-auto p-5">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10">Progress Pembuatan Aplikasi</h2>

        <div className="grid gap-y-3 md:grid-cols-3 gap-x-12 mt-10 items-start">
            <span className="block font-semibold text-lg md:text-2xl md:sticky top-32 left-0">Klik Pada progress untuk belajar</span>

            <ul className="steps steps-vertical">
                <li className="step md:text-xl hover:text-primary cursor-pointer step-primary">Register</li>
                <li className="step md:text-xl hover:text-primary cursor-pointer step-primary">Choose plan</li>
                <li className="step md:text-xl hover:text-primary cursor-pointer">Receive Product</li>
                <li className="step md:text-xl hover:text-primary cursor-pointer">Purchase</li>
                <li className="step md:text-xl hover:text-primary cursor-pointer">Receive Product</li>
                <li className="step md:text-xl hover:text-primary cursor-pointer italic">Coming Soon...</li>
            </ul>

            <div className="grid grid-cols-1 gap-y-6">
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
    </div>
}