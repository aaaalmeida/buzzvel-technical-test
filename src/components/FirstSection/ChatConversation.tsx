import { FC } from "react"
import colors from "@assets/colors/colors.json"

type Pointer = "LEFT" | "RIGHT"

export interface IChatConversation {
    text: string
    pointer: Pointer
}
const ChatConversation: FC<IChatConversation> = ({ pointer, text }) => {
    const isReader = pointer === "LEFT"

    const containerClasses = [
        "my-2",
        isReader ? "self-start" : "self-end"
    ].join(" ")

    const bubbleClasses = [
        "inline-block",
        "p-4",
        "rounded-3xl",
        isReader ? "rounded-bl-md" : "rounded-br-md",
        "shadow-xl",
        "max-w-[75%]",
        // "break-words",
        "border",
    ].join(" ")

    return (
        <div className={containerClasses}>
            <div
                className={bubbleClasses}
                style={{
                    backgroundColor: isReader ? colors["BLUE"] : colors["WHITE"],
                    color: isReader ? colors["WHITE"] : colors["BLUE"],
                }}
            >
                {text}
            </div>
        </div>
    )
}

export default ChatConversation