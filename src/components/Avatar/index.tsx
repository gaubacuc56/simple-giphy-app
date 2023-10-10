import React, { useCallback, useMemo } from "react"
interface IAvatarProps {
    name?: string
    url?: string
    classNameAvatar?: string
    classNameTextDisplay?: string
}
const Avatar = (props: IAvatarProps) => {
    const { name, url, classNameAvatar, classNameTextDisplay } = props

    const countWork = useCallback((str: string) => {
        return str.split(" ").length;
    }, [])

    const textDisplay = useMemo(() => {
        if (name !== undefined) {
            if (countWork(name) > 1) {
                const firstName = name.split(" ")[0]
                const lastName = name.split(" ").slice(-1).join(" ")
                return `${firstName[0]} ${lastName[0]}`
            }
            else return name[0]
        }
    }, [name, countWork])

    return url ? (
        <img className={classNameAvatar} src={url} alt="avatar" />
    ) : (
        <div
            className={`flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-gray-200 uppercase text-black font-semibold text-center cursor-default ${classNameTextDisplay}`}
            style={{ userSelect: "none" }}
        >
            {textDisplay}
        </div>
    )
}
export default Avatar
