import { ReactNode, createContext, useContext, useState } from "react";

const defaultSkillValues = {
    basic: [],
    intermediate: [],
    advanced: [],
    interested: []
};

const MySkillContext = createContext(defaultSkillValues);
const UpdateMySkillContext = createContext({});

export const useMySkill = () => {
    return useContext(MySkillContext);
}

export const useMySkillUpdate = () => {
    return useContext(UpdateMySkillContext);
}

export const SkillProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mySkills, setMySkills] = useState({
        basic: [],
        intermediate: [],
        advanced: [],
        interested: []
    })

    const updateMySkills = (skills: any) => {
  
        setMySkills((prev: any) => ({ ...prev, [skills.label]: [...prev[skills.label], skills.value] }))
    }

    return (
        <MySkillContext.Provider value={mySkills}>
            <UpdateMySkillContext.Provider value={updateMySkills}>
                {children}
            </UpdateMySkillContext.Provider>
        </MySkillContext.Provider>
    );
};
