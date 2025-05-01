import { FC } from "react"
import colors from "@assets/colors/colors.json"

interface IInfoCard {
    imageAddress: string,
    imageAlt?: string
    title: string | number,
    body: string
}

const InfoCard: FC<IInfoCard> = ({
    body,
    title,
    imageAddress,
    imageAlt
}) => {
    const letterColor = colors.YELLOW
    return (
        <article className={`font-[${letterColor}] grid justify-items-center`}>
            <img src={imageAddress} alt={imageAlt} />
            <h3 className="text-5xl py-4">{title}</h3>
            <p className="text-2xl">{body}</p>
        </article>
    )
}

export default InfoCard