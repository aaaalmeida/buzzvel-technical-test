import { Fragment, FC } from "react"
import Header from "@components/Header"
import FirstSection from "@components/FirstSection/FirstSection"
import SecondSection from "@components/SecondSection/SecondSection"
import ThirdSection from "@components/ThirdSection/ThirdSection"
import FourthSection from "@components/FourthSection/FourthSection"
import FifthSection from "@components/FifthSection/FifthSection"
import SixthSection from "@components/SixthSection/SixthSection"
import SeventhSection from "@components/SeventhSection/SeventhSection"
import EighthSection from "@components/EighthSection/EighthSection"
import NinethSection from "@components/NinethSection/NinethSection"
import Footer from "@components/Footer"

const FrontPage: FC = () => {
    return (
        <Fragment>
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EighthSection />
            <NinethSection />
            <Footer />
        </Fragment>
    )
}

export default FrontPage