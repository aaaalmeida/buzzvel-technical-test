import Section from "@components/Section"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

const SecondSection = () => {
    return (
        <Section>
            <h2 className="text-6xl">An all-in-one app that makes it easier</h2>
            <ul>
                <li>
                    Et veniam tenetur qui facere minima.
                </li>
                <li>
                    In corrupti quaerat aut quibusdam ratione aut laborum voluptas.
                </li>
                <li>
                    Et galisum odio a voluptatem corporis.
                </li>
            </ul>
            <a href="#" className="text-blue-800">
                Find more about the app 
                <Icon icon={"line-md:arrow-up"} rotate={1} />
            </a>
            <div></div>
        </Section>
    )
}

export default SecondSection