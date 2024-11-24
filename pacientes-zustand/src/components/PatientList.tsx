import { patientStore } from "../useStore"
import PatientDetails from "./PatientDetails";


function PatientList() {

    const patients = patientStore(state => state.patients)


    console.log(patients);

    return (
        <>
            {patients.length === 0 ?
                <>
                    <section className='flex flex-col items-center gap-3'>
                        <h2 className='font-black  text-3xl'>No hay pacientes</h2>
                        <p className='text-lg'>Comienza agregando pacientes
                            <strong className='text-indigo-700' > y aparecerán en este lugar</strong></p>
                    </section>

                </>
                :
                <>
                    <section className='flex flex-col items-center gap-3'>
                        <h2 className='font-black  text-3xl'>Listado de pacientes</h2>
                        <p className='text-lg'>Administra tus <strong className='text-indigo-700' >Pacientes y Citas</strong></p>


                        {patients.map((patient) => {
                            return <PatientDetails key={patient.id} patient={patient} />
                        })}

                    </section>
                </>
            }


        </>


    )
}

export default PatientList