import Button, { FontSize } from "@components/Button"
import colors from "@assets/colors/colors.json"
import OpinionCard, { IOpinionCard } from "@components/SixthSection/OpinionCard"
import user1 from "@assets/images/opinionCards/user1.png"
import user2 from "@assets/images/opinionCards/user2.png"
import user3 from "@assets/images/opinionCards/user3.png"
import default_user from "@components/SixthSection/assets/default_user.png"
import Section from "@components/Section"
import { FC, useState, useRef, Fragment } from "react"
import Carousel, { ICarouselHandle } from "@components/Carousel"

const SixthSection: FC = () => {
    const carouselRef = useRef<ICarouselHandle>(null)

    // TODO: fetch simulation
    const [cards, setCards] = useState<IOpinionCard[]>([
        {
            img: user1,
            name: "Hellen Jummy",
            profession: "Financial Counselor",
            text: "Lorem ipsum dolor sit amet. Ut voluptate aliquid sed doloribus facilis 33 delectus harum ab quos dicta. Qui labore quia est saepe magni qui nihil adipisci quo libero sint et ratione modi eos voluptas galisum."
        },
        {
            img: user2,
            name: "Ralph Edwards",
            profession: "Math Teacher",
            text: "Aut natus quam eum fuga fugiat est quia architecto rem harum harum aut sunt alias et velit suscipit eos reiciendis sint. Est optio voluptatem ut harum dicta sit nostrum possimus a consequatur veniam."
        },
        {
            img: user3,
            name: "Hellena John",
            profession: "Psychology Student",
            text: "Eum omnis tempora sit voluptates aspernatur vel nihil quos qui excepturi sint! Non odit corporis ea reprehenderit provident hic illo voluptas. Vel officia totam ea iure consequatur ea harum rerum id architecto alias ut deserunt dolores est quia dicta."
        },
        {
            name: "Arthur Almeida",
            profession: "Developer",
            text: "Lorem ipsum dolor sit amet. Ut sapiente consequuntur sed debitis necessitatibus ut sunt nihil et rerum sapiente. Qui dolores aspernatur qui quia officiis sed laboriosam facilis aut magnam dolore ut nemo nulla non accusamus amet?"
        },
        {
            name: "João Silva",
            profession: "Student",
            text: "Lorem ipsum dolor sit amet. Ut sapiente consequuntur sed debitis necessitatibus ut sunt nihil et rerum sapiente. Qui dolores aspernatur qui quia officiis sed laboriosam facilis aut magnam dolore ut nemo nulla non accusamus amet?"
        },
        {
            name: "Maria Silva",
            profession: "Student",
            text: "Lorem ipsum dolor sit amet. Ut sapiente consequuntur sed debitis necessitatibus ut sunt nihil et rerum sapiente. Qui dolores aspernatur qui quia officiis sed laboriosam facilis aut magnam dolore ut nemo nulla non accusamus amet?"
        },
    ])

    const renderOpinionCards = () => {
        return cards.map((card, index) => (
            <OpinionCard
                img={card.img ?? default_user}
                name={card.name}
                profession={card.profession}
                text={card.text}
                key={index}
            />
        ))
    }

    return (
        <Section>
            <Fragment>
                <div className="flex mb-10 items-center justify-between">
                    <h2 style={{ color: colors.BLUE }} className="text-6xl">What everyone says</h2>
                    <div className="flex gap-4">
                        <Button
                            onClick={() => carouselRef.current?.handlePrev()}
                            icon="weui:arrow-filled"
                            height={12}
                            width={12}
                            padding={2}
                            fontSize={FontSize.XXL}
                            fontColor="ORANGE"
                            border
                            borderColor="ORANGE"
                            circle
                            rotateIcon={2}
                        />
                        <Button
                            onClick={() => carouselRef.current?.handleNext()}
                            icon="weui:arrow-filled"
                            height={12}
                            width={12}
                            padding={2}
                            fontSize={FontSize.XXL}
                            fontColor="ORANGE"
                            border
                            borderColor="ORANGE"
                            circle
                        />
                    </div>
                </div>
            </Fragment>

            <Carousel
                ref={carouselRef}
                itemsPerPage={3}
                autoScroll
                scrollInterval={10000}
            >
                {renderOpinionCards()}
            </Carousel>
        </Section>

    )
}

export default SixthSection