export default function Star({ difficulty }) {
    let star = ""
    for (let i = 0; i < difficulty; i++) {
        star += "⭐"
    }
    return (
        <p>{star}</p>
    )
}