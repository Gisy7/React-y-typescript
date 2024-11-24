
type CaloriesDisplay = {
    calories: number,
    text: string
}

export default function CaloriesDisplay({ calories, text }: CaloriesDisplay) {
    return (
        <div className="mt-8">
            <p className="text-3xl font-black text-white">{calories}</p>
            <p className="text-2xl  text-white">{text}</p>
        </div>
    )
}
