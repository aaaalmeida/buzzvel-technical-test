import Button from "@components/Button"
import { FC } from "react"

type Type = "Featured" | "Popular" | "New"

interface IInfoCard {
    title: string
    text: string
    link: string
    type: Type
}

const InfoCard: FC<IInfoCard> = ({
    link,
    text,
    title,
    type
}) => {
    const typeSpam = {
        "Featured": "bg-[#F3E8FF] text-[#6B21A8]",
        "Popular": "bg-[#DBEAFE] text-[#1E40AF]",
        "New": "bg-[#DCFCE7] text-[#166534]"
    }

    const renderType = () => {
        return (<span className={typeSpam[type] + " p-2 rounded text-xs w-fit"}>{type}</span>)
    }

    return (
        <section className="flex flex-col justify-between shadow-md rounded-md bg-white p-4 w-60 gap-2">
            {renderType()}

            <h3 className="font-bold text-xl">{title}</h3>
            <p>{text}</p>
            <Button
                text="Take Lesson"
                width={32}
                border borderColor="LIGHTBLUE" fontColor="LIGHTBLUE"
                onClick={() => link} // point to route
            />
        </section>
    )
}

export default InfoCard