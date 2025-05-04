import { FC } from "react"
import ColorEnum from "@assets/colors/colorsEnum"
import color from "@assets/colors/colors.json"

type FlexDirection = "row" | "column"

interface ISection {
    children: React.ReactNode | React.ReactNode[],
    bgColor?: ColorEnum,
    fontColor?: ColorEnum,
    flex?: boolean,
    direction?: FlexDirection
}

const Section: FC<ISection> = ({
    children,
    bgColor = "WHITE",
    fontColor = "BLACK",
    flex = false,
    direction = "row" }) => {
    const childrenArray = Array.isArray(children) ? children : [children]

    const renderChildren = () => {
        const childBaseClass = [
            "px-4",
            flex && direction === "row" ? "flex-1" : "",
            flex && direction === "column" ? "h-full w-full" : ""
        ].join(" ")

        return childrenArray.map((element, index) => {
            return <div key={index} className={childBaseClass}>
                {element}
            </div>
        })
    }

    const baseClasses = [
        flex ? "flex justify-between items-center" : "text-center",
        flex ? (direction === "column" ? "flex-col" : "flex-row") : "",
        "p-10 gap-4 overflow-hidden w-full"
    ].join(" ")

    return (
        <section
            style={{ backgroundColor: color[bgColor], color: color[fontColor] }}
            className={baseClasses}>
            {renderChildren()}
        </section>
    )
}

export default Section