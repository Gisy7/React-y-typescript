export type patient = {
    id: string
    name: string
    caretaker: string
    date: Date
    email: string
    symptoms: string
}


export type formPatient = Omit<patient, "id">

