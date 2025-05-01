import { FC } from "react"
import Table from "@components/Table"
import Button, { Align } from "@components/Button"
import colors from "@assets/colors/colors.json"

interface IItem {
    n: string, // name
    // TODO: point to router
    a?: string, // address 
    i?: string // icon
}

const Footer: FC = () => {
    const columnTitle: IItem[] = [{ n: "Product" }, { n: "Solutions" }, { n: "Resources" }, { n: "Support" }, { n: "Company" }]
    const tableMap: IItem[][] = [
        [{ n: "Pricing" }, { n: "Brainstorming" }, { n: "Help Center" }, { n: "Contact Us" }, { n: "About" }],
        [{ n: "Overview" }, { n: "Ideation" }, { n: "Blog" }, { n: "Developers" }, { n: "Events" }],
        [{ n: "Browse" }, { n: "Wireframing" }, { n: "Tutorials" }, { n: "Documentation" }, { n: "Events" }],
        [{ n: "Accessibility", i: "clarity:beta-line" }, { n: "Research" }, { n: "FAQs" }, { n: "Integrations" }, { n: "Request Demo", i: "maki:arrow" }]]

    const renderTableColumnTitle = () => {
        return columnTitle.map((element, index) => {
            return <Button
                onClick={() => { }}
                key={"rowTitle" + index}
                text={element.n}
                bgColor="BLUE"
                size="LG"
                hoverBackgroundColor="WHITE"
                hoverFontColor="BLACK"
                fontColor="WHITE"
                align={Align.RIGHT}
                icon={element.i}
            />
        })
    }

    const renderTableRows = () => {
        return tableMap.map((rows, rowIndex) => {
            return rows.map((element, elementIndex) => {
                return <Button
                    onClick={() => { }}
                    key={"tableElement" + rowIndex + elementIndex}
                    text={element.n}
                    bgColor="BLUE"
                    size="LG"
                    hoverBackgroundColor="WHITE"
                    hoverFontColor="BLACK"
                    fontColor="WHITE"
                    align={Align.LEFT}
                    icon={element.i}
                />
            })
        })
    }

    return (
        <footer
            style={{ backgroundColor: colors.BLUE }}
            className="text-white p-4">
            <div className="flex justify-between items-center gap-4">
                <img src="/teach-logo-branco.png" alt="Teach Logo" />
                <Table
                    collumnTitle={renderTableColumnTitle()}
                    rowsContent={renderTableRows()}
                />
            </div>
            <hr className="bg-gray-400 h-px border-none rounded" />
            <div className="flex items-center justify-between mt-2">
                <p>uteach@2023. All rights reserved.</p>
                <div className="flex gap-2">
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        text="Terms"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        text="Privacy"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        text="Contact"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        text="EN"
                        icon="mdi:internet"
                        iconPosition="LEFT"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        text="EN"
                        icon="material-symbols:euro"
                        iconPosition="LEFT"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                    <Button
                        onClick={() => { }}
                        bgColor="BLUE"
                        fontColor="WHITE"
                        icon="ri:accessibility-line"
                        hoverBackgroundColor="WHITE"
                        hoverFontColor="BLACK"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer