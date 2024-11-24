import { ReactNode } from 'react'

type ErrorProp = {
    children: ReactNode
}

function Error({ children }: ErrorProp) {
    return (
        <p
            className='text-center bg-red-600 text-white font-bold p-3 uppercase, text-sm'>
            {children}
        </p>
    )
}

export default Error