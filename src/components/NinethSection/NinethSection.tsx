import Button, { FontSize, Type } from "@components/Button"
import Section from "@components/Section"
import { FC } from "react"
import { useForm } from "react-hook-form"

interface IFormData {
    email: string
    message: string
}

const NinethSection: FC = () => {
    const { register, handleSubmit, reset } = useForm<IFormData>()

    const onSubmit = async (data: IFormData) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", // public example api
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

            if (!response.ok) {
                alert("Ops, we could not send your email")
                throw new Error("Form Error")
            }

            reset()
            const result = await response.json()
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Section
            bgColor="ORANGE"
            fontColor="WHITE"
            flex
            direction="column"
        >
            <h2 className="font-bold text-6xl">
                Ready for your next project?
            </h2>
            <h3 className="text-4xl my-6">
                Sit elit feugiat turpis sed integer integer accumsan turpis.
            </h3>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <label htmlFor="email" className="text-xl">Email</label>
                <input
                    id="email"
                    className="rounded p-2 w-96 bg-white text-black"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", { required: true })}
                />

                <label htmlFor="message" className="text-xl">Message</label>
                <input
                    id="message"
                    className="rounded p-2 w-96 h-24 bg-white text-black"
                    placeholder="What do you have to say?"
                    type="text"
                    {...register("message", { required: true })}
                />
                <div className="self-center">
                    <Button
                        type={Type.SUBMIT}
                        text="Request Demo"
                        height={16}
                        width={40}
                        padding={4}
                        fontSize={FontSize.XL}
                        bgColor="BLUE"
                        fontColor="WHITE"
                    />
                </div>
            </form>
        </Section>
    )
}

export default NinethSection