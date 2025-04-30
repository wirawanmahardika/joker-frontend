import { NavLink, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { AxiosAuth } from "../utils/axios";
import { tutorialType } from "../types/tutorialType";
import dayjs from "dayjs";
import { tutorialTambahanType } from "../types/tutorialTambahanType";


export default function Watch() {
    useAuth()
    const { id_step, id_tutorial } = useParams()

    const [tutorial, setTutorial] = useState<tutorialType>()
    const [tutorials, setTutorials] = useState<tutorialType[]>([])
    const [tutorialTambahans, setTutorialTambahans] = useState<tutorialTambahanType[]>([])

    useEffect(() => {
        AxiosAuth.get("/tutorial/" + id_tutorial)
            .then(res => { setTutorial(res.data.data) })
            .catch(() => { console.log("Terjadi kesalahan"); })
    }, [])

    useEffect(() => {
        if (tutorial?.created_at) {
            AxiosAuth.get("/tutorials?id_step=" + id_step)
                .then(res => {
                    const tutorials = res.data.data as tutorialType[]
                    setTutorials(tutorials.filter(t => dayjs(t.created_at).isAfter(tutorial?.created_at)));
                }).catch((err: any) => {
                    if (err.status === 404) setTutorials([]);
                    console.log("Terjadi kesalahan");
                })
        }
    }, [tutorial])

    useEffect(() => {
        if (tutorial?.created_at) {
            AxiosAuth.get(`/tutorial/${id_tutorial}/tutorial-tambahans`)
                .then(res => {
                    const tutorialTambahans = res.data?.data as tutorialTambahanType[] | undefined
                    setTutorialTambahans(tutorialTambahans || [])
                }).catch((err: any) => {
                    if (err.status === 404) setTutorialTambahans([]);
                    console.log("Terjadi kesalahan");
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
                    <ul className="text-sm list-disc list-inside">
                        {tutorialTambahans.map(t => <li><a className="text-blue-600" href={t.link}>{t.name}</a></li>)}
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