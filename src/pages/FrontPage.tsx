import Footer from "@components/Footer"
import FifthSection from "@components/FifthSection/FifthSection"
import SixthSection from "@components/SixthSection/SixthSection"
import React from "react"
import { FC } from "react"
import NinethSection from "@components/NinethSection/NinethSection"

const FrontPage: FC = () => {
    return (
        <React.Fragment>
            <FifthSection />
            <SixthSection />
            <NinethSection/>
            <Footer />
        </React.Fragment>
    )
}

export default FrontPage