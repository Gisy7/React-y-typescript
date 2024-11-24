

function ErrorMessage({ children }: React.PropsWithChildren) {
    return (
        <p className='bg-red-600 text-center text-white p-1 text-sm'>{children}</p>
    )
}

export default ErrorMessage