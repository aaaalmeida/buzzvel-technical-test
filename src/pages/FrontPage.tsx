import { Fragment, FC } from "react"
import Header from "@components/Header"
import FirstSection from "@components/FirstSection/FirstSection"
import FourthSection from "@components/FourthSection/FourthSection"
import FifthSection from "@components/FifthSection/FifthSection"
import SixthSection from "@components/SixthSection/SixthSection"
import SeventhSection from "@components/SeventhSection/SeventhSection"
import NinethSection from "@components/NinethSection/NinethSection"
import Footer from "@components/Footer"
import SecondSection from "@components/SecondSection/SecondSection"

const FrontPage: FC = () => {
    return (
        <Fragment>
            <Header />
            <FirstSection />
            <SecondSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <NinethSection />
            <Footer />
        </Fragment>
    )
}

export default FrontPage