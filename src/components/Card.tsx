
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
interface CardProps{
    className:string
    children:ReactNode
}

export default function Card({children,className}:CardProps ){
    return(
        <div className={twMerge('w-full p-5 border-2 rounded-lg shadow-sm',className)}>
            {children}
        </div>
    )
}