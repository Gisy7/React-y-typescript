
type patientDetailItem = {
    label: string,
    name: string
}



function PatientDetailItem({ label, name }: patientDetailItem) {
    return (
        <div className="flex gap-1">
            <span className="font-black semibold">{label}:</span>
            <p>{name}</p>
        </div>
    )
}

export default PatientDetailItem