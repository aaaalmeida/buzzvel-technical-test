import { FC, MouseEventHandler, useState } from "react"
import { Icon } from "@iconify-icon/react"
import colors from "@assets/colors/colors.json"
import ColorEnum from "@assets/colors/colorsEnum"

type Size = 2 | 4 | 6 | 12 | 16 | 24 | 32 | 40
type IconPosition = "LEFT" | "RIGHT"
type IconRotation = 0 | 1 | 2 | 3

export enum Type {
    "BUTTON" = "button",
    "RESET" = "reset",
    "SUBMIT" = "submit"
}

export enum Align {
    "LEFT" = "left",
    "RIGHT" = "right",
    "CENTER" = "center",
    "JUSTIFY" = "justify"
}

export enum FontSize {
    "BASE" = "base",
    "SM" = "sm",
    "XL" = "xl",
    "XXL" = "2xl",
    "ULTRA" = "6xl"
}

interface IButton {
    onClick?: MouseEventHandler,
    type?: Type,
    text?: string,
    icon?: string,
    iconPosition?: IconPosition,
    rotateIcon?: IconRotation,
    height?: Size,
    width?: Size,
    padding?: Size,
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

/**
 * Generic reusable button component
 * 
 * @param {MouseEventHandler} onClick - Function executed when clicked
 * @param type - Type of button
 * @param text - Text of button
 * @param icon - Icon used on button (check iconify for icon list https://icon-sets.iconify.design/)
 * @param iconPosition - Icon position (default right)
 * @param rotateIcon - Icon rotation
 * @param height - Icon height (default 48px)
 * @param width - Icon width (default 112px)
 * @param padding - Icon padding (default 8px)
 * @param circle - Is icon a circle?
 * @param bgColor - Icon background color (default white)
 * @param fontColor - Font color (default black)
 * @param border - Does icon have a border?
 * @param borderColor - Border color (default black)
 * @param hoverBackgroundColor - Change background color when hovered
 * @param hoverFontColor - Change font color when hovered
 * @param align - chage content align
 * @param fontSize - Font size
 * 
 * @returns {React.FunctionComponent}
 */
const Button: FC<IButton> = ({
    onClick,
    text,
    icon,
    iconPosition = "RIGHT",
    rotateIcon = 0,
    width = 24,
    height = 12,
    padding = 2,
    bgColor = "WHITE",
    fontColor = "BLACK",
    borderColor = "BLACK",
    border = false,
    circle = false,
    hoverBackgroundColor,
    hoverFontColor,
    type = Type.BUTTON,
    align = Align.CENTER,
    fontSize = "BASE"
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const iconDirection = iconPosition === "RIGHT" ? "flex-row" : "flex-row-reverse"
    const isCircle = circle ? "rounded-full" : "rounded"
    const haveBorder = border ? "border-3" : ""

    const widthClass = {
        2: "w-2",
        4: "w-4",
        6: "w-6",
        12: "w-12",
        16: "w-16",
        24: "w-24",
        32: "w-32",
        40: "w-40",
    }[width]

    const heightClass = {
        2: "h-2",
        4: "h-4",
        6: "h-6",
        12: "h-12",
        16: "h-16",
        24: "h-24",
        32: "h-32",
        40: "h-40",
    }[height]

    const paddingClass = {
        2: "p-2",
        4: "p-4",
        6: "p-6",
        12: "p-12",
        16: "p-16",
        24: "p-24",
        32: "p-32",
        40: "p-40",
    }[padding]

    const baseClass = [
        "flex whitespace-nowrap gap-2 items-center justify-center",
        iconDirection,
        isCircle,
        widthClass,
        heightClass,
        paddingClass,
        `text-${fontSize}`,
        haveBorder,
    ]

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: (isHovered && hoverBackgroundColor) ? colors[hoverBackgroundColor] : colors[bgColor],
                color: (isHovered && hoverFontColor) ? colors[hoverFontColor] : colors[fontColor],
                borderColor: colors[borderColor],
                textAlign: align
            }}
            className={baseClass.join(" ")}
            type={type}>
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