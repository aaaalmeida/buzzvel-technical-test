import { FC } from "react"
import Button from "./Button"

const Header: FC = () => {
    return (
        <header className="flex px-10 items-center py-4 justify-between">
            <div className="flex gap-4">
                <img src="/teach-logo.png" alt="Uteach" />
                <Button fontColor="BLUE" text="Products" />
                <Button fontColor="BLUE" text="Solutions" />
                <Button fontColor="BLUE" text="Pricing" />
                <Button fontColor="BLUE" width={32} text="Resources" icon="weui:arrow-filled" rotateIcon={1} />
            </div>
            <div className="flex gap-4">
                <Button fontColor="BLUE" text="Login" />
                <Button fontColor="BLUE" text="Sign Up Now"
                border borderColor="BLUE" width={32} />
            </div>
        </header>
    )
}

export default Header