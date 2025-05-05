import Section from "@components/Section"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import InfoCard from "./InfoCard"
import ReactPlayer from "react-player"

const SecondSection = () => {
    return (
        <Section flex>
            <>
                <h2 className="text-6xl">An all-in-one app that makes it easier</h2>
                <ul>
                    <li className="flex gap-4 my-2 text-xl">
                        <Icon icon={"material-symbols:check"} />
                        <p>
                            Et veniam tenetur qui facere minima.
                        </p>
                    </li>
                    <li className="flex gap-4 my-2 text-xl">
                        <Icon icon={"material-symbols:check"} />
                        <p>
                            In corrupti quaerat aut quibusdam ratione.
                        </p>
                    </li>
                    <li className="flex gap-4 my-2 text-xl">
                        <Icon icon={"material-symbols:check"} />
                        <p>
                            Et galisum odio a voluptatem corporis.
                        </p>
                    </li>
                </ul>
                <a href="#" className="text-blue-800">
                    Find more about the app
                    <Icon icon={"line-md:arrow-up"} rotate={1} />
                </a>
            </>

            <>
                {/* TODO: replace with actual video link */}
                <ReactPlayer url={"https://www.youtube.com/watch?v=7CTJcHjkq0E"} />
                <div className="flex justify-content gap-4 -mt-8 z-10">
                    <InfoCard
                        title="The map of mathematics"
                        type="Featured"
                        link="#"
                        text="Lorem ipsum dolor sit amet. Vel quidem officiis eos et consectetur harum." />
                    <InfoCard
                        title="Design for how people think"
                        type="Popular"
                        link="#"
                        text="Lorem ipsum dolor sit amet. Vel quidem officiis eos et consectetur harum." />
                    <InfoCard
                        title="International & commercial law"
                        type="New"
                        link="#"
                        text="Lorem ipsum dolor sit amet. Vel quidem officiis eos et consectetur harum." />
                </div>
            </>
        </Section>
    )
}

export default SecondSection