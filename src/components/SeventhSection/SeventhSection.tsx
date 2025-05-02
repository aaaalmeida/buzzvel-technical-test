
import Section from "@components/Section"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import img1 from "@assets/images/Picture1.png"
import img2 from "@assets/images/Picture2.png"
import img3 from "@assets/images/Picture3.png"
import img4 from "@assets/images/Picture4.png"
import Button from "@components/Button"

const SeventhSection = () => {
    return (
        <Section flex>
            {/* <div className="text-left w-100%">
                <h2 className="text-6xl">All the cool features</h2>
                <p className="text-xl">Ea saepe quaerat et tempora voluptatem cum quibusdam distinctio aut molestiae saepe? Ut dolores laborum est sunt voluptatem ea modi autem est dicta modi aut culpa consequatur qui repellendus placeat est perferendis iusto.</p>
                <a href="#" className="text-blue-600">
                    View all the features
                    <Icon icon="line-md:arrow-up" rotate={1} />
                </a>
            </div> */}


            <div className="relative w-full max-w-xl mx-auto py-16">
                {/* Background decorativo */}
                <div className="absolute -top-8 left-0 w-[400px] h-[400px] bg-orange-400 rounded-full z-0 opacity-80" />

                {/* Container principal de conteúdo */}
                <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
                    
                    <div className="col-span-1 bg-white p-4 shadow-md rounded-lg">
                        <span className="text-sm font-medium bg-[#DBEAFE] p-1.5 rounded text-[#2563EB]">Popular</span>
                        <h3 className="text-xl font-bold mt-2">Design for how people think</h3>
                        <p className="text-sm text-gray-500 my-2">
                            Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
                        </p>
                        <Button
                            text="Take Lesson"
                            border
                            borderColor="LIGHTBLUE"
                            fontColor="LIGHTBLUE"
                            height={16}
                            width={40}
                            padding={6}
                        />
                        {/* <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100 transition">
                            Take Lesson
                        </button> */}
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <img src={img1} className="rounded-lg w-full h-auto object-cover" />
                        <img src={img4} className="rounded-lg w-full h-auto object-cover" />
                        <img src={img2} className="rounded-lg w-full h-auto object-cover" />
                        <img src={img3} className="rounded-lg w-full h-auto object-cover" />
                    </div>
                </div>
            </div>


        </Section>
    )
}

export default SeventhSection