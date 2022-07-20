import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookReader, faBowlFood, faHiking, faPlaneDeparture, faRunning,
} from "@fortawesome/free-solid-svg-icons";

export const expandingCardsDataBase = [
    {
        id: 1,
        title: "Running",
        url: "https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: <FontAwesomeIcon icon={faRunning}/>,
        active: true
    },
    {
        id: 2,
        title: "Hinking",
        url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        logo: <FontAwesomeIcon icon={faHiking}/>,
        active: false
    },
    {
        id: 3,
        title: "Cooking",
        url: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: <FontAwesomeIcon icon={faBowlFood}/>,
        active: false
    },
    {
        id: 4,
        title: "Reading",
        url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        logo: <FontAwesomeIcon icon={faBookReader}/>,
        active: false
    },
    {
        id: 5,
        title: "Travel",
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        logo: <FontAwesomeIcon icon={faPlaneDeparture}/>,
        active: false
    },

]

