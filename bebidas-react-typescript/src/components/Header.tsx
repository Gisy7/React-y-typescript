import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { useStoreApp } from '../store/useStoreApp';
import ShowError from './Error';

function Header() {

    const { pathname } = useLocation()
    const isHome = pathname === "/"
    const fetchCategories = useStoreApp(state => state.fetchCategories)
    const categories = useStoreApp(state => state.categories)
    const searchRecipe = useStoreApp(state => state.searchRecipe)
    const showNotification = useStoreApp(state => state.showNotification)

    useEffect(() => {
        fetchCategories()
    }, []);


    const [form, setForm] = useState({
        ingredient: "",
        category: ""
    });

    const [error, setError] = useState("");


    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(form).includes("")) {
            setError("No pueden haber campos vacios")
            showNotification({text: "Todos los campos son obligaorios", error: true})
            return
        }
        setError("")
        searchRecipe(form)
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover min-h-screen' : 'bg-slate-800'}>

            <div className='container mx-12 p-10 flex items-center justify-between'>

                <img
                    src="logo.svg"
                    alt="cocktail icon"
                    className='w-24' />


                <nav className='flex gap-5 uppercase font-bold'>

                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white"
                        }}
                    >Inicio</NavLink>
                    <NavLink
                        to="/favoritos"
                        className={({ isActive }) => {
                            return isActive ? "text-orange-500" : "text-white"
                        }}
                    >Favoritos</NavLink>

                </nav>
            </div>


            {isHome && <form
                className='bg-orange-500 space-y-5 container mx-12 p-10  w-1/3 rounded-lg '
                onSubmit={handleSubmit}>
                    
                {error && <ShowError>{error}</ShowError>}
                
                <div className='flex flex-col space-y-2'>
                    <label
                        htmlFor="name"
                        className='text-white uppercase font-bold'
                    >Nombre o ingredientes </label>
                    <input 
                        type="text" 
                        name='ingredient'
                        className='py-2 rounded-lg' 
                        onChange={handleChange} />
                </div>

                <div className='flex flex-col space-y-2'>

                    <label
                        htmlFor="category"
                        className='text-white uppercase font-bold'
                    >Categoría</label>
                    <select name="category" id="category" className='py-2 rounded-lg' onChange={handleChange}>
                        <option value="">-- Seleccione --</option>
                        {categories.drinks?.map((category) => {
                            return <option
                                value={category.strCategory}
                                key={category.strCategory}
                            >{category.strCategory}</option>
                        })}
                    </select>

                </div>

                <input
                    type="submit"
                    value="Buscar Recetas"
                    className='bg-orange-800 px-10 py-2 cursor-pointer text-white rounded-lg w-full hover:bg-orange-900' />
            </form>}


        </header>
    )
}

export default Header