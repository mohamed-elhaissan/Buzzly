import {BiCheck} from "react-icons/bi";
import {useCallback, useState} from "react";


interface Props {
    text: string
}


export default function CopyButton({text}: Props) {
    const [isCopied, setIsCopied] = useState<boolean>(false);


    //methodes !
    const copyText = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        }).catch(() => {
            console.log("error")
        })
    }, [isCopied])


    return (
        <div>
            {
                isCopied ? <BiCheck className='text-green-500 rounded'/> :
                    <svg onClick={copyText} className='cursor-pointer dark:text-white' viewBox="0 0 24 24" width="14"
                         height="14" stroke="currentColor" strokeWidth="1.5"
                         strokeLinecap="round" strokeLinejoin="round" fill="none"
                         shapeRendering="geometricPrecision">
                        <path
                            d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                    </svg>
            }
        </div>
    )
}