import { FC, ReactNode } from "react"
import Button from "@components/Button"

interface ITable {
    collumnTitle: string[],
    rowsContent: (string | number | ReactNode)[][],
    bgColor: string,
    hoverColor: string
}

const Table: FC<ITable> = ({ collumnTitle, rowsContent, bgColor, hoverColor }) => {
    const renderTitle = () => {
        return collumnTitle.map((t, index) =>
            <th key={`collumn-title-${index}`}
                className={`font-bold text-left px-6 py-4 hover:bg-${hoverColor}`}
            >{t}</th>)
    }

    const renderRows = () => {
        return rowsContent.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
                {row.map((cell, colIndex) => (
                    <td key={`cell-${rowIndex}-${colIndex}`}
                        className={`self-center px-6 py-4 hover:bg-${hoverColor}`}>{cell}</td>
                ))}
            </tr>
        ))
    }
    console.log(bgColor);
    
    return (
        <table className={`table-auto bg-[${bgColor}]`}>
            <thead>
                <tr>
                    {renderTitle()}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default Table