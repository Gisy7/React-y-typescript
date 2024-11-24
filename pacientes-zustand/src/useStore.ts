
import { create } from "zustand"
import { formPatient, patient } from './types/index';
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type patientState = {
    patients: patient[]
    activeId: patient["id"]
    addPatient: (patient: formPatient) => void
    deletePatient: (id: patient["id"]) => void
    getPatientById: (id: patient["id"]) => void
    updatePatient: (patientEdit: formPatient) => void
}


const createPatient = (patient: formPatient) => {
    return { ...patient, id: crypto.randomUUID() }
}

export const patientStore = create<patientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeId: "",

            addPatient: (patient) => {
                const newPatient = createPatient(patient)
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },

            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter((patient) => patient.id !== id)
                }))
            },

            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },

            updatePatient: (patientEdit) => {
                set((state) => ({
                    patients: state.patients.map((patient) => patient.id === state.activeId ? { ...patientEdit, id: state.activeId } : patient),
                    activeId: ""
                }))
            }
        }), {
            name: "patient-storage",
            storage: createJSONStorage(() => localStorage)
        })

    ))