export const InputSkill = () => {
    return (
        <div className="w-3/5 flex items-center mt-2">
            <div className="flex-grow relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="skill"
                    id="skill"
                    className="block w-full py-2 pl-4 pr-20 text-gray-700 border border-gray-300 bg-white rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Skill list"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                    <select
                        id="skill-levels"
                        name="skill-levels"
                        className="h-full border-l border-gray-300 bg-white py-0 pl-2 pr-8 text-gray-700 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pointer-events-auto"
                    >
                        <option>BASIC</option>
                        <option>INTERMEDIATE</option>
                        <option>ADVANCED</option>
                        <option>INTERESTED IN</option>
                    </select>
                </div>
            </div>
            <button className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                Save
            </button>
        </div>
    )
}
