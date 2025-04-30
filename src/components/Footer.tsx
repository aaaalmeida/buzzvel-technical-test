import { FC } from "react"
import Table from "@components/Table"
import Button from "@components/Button"

const Footer: FC = () => {
    return (
        <footer className=" text-white">
            {/* <div className="flex items-center gap-4">
                <img src="/teach-logo.png" alt="Teach Logo" />
                <Table
                    bgColor="#123123"
                    hoverColor="#555"
                    collumnTitle={["Product", "Solutions", "Resources", "Support", "Company"]}
                    rowsContent={[
                        ["Pricing", "Brainstorming", "Help Center", "Contact Us", "About"],
                        ["Overview", "Ideation", "Blog", "Developers", "Events"],
                        ["Browse", "Wireframing", "Tutorials", "Documentation", "Events"],
                        ["Accessibility", "Research", "FAQs", "Integrations", "Request Demo"]
                    ]}
                />
            </div> */}
            <hr className="bg-gray-400 h-px border-none" />
            <div className="flex items-center justify-between bg-red-200">
                <p>uteach@2023. All rights reserved.</p>
                <div className="flex gap-2">
                    <Button
                        onClick={() => { }}
                        bgColor="blue"
                        fontColor="white"
                        text="Terms"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="blue"
                        fontColor="white"
                        text="Privacy"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="blue"
                        fontColor="white"
                        text="Contact"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer