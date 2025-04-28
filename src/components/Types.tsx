import {useState} from "react";
import CopyButton from "./CopyButton.tsx";
import { motion } from "framer-motion";



interface TypesSnippet {
    name :string,
    snippet:string
}
const Types = () => {
    const [isActivatedButton,setIsActivatedButton] = useState<TypesSnippet>(allTypes[0]);
    const [isCLickedButton, setIsCLickedButton] = useState<number>(0);


    return (
        <div className='mt-6 mb-50  flex items-center gap-3  flex-wrap w-full'>
            {
                allTypes.map((type: any, index: number) => (
                    <div key={index}>
                        <button
                            style={{
                                backgroundColor:isCLickedButton === index ? "#F3F3F3" : '#fcfcfc',
                            }}
                            onClick={() => {
                                setIsCLickedButton(index)
                                setIsActivatedButton(type)
                            }}
                            className='codeText text-sm   hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border border-[#f3f3f3]'
                        >
                            {type.name}
                        </button>

                    </div>
                ))

            }
            {
                isActivatedButton.snippet ?
            }
        </div>
    )
}
export default Types;

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 20,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const allTypes = [
    {
        name: 'Default',
        snippet: `('Event has been created')`,

    },
    {
        name: 'Description',
        snippet: `.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,

    },
    {
        name: 'Success',
        snippet: `.success('Event has been created')`,
    },
    {
        name: 'Info',
        snippet: `.info('Be at the area 10 minutes before the event time')`,
    },
    {
        name: 'Warning',
        snippet: `.warning('Event start time cannot be earlier than 8am')`,
    },
    {
        name: 'Error',
        snippet: `.error('Event has not been created')`,
    },]