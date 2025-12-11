import { PresentationSection } from "../components/PresentationSection"
import { PromCard } from "../components/PromCard"
import { PromsSection } from "../components/PromsSection"

export function HomePage() {
    return (
        <section>
            <PresentationSection />
            <PromsSection>
                <PromCard />
                <PromCard />
                <PromCard />
            </PromsSection>
        </section>
    )
}

