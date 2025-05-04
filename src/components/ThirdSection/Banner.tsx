import { FC } from "react"

export interface IBanner {
    image: string,
    name: string,
    text: string,
    company: string
}
const Banner: FC<IBanner> = ({ company, image, name, text }) => {
    return (
        <article className="flex h-full w-full h-[300px] justify-between border items-center">
            <div className="text-xl max-w-[50%] w-96 h-full flex flex-col justify-between border">
                <p>{text}</p>
                <div>
                    <h6>{name}</h6>
                    <h5 className="font-bold">{company}</h5>
                </div>
            </div>

            <div className="w-[300px] flex-shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </article>
    )
}

export default Banner