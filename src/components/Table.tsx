import { FC } from "react"

interface ITable {
    collumnTitle: (string | React.ReactNode)[],
    rowsContent: (string | number | React.ReactNode)[][],
}

const Table: FC<ITable> = ({ collumnTitle, rowsContent }) => {
    const renderTitle = () => {
        return collumnTitle.map((t, index) =>
            <th key={`collumn-title-${index}`}
                className={"font-bold px-2 py-1"}
            >{t}</th>)
    }

    const renderRows = () => {
        return rowsContent.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
                {row.map((cell, colIndex) => (
                    <td key={`cell-${rowIndex}-${colIndex}`}
                        className={"self-center px-2 py-1"}>{cell}</td>
                ))}
            </tr>
        ))
    }

    return (
        <table className={"table-auto border-collapse"}>
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