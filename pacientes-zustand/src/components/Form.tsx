import { useForm } from "react-hook-form"
import FormError from "./Error"

import { formPatient } from "../types";
import { patientStore } from "../useStore";
import { useEffect } from "react";
import { toast } from 'react-toastify';




function Form() {

    const addPatient = patientStore(state => state.addPatient)
    const updatePatient = patientStore(state => state.updatePatient)

    const patients = patientStore(state => state.patients)
    const activeId = patientStore(state => state.activeId)

    const registerPatient = (patient: formPatient) => {
        if (activeId) {
            updatePatient(patient)
            toast.success("Paciente editado correctamente");

        } else {
            addPatient(patient)
            toast.success("Paciente registrado correctamente");
        }

        reset()
    }

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<formPatient>()


    useEffect(() => {
        if (activeId) {
            const activePacient = patients.filter((patient) => patient.id === activeId)[0]

            setValue("name", activePacient.name)
            setValue("caretaker", activePacient.caretaker)
            setValue("date", activePacient.date)
            setValue("email", activePacient.email)
            setValue("symptoms", activePacient.symptoms)
        }
    }, [activeId]);

    return (
        <section className='flex  flex-col items-center gap-3'>
            <h2 className='font-black  text-3xl'>Seguimiento Pacientes </h2>
            <p className='text-lg'>Añade Pacientes y <strong className='text-indigo-700'>administradores</strong></p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 w-full"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register("name", {
                            required: "El nombre del paciente es obligatorio",
                            maxLength: {
                                value: 50,
                                message: "Máximo de 50 caracteres"
                            }
                        })}
                    />
                    {errors.name?.message &&
                        <FormError> {errors.name?.message?.toString()} </FormError>}


                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register("caretaker", {
                            required: "El caretaker del paciente es obligatorio",

                        })}
                    />
                    {errors.caretaker?.message &&
                        <FormError> {errors.caretaker?.message?.toString()} </FormError>}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })}
                    />

                    {errors.email?.message &&
                        <FormError> {errors.email?.message?.toString()} </FormError>}

                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register("date", {
                            required: "La fecha es obligatoria",

                        })}
                    />

                    {errors.date?.message &&
                        <FormError> {errors.date?.message?.toString()} </FormError>}

                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register("symptoms", {
                            required: "Los sítomas son obligatorios",

                        })}
                    ></textarea>
                    {errors.symptoms?.message &&
                        <FormError> {errors.symptoms?.message?.toString()} </FormError>}

                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />

            </form>

        </section>
    )
}

export default Form