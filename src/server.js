import { createServer } from "miragejs";

createServer({

    routes() {
        this.namespace = "api"
        this.logging = false
        this.get("/experience", () => ({
            experience:
            {
                name: "My experience",
                workPlace: [
                    {
                        id: "2",
                        workplaceName: "TTR SP. Z O.O.",
                        startDate: "06/2020",
                        endDate: "01.2023",
                        position: "Frontend / FullStack developer",
                        skills: [
                            {
                                skillName: "REACT+TS",
                                skillLevel: "2"
                            },
                            {
                                skillName: "JAVASCRIPT",
                                skillLevel: "3"
                            },
                        ],
                        jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa. Varius duis at consectetur lorem donec."
                    },
                    {
                        id: "1",
                        workplaceName: "TCN SP. Z O.O.",
                        startDate: "06/2018",
                        endDate: "06.2020",
                        position: "Junior JAVA developer",
                        skills: [
                            {
                                id: "3",
                                skillName: "JAVA",
                                skillLevel: "3"
                            },
                            {
                                id: "2",
                                skillName: "PL/SQL",
                                skillLevel: "3"
                            },
                            {
                                id: "1",
                                skillName: "Oracle Databases",
                                skillLevel: "2"
                            }
                        ],
                        jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa. Varius duis at consectetur lorem donec."
                    }

                ],
            }
        }))

        this.namespace = "api"
        this.logging = false
        this.get("/education", () => ({
            education:
            {
                name: 'My Education',
                schools: [
                    {
                        id: "2",
                        name: "Warsaw University of Technology",
                        faculty: "Institute of Computer Science",
                        schoolType: "Postgraduate",
                        startDate: "2022",
                        endDate: "2023",
                        course: "Postgraduate course in Java (EE) programming & software development",
                    },
                    {
                        id: "1",
                        name: "Military University of Technology in Warsaw",
                        faculty: " Faculty of Mechatronics & Aviation",
                        schoolType: "University",
                        startDate: "2011",
                        endDate: "2015",
                        course: "Engineer’s degree programme in System Security Engineering",
                    }
                ]
            }
        }))

        this.namespace = "api"
        this.logging = false
        this.get("/interests", () => ({
            interests:
            {
                name: "My interests",
                hobby: [
                    {
                        id: "3",
                        interestName: "Books",
                        interestDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        id: "2",
                        interestName: "Hiking",
                        interestDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        id: "1",
                        interestName: "Financial markets",
                        interestDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }
                ]
            }
        }))

        this.namespace = "api"
        this.logging = false
        this.get("/personal-data", () => ({
            name: "About me",
            information: {
                firstName: "Piotr",
                lastName: "K.",
                phoneNumber: "xxxxxx887",
                emailAddress: "xxx@gmail.com",
                linkedin: "linkedin.com/in/piotrk...",
                gitRepository: "github.com/sympatyczny",
                personalDescription: "Information about me - Lorem ipsus...",
            }
        }))

    }
})