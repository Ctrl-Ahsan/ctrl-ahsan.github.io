import styled from "styled-components"
import { FaCode } from "react-icons/fa"
import escape from "../assets/escape.png"
import nbaversus from "../assets/nbaversus.png"
import lantec from "../assets/lantec.png"
import glassvault from "../assets/glassvault.png"

const ProjectPanel = () => {
    const ProjectPanelContainer = styled.div`
        width: 85%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px auto;

        .heading {
            margin-top: 50px;
            margin-bottom: 100px;
            font-size: 3em;
            font-weight: 500;
        }

        .list {
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 3vw;
            row-gap: 30px;

            @media screen and (max-width: 1440px) {
                grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: 1024px) {
                grid-template-columns: 1fr;
            }
        }

        .item {
            border-radius: 20px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.5s;
            cursor: pointer;
            max-width: 300px;
            text-align: left;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            :hover {
                box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.2);
            }

            a {
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

        .title {
            font-weight: 700;
            font-size: 2em;
        }

        .description {
            color: #606060;
            font-size: 1.2em;
            padding: 10px 0px;
        }

        .tags {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
        }

        .tag {
            background-image: linear-gradient(#45befa, #07aae5);
            color: white;
            font-size: 1em;
            font-weight: 700;
            padding: 5px 8px;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 5px;
        }

        .image {
            width: 80%;
            max-height: fit-content;
            margin: 40px auto;
            margin-bottom: 0;
            justify-content: center;
        }
    `

    const projects = [
        {
            title: "NBA Versus",
            description:
                "Web app where fans debate and analyze their favorite NBA players. Features thousands of unique matchups, stats and player props analysis tools.",
            tags: ["React", "Node", "Express", "MongoDB"],
            image: nbaversus,
            link: "https://www.nbaversus.com",
        },

        {
            title: "Lantec",
            description:
                "Website for a Muskoka-based construction and design company. Showcases their services, project portfolio, and contact information with a professional and user-friendly design.",
            tags: ["React"],
            image: lantec,
            link: "https://lantecbuilds.com",
        },
        {
            title: "GlassVault",
            description:
                "Crypto portfolio app utilizing the Binance API to connect directly with your account and provide essential trading insights. Tracks metrics like average buy price for assets and total trading fees.",
            tags: ["React", "Node", "Express"],
            image: glassvault,
            link: "https://github.com/Ctrl-Ahsan/glassvault",
        },
        {
            title: "Escape from Underworld",
            description:
                "2D Platformer built with a focus on traversal abilities. Each ability opens up a new path for players to explore. Collect all the abilities to make your great escape!",
            tags: ["Unity", "C#"],
            image: escape,
            link: "https://ctrl-ace.itch.io/escape-from-underworld",
        },
    ]

    return (
        <ProjectPanelContainer>
            <div className="heading">
                <FaCode />
                <br />
                Projects
            </div>
            <div className="list">
                {projects.map((project, index) => (
                    <div
                        className="item"
                        key={index}
                        onClick={() => window.open(project.link, "_blank")}
                    >
                        <div>
                            <div
                                style={{
                                    textAlign: "center",
                                    display: "flex",
                                    marginBottom: "20px",
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="image"
                                />
                            </div>
                            <div className="title">{project.title}</div>
                            <div className="description">
                                {project.description}
                            </div>
                            <div className="tags">
                                {project.tags.map((tag, idx) => (
                                    <div className="tag" key={idx}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProjectPanelContainer>
    )
}

export default ProjectPanel
