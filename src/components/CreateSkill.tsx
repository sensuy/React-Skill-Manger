import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

interface IcreateTast {
    skills: any;
    setskills: React.Dispatch<React.SetStateAction<any[]>>
}

const Createskill = (props: IcreateTast) => {

    const { skills, setskills } = props;
    const [skill, setskill] = useState({
        name: '',
        id: '',
        status: 'todo',
    })
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (!skill.name) return toast('skill name is required', { icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />, className: "font-bold" })
        if (skills.find((t: any) => t.name === skill.name)) return toast('skill already exists', { icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />, className: "font-bold" })
        if (skill.name.length < 3) return toast('skill name must be at least 3 characters', { icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />, className: "font-bold" })
        if (skill.name.length > 20) return toast('skill name must be less than 20 characters', { icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />, className: "font-bold" })

        setskills((prev) => {
            const list = [...prev, skill]

            localStorage.setItem('skills', JSON.stringify(list))

            return list
        })
        setskill({
            name: '',
            id: '',
            status: 'todo',
        })

        toast.success('skill created successfully', { icon: <i className="fa-solid fa-party-horn text-green-900 font-bold" />, className: "font-bold" })
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => {
                    setskill({ ...skill, name: e.target.value, id: uuidv4() })
                }}
                type="text"
                value={skill.name}
                className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
            />
            <button className="bg-indigo-500 rounded-md px-4 h-12 text-white">Create</button>
        </form>
    )
};

export default Createskill;