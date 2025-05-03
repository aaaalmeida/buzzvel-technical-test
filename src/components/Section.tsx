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
        const baseClass = ["px-4", (flex && direction === "row") ? "flex-1" : ""].join(" ")

        return childrenArray.map((element, index) => {
            return <div key={index} className={baseClass}>
                {element}
            </div>
        })
    }

    const baseClasses = [
        "p-10 gap-4",
        flex ? "flex justify-center items-center" : "text-center",
        flex ? (direction === "column" ? "flex-col" : "flex-row") : ""
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