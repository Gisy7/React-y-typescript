import { patient } from "../types"
import { patientStore } from "../useStore";
import PatientDetailItem from './PatientDetailItem';
import { toast } from 'react-toastify';



type patientDetailsProps = {
    patient: patient
}


function PatientDetails({ patient }: patientDetailsProps) {

    const deletePatient = patientStore(state => state.deletePatient)
    const getPatientById = patientStore(state => state.getPatientById)

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 w-full flex flex-col gap-3">
            <PatientDetailItem label={"ID"} name={patient.id} />
            <PatientDetailItem label={"Nombre"} name={patient.name} />
            <PatientDetailItem label={"Propietario"} name={patient.caretaker} />
            <PatientDetailItem label={"Email"} name={patient.email} />
            <PatientDetailItem label={"Fecha alta"} name={patient.date.toString()} />
            <PatientDetailItem label={"Sintomas"} name={patient.symptoms} />

            <div className="flex justify-between mt-10">
                <button
                    className="bg-indigo-600 font-semibold text-white rounded-lg uppercase py-2 px-10 hover:bg-indigo-700"
                    onClick={() => { getPatientById(patient.id) }}>Editar</button>
                <button
                    className="bg-red-600 font-semibold text-white rounded-lg uppercase py-2 px-10 hover:bg-red-700"
                    onClick={() => {
                        deletePatient(patient.id)
                        toast.error(" Paciente eliminado")
                    }}>Eliminar</button>
            </div>
        </div>
    )
}

export default PatientDetails