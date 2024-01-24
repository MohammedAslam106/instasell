import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TabProps{
    children:ReactNode
    className?:string
}

export default function Tab({children,className}:TabProps ){
    return(
        <button type="button" role="button" className={twMerge('px-3 py-1 text-nowrap font-[650] text-[13px] border rounded shadow-sm',className)}>{children}</button>
    )
}