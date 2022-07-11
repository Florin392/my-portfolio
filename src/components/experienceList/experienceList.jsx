import "./experienceList.scss"

export default function ExperienceList({id, title, active, setCateg}) {
    return (
        <li className={active ? "experienceList active" : "experienceList"}
            onClick={() => setCateg(id)}
        >
            {title}</li>
    )
}