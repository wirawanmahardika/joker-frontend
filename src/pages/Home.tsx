import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AxiosAuth } from "../utils/axios";
import { stepType } from "../types/stepType";
import { tutorialType } from "../types/tutorialType";

export default function Home() {
    useAuth()

    const [steps, setStep] = useState<stepType[]>([])
    const [tutorials, setTutorials] = useState<tutorialType[]>([])

    useEffect(() => {
        AxiosAuth.get("http://localhost:3000/steps")
            .then(res => {
                setStep(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const getTutorials = (idStep: number) => {
        AxiosAuth.get("http://localhost:3000/tutorials?id_step=" + idStep)
            .then(res => {
                setTutorials(res.data.data);
            }).catch((err: any) => {
                if (err.status === 404) setTutorials([]);
                console.log(err);
            })
    }

    return <div className="container mx-auto p-5">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10">Progress Pembuatan Aplikasi</h2>

        <div className="grid gap-y-3 md:grid-cols-3 gap-x-12 mt-10 items-start">
            <span className="block font-semibold text-lg md:text-2xl md:sticky top-32 left-0">Klik Pada progress untuk belajar</span>

            <ul className="steps steps-vertical">
                {steps.map(s => <li key={s.id} onClick={() => getTutorials(s.id)} className={`step md:text-xl hover:text-primary cursor-pointer ${s.status && "step-primary"}`}>{s.name}</li>)}
            </ul>

            <div className="grid grid-cols-1 gap-y-6">
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
        </div>
    </div>
}