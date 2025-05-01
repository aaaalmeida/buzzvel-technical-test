import { FC } from "react"
import ColorEnum from "@assets/colors/colorsEnum"
import color from "@assets/colors/colors.json"

interface ISection {
    children: React.ReactNode | React.ReactNode[],
    bgColor?: ColorEnum,
    fontColor?: ColorEnum,
    flex?: boolean
}

const Section: FC<ISection> = ({
    children,
    bgColor = "WHITE",
    fontColor = "BLACK",
    flex = false }) => {
    const childrenArray = Array.isArray(children) ? children : [children]

    const renderChildren = () => {
        return childrenArray.map((element, index) => {
            return <div key={index} className={'px-4'}>
                {element}
            </div>
        })
    }

    return (
        <section
            style={{ backgroundColor: color[bgColor], color: color[fontColor] }}
            className={`${flex ? "flex" : ""} justify-evenly py-8 px-4`}>
            {renderChildren()}
        </section>
    )
}

export default Section