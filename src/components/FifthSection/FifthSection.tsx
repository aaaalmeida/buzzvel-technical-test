import { FC } from "react"
import heartIcon from "@components/FifthSection/assets/heartIcon.png"
import diamondIcon from "@components/FifthSection/assets/diamondIcon.png"
import studentHatIcon from "@components/FifthSection/assets/studentHatIcon.png"
import Section from "@components/Section"
import InfoCard from "@components/FifthSection/InfoCard"

const FifthSection: FC = () => {
    return (
        <Section
            bgColor="BLUE"
            fontColor="YELLOW"
            flex>
            <InfoCard
                title={195}
                body="user countries"
                imageAddress={heartIcon}
            />
            <InfoCard
                title={"1M"}
                body="valued teachers"
                imageAddress={diamondIcon}
            />
            <InfoCard
                title={"17M"}
                body="happy students"
                imageAddress={studentHatIcon}
            />
        </Section>
    )
}

export default FifthSection