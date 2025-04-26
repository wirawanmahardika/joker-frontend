import { NavLink, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AxiosAuth } from "../utils/axios";
import { tutorialType } from "../types/tutorialType";
import dayjs from "dayjs";


export default function Watch() {
    useAuth()
    const { id_step, id_tutorial } = useParams()

    const [tutorial, setTutorial] = useState<tutorialType>()
    const [tutorials, setTutorials] = useState<tutorialType[]>([])

    useEffect(() => {
        AxiosAuth.get("/tutorial/" + id_tutorial)
            .then(res => {
                setTutorial(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if (tutorial?.created_at) {
            AxiosAuth.get("http://localhost:3000/tutorials?id_step=" + id_step)
                .then(res => {
                    const tutorials = res.data.data as tutorialType[]
                    setTutorials(tutorials.filter(t => dayjs(t.created_at).isAfter(tutorial?.created_at)));
                }).catch((err: any) => {
                    if (err.status === 404) setTutorials([]);
                    console.log(err);
                })
        }
    }, [tutorial])


    return <div className="container mx-auto p-5 min-h-screen">
        <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 flex flex-col">
                <video className="w-full shadow-md border border-base-300" controls>
                    {tutorial?.video && <source src={tutorial.video} type="video/mp4" />}
                </video>

                <div className="flex flex-col py-5">
                    <h2 className="font-bold text-2xl">{tutorial?.name}</h2>
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

                {tutorials.map(t => {
                    return <div key={t.id} className="card bg-base-200 shadow-sm">
                        <figure>
                            <img className="w-full"
                                src={t.thumbnail}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{t.name}</h2>
                            <p>{t.description}</p>
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