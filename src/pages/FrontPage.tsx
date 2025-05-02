import Footer from "@components/Footer"
import FifthSection from "@components/FifthSection/FifthSection"
import SixthSection from "@components/SixthSection/SixthSection"
import { Fragment } from "react"
import { FC } from "react"
import NinethSection from "@components/NinethSection/NinethSection"
import FourthSection from "@components/FourthSection/FourthSection"
import SeventhSection from "@components/SeventhSection/SeventhSection"
import Header from "@components/Header"

const FrontPage: FC = () => {
    return (
        <Fragment>
            <Header />
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