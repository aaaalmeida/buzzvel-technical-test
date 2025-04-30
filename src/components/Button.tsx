import { FC, MouseEventHandler, useState } from "react"
import { Icon } from "@iconify-icon/react"
import colors from "@assets/colors.json"

type Size = "SM" | "MD" | "LG"
type Color = "WHITE" | "BLUE" | "HOVERBLUE" | "ORANGE" | "BLACK"
type IconPosition = "LEFT" | "RIGHT"

interface IButton {
    onClick: MouseEventHandler,
    text?: string,
    icon?: string,
    iconPosition?: IconPosition,
    size?: Size,
    border?: boolean,
    bgColor?: Color,
    fontColor?: Color,
    hoverBackgroundColor?: Color,
    hoverFontColor?: Color,
    align?: Align
}

const sizeClasses = {
    SM: "w-24 h-12 p-2",
    MD: "w-32 h-16 p-4",
    LG: "w-40 h-16 p-6"
}

export enum Align {
    "LEFT" = "left",
    "RIGHT" = "right",
    "CENTER" = "center",
    "JUSTIFY" = "justify"
}

const Button: FC<IButton> = ({
    onClick,
    text,
    icon,
    size = "SM",
    bgColor = "WHITE",
    fontColor = "BLACK",
    border = false,
    iconPosition = "RIGHT",
    hoverBackgroundColor,
    hoverFontColor,
    align = Align.CENTER
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const iconDirection = iconPosition === "RIGHT" ? "flex-row" : "flex-row-reverse"

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: (isHovered && hoverBackgroundColor) ? colors[hoverBackgroundColor] : colors[bgColor],
                color: (isHovered && hoverFontColor) ? colors[hoverFontColor] : colors[fontColor],
                textAlign: align
            }}
            className={`flex ${iconDirection} whitespace-nowrap gap-2 items-center justify-center rounded text-xl ${sizeClasses[size]} ${border ? "border border-black" : ""}`}
            onClick={onClick}>
            {text && <p>{text}</p>}
            {icon &&
                <Icon icon={icon} />
            }
        </button>
    )
}

export default Button