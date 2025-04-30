import { FC, MouseEventHandler } from "react"
import colors from "@assets/colors.json"

type Size = "sm" | "md" | "lg"
type Color = "white" | "blue" | "orange" | "black"

interface IButton {
    onClick: MouseEventHandler,
    text?: string,
    icon?: string,
    size?: Size,
    border?: boolean,
    bgColor?: Color,
    fontColor?: Color
}

const sizeClasses = {
    sm: "w-24 h-12 p-2",
    md: "w-32 h-16 p-4",
    lg: "w-40 h-16 p-6"
}

const Button: FC<IButton> = ({
    onClick,
    text,
    icon,
    size = "sm",
    bgColor = "white",
    fontColor = "black",
    border = false
}) => {
    return (
        <button
            style={{ backgroundColor: colors[bgColor], color: colors[fontColor] }}
            className={`flex gap-2 items-center justify-center rounded ${sizeClasses[size]} ${border ?? "border"}`}
            onClick={onClick}>
            {text && <p>{text}</p>}
            {icon && <p>{icon}</p>}
        </button>
    )
}

export default Button