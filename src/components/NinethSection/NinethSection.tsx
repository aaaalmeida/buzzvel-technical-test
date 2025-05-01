import Button from "@components/Button"
import Section from "@components/Section"
import { FC } from "react"

const NinethSection: FC = () => {
    return (
        <Section
            bgColor="ORANGE"
            fontColor="WHITE"
        >
            <h2>Ready for your next project?</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta amet non, debitis eos, eveniet, reiciendis impedit cum ex aperiam.</h3>
            <form>
                <label>
                    Email
                    <input
                        className="bg-white"
                        placeholder="Enter your email"
                        type="email" />
                </label>
                <label>
                    Message
                    <input
                        type="text"
                        placeholder="What are you say?" />
                </label>
                {/* <Button /> */}
            </form>
        </Section>
    )
}

export default NinethSection