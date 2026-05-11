import type { ReactNode } from "react"

interface InfoProps {
    title: string,
    children: ReactNode
}

const InfoBlock = (props: InfoProps) => {

    const {title, children} = props

    return(
        <div className="m-4 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold whitespace-nowrap">{title}</h2>
                <div className="flex-1 h-[3px] bg-gray-400/50"></div>
            </div>
            {children}
        </div>
    )
}

export {InfoBlock}