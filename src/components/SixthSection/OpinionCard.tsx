import { FC } from "react";

export interface IOpinionCard {
    img?: string,
    name: string,
    text: string,
    profession: string
}

const OpinionCard: FC<IOpinionCard> = ({
    img,
    name,
    profession,
    text
}) => {
    return (
        <article className="rounded-lg grid content-between shadow-xl p-4 w-96 h-64">
            <p>{text}</p>
            <div className="flex align-center">
                <img src={img} alt={name} className="rounded-full"/>
                <div className="pl-4">
                    <p>{name}</p>
                    <p className="text-[#475569]">{profession}</p>
                </div>
            </div>
        </article>
    )
}

export default OpinionCard