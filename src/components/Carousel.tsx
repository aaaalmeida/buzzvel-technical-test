import {
    ReactNode,
    useRef,
    useImperativeHandle,
    forwardRef,
    useEffect
} from "react"

interface ICarouselProps {
    children: ReactNode[]
    autoScroll?: boolean
    scrollInterval?: number
    itemWidth?: number
}

export interface ICarouselHandle {
    handlePrev: () => void
    handleNext: () => void
}

const Carousel = forwardRef<ICarouselHandle, ICarouselProps>(
    ({
        children,
        itemWidth = 800,
        autoScroll = false,
        scrollInterval = 5000 // 5000ms = half sec
    }, ref // parent component reference, used to get next and previous buttons event
    ) => {
        const containerRef = useRef<HTMLDivElement>(null)

        const handleNext = () => {
            const container = containerRef.current
            // when carousel is created, containerRef is null
            // this makes sure the element have been already mounted
            if (!container) return


            const { scrollLeft, clientWidth, scrollWidth } = container
            const atEnd = scrollLeft + clientWidth >= scrollWidth - 1

            // check if carousel is at last position
            if (atEnd) {
                container.scrollTo({ left: 0, behavior: "smooth" })
            } else {
                container.scrollBy({ left: itemWidth, behavior: "smooth" })
            }
        }

        const handlePrev = () => {
            const container = containerRef.current
            if (!container) return

            // check if carousel is at start
            const atStart = container.scrollLeft === 0
            if (atStart) {
                container.scrollTo({ left: container.scrollWidth, behavior: "smooth" })
            } else {
                container.scrollBy({ left: -itemWidth, behavior: "smooth" })
            }
        }

        // control buttons action
        useImperativeHandle(ref, () => ({
            handlePrev,
            handleNext
        }))

        // scroll effect
        useEffect(() => {
            if (!autoScroll) return
            const interval = setInterval(handleNext, scrollInterval)
            return () => clearInterval(interval)
        }, [autoScroll, scrollInterval])

        return (
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-hidden w-full pb-4 scroll-smooth no-scrollbar"
            >
                {children.map((child, index) => (
                    <div key={index} className="shrink-0" style={{ minWidth: itemWidth }}>
                        {child}
                    </div>
                ))}
            </div>
        )
    }
)

export default Carousel
