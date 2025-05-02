import Section from "@components/Section"
import { FC } from "react"
import image from "@assets/images/meet_people.png"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

const FourthSection: FC = () => {
    return (
        <Section flex>
            <img src={image} alt="Group of students and teachers from different countries and cultures" />
            <div className="text-left w-100%">
                <h2 className="text-6xl">Meet international students & teachers</h2>
                <p className="text-xl">Ea saepe quaerat et tempora voluptatem cum quibusdam distinctio aut molestiae saepe? Ut dolores laborum est sunt voluptatem ea modi autem est dicta modi aut culpa consequatur qui repellendus placeat est perferendis iusto.</p>
                <a href="#" className="text-blue-600">
                    Explore teachers and students
                    <Icon icon="line-md:arrow-up" rotate={1} />
                </a>
            </div>
        </Section>
    )
}

export default FourthSection