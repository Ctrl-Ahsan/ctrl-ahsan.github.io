import { useEffect, useState } from "react"
import styled from "styled-components"
import { CgSmartphoneChip } from "react-icons/cg"
import { motion, AnimatePresence } from "framer-motion"

const TechnologiesPanel = () => {
    const techList = [
        {
            name: "JavaScript",
            image: "javascript.png",
            category: "language",
        },
        {
            name: "TypeScript",
            image: "typescript.png",
            category: "language",
        },
        {
            name: "React",
            image: "react.png",
            category: "framework",
        },
        {
            name: "Angular",
            image: "angular.png",
            category: "framework",
        },
        {
            name: "Node",
            image: "node.png",
            category: "framework",
        },
        {
            name: "Express",
            image: "express.png",
            category: "framework",
        },
        {
            name: "Python",
            image: "python.png",
            category: "language",
        },
        {
            name: "Java",
            image: "java.png",
            category: "language",
        },
        {
            name: "C#",
            image: "csharp.png",
            category: "language",
        },
        {
            name: ".NET",
            image: "dotnet.png",
            category: "framework",
        },
        {
            name: "SSMS",
            image: "sql.png",
            category: "tools",
        },
        {
            name: "MongoDB",
            image: "mongodb.png",
            category: "tools",
        },
        {
            name: "GPT",
            image: "gpt.png",
            category: "tools",
        },
        {
            name: "Figma",
            image: "figma.png",
            category: "tools",
        },
        {
            name: "Unity",
            image: "unity.png",
            category: "tools",
        },
    ]

    const Technology = () => {
        const [filtered, setFiltered] = useState([])
        const [category, setCategory] = useState("all")

        useEffect(() => {
            if (category === "all") {
                setFiltered(techList)
                return
            }

            const filtered = techList.filter((tech) =>
                tech.category.includes(category)
            )
            setFiltered(filtered)
        }, [category])

        return (
            <>
                <div className="categories">
                    <div
                        className="categoryName"
                        id={category === "all" ? "active" : ""}
                        onClick={() => setCategory("all")}
                    >
                        All
                    </div>
                    <div
                        className="categoryName"
                        id={category === "language" ? "active" : ""}
                        onClick={() => setCategory("language")}
                    >
                        Languages
                    </div>
                    <div
                        className="categoryName"
                        id={category === "framework" ? "active" : ""}
                        onClick={() => setCategory("framework")}
                    >
                        Frameworks
                    </div>
                    <div
                        className="categoryName"
                        id={category === "tools" ? "active" : ""}
                        onClick={() => setCategory("tools")}
                    >
                        Tools
                    </div>
                </div>
                <div className="techContainer">
                    <motion.div className="techGrid">
                        <AnimatePresence>
                            {filtered.map((technology, i) => {
                                return (
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="item"
                                        key={i}
                                    >
                                        <img
                                            src={"/" + technology.image}
                                            alt={technology.name}
                                        />
                                        <h3>{technology.name}</h3>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </>
        )
    }

    const TechnologiesPanelContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 85%;
        align-items: center;
        margin: 30px auto;
        margin-bottom: 50px;

        & .heading {
            margin-top: 50px;
            margin-bottom: 30px;
            font-size: 3em;
            font-weight: 500;
        }

        & .categories {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 40px;
            & #active {
                border-bottom: solid 1px dodgerblue;
                color: dodgerblue;
            }
        }

        & .categoryName {
            margin: 2vw;
            padding: 15px;
            font-weight: 500;
            color: grey;

            cursor: pointer;
            transition: all 0.3s;
            :hover {
                color: dodgerblue;
            }
        }

        & .techContainer {
            display: flex;
            justify-content: center;
            margin-bottom: 100px;
        }

        & .techGrid {
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            column-gap: 10vw;
            row-gap: 30px;

            @media screen and (max-width: 1024px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
            @media screen and (max-width: 512px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        & .item {
            display: flex;
            flex-direction: column;
            border-radius: 20px;

            margin: 0px auto;

            img {
                width: 70%;
                margin-top: 10px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    `

    return (
        <TechnologiesPanelContainer>
            <div className="heading">
                <CgSmartphoneChip />
                <br />
                Technologies
            </div>
            <Technology />
        </TechnologiesPanelContainer>
    )
}

export default TechnologiesPanel
