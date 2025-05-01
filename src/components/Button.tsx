import { FC, MouseEventHandler, useState } from "react"
import { Icon } from "@iconify-icon/react"
import colors from "@assets/colors/colors.json"
import ColorEnum from "@assets/colors/colorsEnum"

type Size = "XM" | "SM" | "MD" | "LG"
type IconPosition = "LEFT" | "RIGHT"
type IconRotation = 0 | 1 | 2 | 3
type FontSize = "SM" | "BASE" | "XL" | "XXL"

interface IButton {
    onClick: MouseEventHandler,
    text?: string,
    icon?: string,
    iconPosition?: IconPosition,
    rotateIcon?: IconRotation,
    size?: Size,
    circle?: boolean,
    bgColor?: ColorEnum,
    fontColor?: ColorEnum,
    border?: boolean,
    borderColor?: ColorEnum,
    hoverBackgroundColor?: ColorEnum,
    hoverFontColor?: ColorEnum,
    align?: Align,
    fontSize?: FontSize
}

const sizeClasses = {
    XM: "size-12 p-2",
    SM: "w-24 h-12 p-2",
    MD: "w-32 h-16 p-4",
    LG: "w-40 h-16 p-6"
}

const fontSizeClasses = {
    SM: "text-sm",
    BASE: "text-base",
    XL: "text-xl",
    XXL: "text-2xl"
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
    iconPosition = "RIGHT",
    rotateIcon = 0,
    size = "SM",
    bgColor = "WHITE",
    fontColor = "BLACK",
    borderColor = "BLACK",
    border = false,
    circle = false,
    hoverBackgroundColor,
    hoverFontColor,
    align = Align.CENTER,
    fontSize = "BASE"
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
                borderColor: borderColor,
                textAlign: align
            }}
            className={`flex ${iconDirection} 
                whitespace-nowrap gap-2 items-center justify-center 
                ${fontSizeClasses[fontSize]}
                ${sizeClasses[size]} 
                ${circle ? "rounded-full" : "rounded"}
                ${border ? "border-2 border-black" : ""}`}
            onClick={onClick}>
            {text && <p>{text}</p>}
            {icon &&
                <Icon
                    icon={icon}
                    rotate={rotateIcon}
                />
            }
        </button>
    )
}

export default Button