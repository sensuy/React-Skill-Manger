import { useState } from "react";
import { SkillColorsEnum } from "../enums/skill-colors.enum";

interface Skill {
    initials: string;
    bg: string;
    skills: string[];
}

const Skills = () => {

    const skillsList: Skill[] = [
        {
            initials: 'A',
            bg: 'bg-blue-500',
            skills: ['Angular', 'AngularJS', 'AWS', 'Azure']
        },
        {
            initials: 'B/C/D',
            bg: 'bg-green-500',
            skills: ['Batch Apex', 'BDD', 'BI']
        },
        {
            initials: 'E/F/G/H/I',
            bg: 'bg-yellow-500',
            skills: ['Einstein Automate', 'Einstein Bot', 'ElasticSearch']
        },
        {
            initials: 'J/K/L/M',
            bg: 'bg-red-500',
            skills: ['Java', 'Javascript', 'Jenkins', 'Jest']
        },
        {
            initials: 'N/O/P/Q/R',
            bg: 'bg-purple-500',
            skills: ['NestJS', 'New Relic', 'Next.js']
        },
        {
            initials: 'S',
            bg: 'bg-orange-500',
            skills: ['Salesforce Analytics', 'Salesforce APIs', 'Salesforce AppExchange']
        },
        {
            initials: 'T/U/V/W/Z',
            bg: 'bg-teal-500',
            skills: ['Tailwind', 'Terraform', 'Testes automatizados']
        }
    ]

    return (
        <div className="flex gap-16 md:gap-8 flex-wrap justify-center">
            {skillsList.map((skill, index) => (
                <Section skill={skill} key={index} />
            ))}
        </div>
    )
};

interface SectionProps {
    skill: Skill;
}


const Section = (props: SectionProps) => {
    return (
        <div className={"w-64 rounded-md mt-2"}>

            <Header text={props.skill.initials} bg={props.skill.bg} count={props.skill.skills.length} />
            {props.skill.skills.map((skill, index) => (
                <Resources skill={skill} skills={props.skill.skills} key={index} />
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
        <div className={`bg-gray-700 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text}{" "}
            <div className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-black">
                {count}
            </div>
        </div>
    )
}

interface ResourcesProps {
    skill: string;
    skills: string[];
}



const Resources = (props: ResourcesProps) => {

    const [backGroundColor, setBackGroundColor] = useState('bg-zinc-200')

    const clicked = () => { 
        console.log('Ahaa');
        setBackGroundColor('bg-blue-500')
        
     }

     const options = [
        {
            label: 'basic',
            value: 'BASIC',
            color: SkillColorsEnum.BASIC
        },
        {
            label: 'intermidiate',
            value: 'INTERMIDIATE',
            color: SkillColorsEnum.INTERMIDIATE
        },
        {
            label: 'advanced',
            value: 'ADVANCED',
            color: SkillColorsEnum.ADVANCED
        },
        {
            label: 'intersted',
            value: 'INTERESTED',
            color: SkillColorsEnum.INTERESTED
        }
     ]
    return (
        <div className="relative group">
            <div className="absolute inset-x-0 top-[-20px] hidden group-hover:flex justify-between items-center">
                {/* Render your buttons here, they will be shown on hover */}
                {
                    options.map((option, index) => (
                        <button key={index} className={`p-1 text-white text-xs rounded shadow transition ease-in-out duration-300 ${option.color}`}>{option.label}</button>
                    ))
                }
                <button className="p-1 bg-blue-500 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                onClick={clicked}>advanced</button>
                <button className="p-1 bg-yellow-500 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">intermidiate</button>
                <button className="p-1 bg-red-500 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">basic</button>
                <button className="p-1 bg-purple-500 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">intersted</button>
            </div>

            <div className={
                `relative flex items-center ${backGroundColor} p-4 mt-8 shadow-md rounded-lg cursor-pointer hover:bg-zinc-300`
            }>
                <p className="text-sm">{props.skill}</p>
                <i className="fas fa-trash ml-auto text-red-500 cursor-pointer" onClick={() => {

                }}></i>
            </div>
        </div>
    )
}

export default Skills;