import styled from "styled-components"
import { FaCode } from "react-icons/fa"
import escape from "../assets/escape.png"
import nbaversus from "../assets/nbaversus.png"
import comingsoon from "../assets/comingsoon.png"

const ProjectPanel = () => {
    const ProjectPanelContainer = styled.div`
        width: 85%;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px auto;

        & .heading {
            margin-top: 50px;
            margin-bottom: 100px;
            font-size: 3em;
            font-weight: 500;
        }

        & .list {
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 5vw;
            row-gap: 30px;

            @media screen and (max-width: 1440px) {
                grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: 1024px) {
                grid-template-columns: 1fr;
            }
        }

        & .item {
            border-radius: 20px;
            box-shadow: 5px 10px 25px grey;

            height: auto;
            width: auto;
            max-width: 300px;

            text-align: left;
            padding: 40px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            & a {
                color: black;
                text-decoration: none;

                :hover {
                    color: dodgerblue;
                }
            }

            @media screen and (max-width: 550px) {
                padding: 30px;
            }
        }

        & .title {
            font-weight: 700;
            font-size: 2em;
        }

        & .description {
            color: #606060;
            font-size: 1.2em;
            padding: 20px 0px;
        }

        & .tags {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
        }

        & .tag {
            background-image: linear-gradient(#45befa, #07aae5);
            color: white;
            font-size: 1em;
            font-weight: 700;
            padding: 5px 8px;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 5px;
        }

        & .image {
            width: 80%;
            max-height: fit-content;
            margin: 40px auto;
            margin-bottom: 0;
            justify-content: center;
        }
    `
    return (
        <ProjectPanelContainer>
            <div className="heading">
                <FaCode />
                <br />
                Projects
            </div>
            <div className="list">
                <div className="item">
                    <div>
                        <div className="title">
                            <a href="https://www.nbaversus.com" target="_blank">
                                NBA Versus
                            </a>
                        </div>
                        <div className="description">
                            Web app that lets users vote on a matchup between 2
                            random NBA players. Features almost 15,000 unique
                            matchups, a global leaderboard and the ability to
                            track your favorite players and teams!
                        </div>
                        <div className="tags">
                            <div className="tag">React</div>
                            <div className="tag">Node</div>
                            <div className="tag">Express</div>
                            <div className="tag">MongoDB</div>
                            <div className="tag">JavaScript</div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", display: "flex" }}>
                        <img src={nbaversus} alt="escape" className="image" />
                    </div>
                </div>
                <div className="item">
                    <div>
                        <div className="title">
                            <a
                                href="https://ctrl-ace.itch.io/escape-from-underworld"
                                target="_blank"
                            >
                                Escape from Underworld
                            </a>
                        </div>
                        <div className="description">
                            2D Platformer built with a focus on traversal
                            abilities. Each ability opens up a new path for
                            players to explore. Collect all the abilities to
                            make your great escape!
                        </div>
                        <div className="tags">
                            <div className="tag">Unity</div>
                            <div className="tag">C#</div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", display: "flex" }}>
                        <img src={escape} alt="escape" className="image" />
                    </div>
                </div>
                <div className="item">
                    <div>
                        <div className="title">Empyria</div>
                        <div className="description">
                            Play-to-earn experience built on the Polygon /
                            Ethereum blockchain. Includes web app featuring a
                            landing page, digital wallet integration, token mint
                            interface and marketplace!
                        </div>
                        <div className="tags">
                            <div className="tag">React</div>
                            <div className="tag">Next.js</div>
                            <div className="tag">Arweave</div>
                            <div className="tag">Unity</div>
                            <div className="tag">C#</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">Solidity</div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", display: "flex" }}>
                        <img src={comingsoon} alt="escape" className="image" />
                    </div>
                </div>
            </div>
        </ProjectPanelContainer>
    )
}

export default ProjectPanel
