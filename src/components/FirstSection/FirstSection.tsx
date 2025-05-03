import { FC } from "react"
import Button from "@components/Button"
import Section from "@components/Section"
import company1 from "@assets/images/companies/company1.png"
import company2 from "@assets/images/companies/company2.png"
import company3 from "@assets/images/companies/company3.png"
import company4 from "@assets/images/companies/company4.png"
import company5 from "@assets/images/companies/company5.png"
import colors from "@assets/colors/colors.json"
import ChatConversation, { IChatConversation } from "@components/FirstSection/ChatConversation"

const FirstSection: FC = () => {
    const chatMessages: IChatConversation[] = [
        { pointer: "RIGHT", text: "Lorem ipsum dolor sit amet." },
        { pointer: "LEFT", text: "Sit dignissimos rerum et voluptas omnis et ut unde voluptas." },
        { pointer: "RIGHT", text: "Et autem impedit" },
        { pointer: "LEFT", text: "Aut vitae" }
    ]

    const renderChatMessages = () => {
        return chatMessages.map((c, i) => <ChatConversation pointer={c.pointer} text={c.text} key={i} />)
    }

    return (
        <Section flex>
            <div className="flex flex-col gap-4">
                <h2 className="text-6xl">Teach students worldwide</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error modi commodi distinctio quisquam natus qui optio vitae unde voluptates! Debitis deserunt corporis sapiente id eveniet praesentium, et quia dolores!</p>
                <div className="flex gap-4 my-4">
                    <Button width={32} text="Sign Up Now" bgColor="ORANGE" fontColor="WHITE" />
                    <Button width={32} text="View Demo" icon="icon-park-outline:play" iconPosition="LEFT" fontColor="LIGHTBLUE" />
                </div>

                <div className="flex gap-6">
                    <p className="w-36">Trusted by leading companies</p>
                    <a href="#">
                        <img src={company1} alt="Company 1" />
                    </a>
                    <a href="#">
                        <img src={company2} alt="Company 2" />
                    </a>
                    <a href="#">
                        <img src={company3} alt="Company 3" />
                    </a>
                    <a href="#">
                        <img src={company4} alt="Company 4" />
                    </a>
                    <a href="#">
                        <img src={company5} alt="Company 5" />
                    </a>
                </div>
            </div>

            <figure className="relative">
                <div className="absolute h-fit bottom-0 left-0 rounded-full" style={{ backgroundColor: colors.YELLOW }}>
                    <img
                        src="src/assets/images/chat/chat2.png"
                        alt="Professor teaching in front of a computer"
                        className="h-40 w-40 object-contain"
                    />
                </div>

                <div className="flex flex-col gap-2 items-stretch justify-center h-full w-full mx-10 px-24">
                    {renderChatMessages()}
                </div>

                <div className="absolute h-fit top-0 right-0 rounded-full" style={{ backgroundColor: colors.ORANGE }}>
                    <img
                        src="src/assets/images/chat/chat1.png"
                        alt="Student using a cellphone"
                        className="h-40 w-40 object-contain"
                    />
                </div>
            </figure>
        </Section>
    )
}

export default FirstSection