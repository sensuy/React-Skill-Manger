import { useEffect, useState } from "react"
import { useDrag, useDrop } from 'react-dnd'
import toast from 'react-hot-toast';
import { SkillColorsEnum } from "../enums/skill-colors.enum";
import { useMySkill } from "../context/MySkillContext";


interface IcreateSkill {

    mySkills: any;
    setMySkills: React.Dispatch<React.SetStateAction<any>>
}

interface ISection {
    title: string;
    color: string;
    skills: string[];
    setSkills: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ListSkill = () => {

    const  mySkills  = useMySkill();

    console.log(mySkills);

    useEffect(() => {
        setBasic(mySkills.basic)
        setIntermediate(mySkills.intermediate)
        setAdvanced(mySkills.advanced)
        setInterested(mySkills.interested)
    }, [mySkills]);
    

    const [basic, setBasic] = useState<any>(mySkills.basic)
    const [intermediate, setIntermediate] = useState<any>(mySkills.intermediate)
    const [advanced, setAdvanced] = useState<any>(mySkills.advanced)
    const [interested, setInterested] = useState<any>(mySkills.interested)


    useEffect(() => {
        setBasic(mySkills.basic)
        setIntermediate(mySkills.intermediate)
        setAdvanced(mySkills.advanced)
        setInterested(mySkills.interested)
    }, [mySkills]);



    const sectionsArray: ISection[] = [
        {
            title: 'basic',
            color: SkillColorsEnum.BASIC,
            skills: basic,
            setSkills: setBasic
        },
        {
            title: 'intermediate',
            color: SkillColorsEnum.INTERMEDIATE,
            skills: intermediate,
            setSkills: setIntermediate
        },
        {
            title: 'advanced',
            color: SkillColorsEnum.ADVANCED,
            skills: advanced,
            setSkills: setAdvanced
        },
        {
            title: 'intersted in',
            color: SkillColorsEnum.INTERESTED,
            skills: interested,
            setSkills: setInterested
        }
    ]
    return (
        <div className="flex gap-16 md:gap-8 flex-wrap justify-center">
            {sectionsArray.map((section, index) => {
                return (
                    <Section {...section} key={index} />
                )
            })}
        </div>
    )
};





const Section = (sectionProps: ISection) => {
    const { color, title, skills, setSkills } = sectionProps;

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "skills",
        drop: (item: any) => {
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    return (
        <div ref={drop} className={"w-64 rounded-md mt-2 " + (isOver ? 'bg-slate-200' : "")}>
            <Header text={title} bg={`bg-${color}`} count={0} />
            {skills.map((skill: any, index: number) => (
                <Skilled skilled={skill} setSkill={setSkills} key={index} />
            ))}
        </div>
    )
}

interface IHeaderProps {
    text: string;
    bg: string;
    count: number;
}

const Header = (props: IHeaderProps) => {
    const { text, bg, count } = props;

    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}{" "}
            <div className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-black">
                {count}
            </div>
        </div>
    )
}


function Skilled(props: any) {
    const { skilled, setSkill } = props;

    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: skilled },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className={
            `relative flex items-center bg-zinc-200 p-4 mt-8 shadow-md rounded-lg cursor-grab ${isDragging ? 'opacity-50' : 'opacity-100'}`
        }>
            <p className="text-sm">{skilled}</p>
            <i className="fas fa-trash ml-auto text-red-500 cursor-pointer" onClick={() => {
                setSkill((prev: any) => {
                    const list = prev.filter((t: any) => t !== skilled)
                    localStorage.setItem('tasks', JSON.stringify(list))
                    toast('Task deleted successfully', { icon: <i className="fa-solid fa-bomb text-red-900 font-bold" />, className: "font-bold" })
                    return list
                })
            }}></i>
        </div>
    )
}
