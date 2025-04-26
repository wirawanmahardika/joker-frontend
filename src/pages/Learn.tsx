import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AxiosAuth } from "../utils/axios";
import { stepType } from "../types/stepType";
import { tutorialType } from "../types/tutorialType";

export default function Learn() {
    useAuth()

    const [steps, setStep] = useState<stepType[]>([])
    useEffect(() => {
        AxiosAuth.get("http://localhost:3000/steps")
            .then(res => {
                setStep(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])


    return <div className="container mx-auto p-5 min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold mt-10">Belajar materi terkait</h2>

        <div className="flex flex-col mt-7 shadow-xl">
            {steps.map(s => <Card key={s.id} id={s.id} title={s.name} />)}
        </div>
    </div>
}

function Card({ id, title }: { id: number; title: string; }) {
    const [tutorials, setTutorials] = useState<tutorialType[]>([])

    useEffect(() => {
        AxiosAuth.get("http://localhost:3000/tutorials?id_step=" + id)
            .then(res => {
                setTutorials(res.data.data);
            }).catch((err: any) => {
                if (err.status === 404) setTutorials([]);
                console.log(err);
            })
    }, [])

    return <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">{title}</div>
        <div className="collapse-content text-sm grid md:grid-cols-3 lg:grid-cols-4 gap-5">
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
}