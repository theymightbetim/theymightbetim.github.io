import { SocialLinks } from "../components/social/social"


export function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <SocialLinks />
        </div>
    )
}

const Header = () => {
    return <h1>Tim Mackenzie - Quality Assurance Professional </h1>
}

const Intro = () => {
    return <p>Welcome to my website! It's under construction, but check back soon!</p>
}