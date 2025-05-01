import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AxiosAuth } from "../utils/axios";
import { stepType } from "../types/stepType";
import { tutorialType } from "../types/tutorialType";

export default function Home() {
    useAuth()

    const [progressClicked, setProgressClicked] = useState(false)
    const [steps, setStep] = useState<stepType[]>([])
    const [tutorials, setTutorials] = useState<tutorialType[]>([])

    useEffect(() => {
        AxiosAuth.get("/steps")
            .then(res => { setStep(res.data.data); })
            .catch(() => { console.log("terjadi kesalahan"); })
    }, [])

    const getTutorials = (idStep: number) => {
        if (!progressClicked) setProgressClicked(true)
        AxiosAuth.get("/tutorials?id_step=" + idStep)
            .then(res => { setTutorials(res.data.data); })
            .catch((err: any) => { if (err.status === 404) setTutorials([]); console.log("Terjadi kesalahan"); })
    }

    return <div className="container mx-auto p-5">

        <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10">Progress Pembuatan Aplikasi</h2>

        <div className="grid gap-y-3 grid-cols-1 md:grid-cols-2 gap-x-12 mt-10 items-start">
            <span className="hidden md:block font-semibold text-lg md:text-2xl md:sticky top-32 left-0 md:col-span-2">Progress</span>

            <ul className="steps steps-vertical">
                {steps.map(s => <li key={s.id} onClick={() => getTutorials(s.id)} className={`step !text-left md:text-xl hover:text-primary cursor-pointer ${s.status && "step-primary"}`}>{s.name}</li>)}
            </ul>

            {tutorials.length ?
                <div className="grid md:grid-cols-2 gap-y-6 gap-8">
                    {tutorials.map(t => {
                        return <div key={t.id} className="card bg-base-200 shadow-sm">
                            <figure>
                                <img className="w-full"
                                    src={t.thumbnail}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title capitalize lg:text-xl">{t.name}</h2>
                                <p className="lg:text-base">{t.description}</p>
                                <div className="card-actions justify-end">
                                    <NavLink to={`/watch/${t.id_step}/tutorial/${t.id}`} className="btn btn-primary">Watch</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                :
                <div className="grid place-items-center h-32 md:h-full bg-base-200 rounded p-5">
                    <span className="font-medium text-lg m-auto italic">{progressClicked ? "Tutorial tidak tersedia pada progress ini" : "Klik pada progress untuk melihat tutorial"}</span>
                </div>
            }
        </div>
    </div>
}