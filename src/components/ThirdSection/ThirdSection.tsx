import Carousel, { ICarouselHandle } from "@components/Carousel"
import Section from "@components/Section"
import Button, { FontSize } from "@components/Button"
import { useEffect, useRef, useState } from "react"
import Banner, { IBanner } from "./Banner"
import bannerData from "@components/ThirdSection/data/carouselData.json"

const ThirdSection = () => {
    const [banners, setBanners] = useState<IBanner[]>([])

    useEffect(() => {
        // data fetching simulation
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))

            setBanners(bannerData)
        }

        fetchData()
    }, [])

    const carouselRef = useRef<ICarouselHandle>(null)
    const handleCarouselPrev = () => { carouselRef.current?.handlePrev() }
    const handleCarouselNext = () => { carouselRef.current?.handlePrev() }

    const renderBanner = () => {
        return banners.map((banner, index) =>
            <Banner {...banner} key={index}/>
        )
    }

    return (
        <Section bgColor="YELLOW" flex>
            <div className="min-w-[50px] flex items-center justify-center">
                <Button
                    onClick={handleCarouselPrev}
                    bgColor="YELLOW" border
                    icon="weui:arrow-filled"
                    fontSize={FontSize.ULTRA}
                    fontColor="BLACK" rotateIcon={2} />
            </div>

            <div className="flex-1 overflow-hidden">
                {/* <Banner {...banners[0]}/> */}
                <Carousel
                    ref={carouselRef}
                    autoScroll
                    scrollInterval={4000}
                    itemWidth={800}
                >
                    {renderBanner()}
                </Carousel>
            </div>

            <div className="min-w-[50px] flex items-center justify-center">
                <Button
                    onClick={handleCarouselNext}
                    bgColor="YELLOW" border
                    icon="weui:arrow-filled"
                    fontSize={FontSize.ULTRA}
                    fontColor="BLACK" />
            </div>
        </Section>
    )
}

export default ThirdSection