import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps{
    type:'button' | 'submit'
    className:string
    children:ReactNode
}

export default function Button({type,className,children}:ButtonProps ){
    return(
        <button className={twMerge(' bg-slate-500 rounded-lg px-3 py-1 shadow-md font-medium text-[12px]',className)} type={type}>
            {children}
        </button>
    )
}