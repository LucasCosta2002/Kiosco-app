import Image from 'next/image'
import { formatearDinero } from '@/helpers'
import useKiosco from '@/hooks/useKiosco'

export default function ResumenProducto({producto}) {

    const {handleEditarCantidad, handleEliminarProducto} = useKiosco();

    return (
        <div className='shadow p-5 mb-3 md:flex gap-3 items-center'>
            <div className="md:w-1/6 flex justify-center p-2">
                <Image width={300} height={400} alt={`imagen producto ${producto.nombre}`} src={`/assets/img/${producto.imagen}.jpg`} />
            </div>
            <div className="md:w-4/6">
                <p className="font-bold text-3xl">{producto.nombre}</p>
                <p className="font-bold text-xl mt-2">Cantidad: {producto.cantidad}</p>
                <p className="font-bold text-xl mt-2">Precio: <span className='text-amber-500'> {formatearDinero(producto.precio)}</span></p>
                <p className="text-gray-700 text-sm p-2">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            </div>
            <div className="">
                <button
                    type='button'
                    className='bg-sky-700 flex px-5 py-2 gap-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center justify-center' 
                    onClick={()=> handleEditarCantidad(producto.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                    Editar
                </button>
                <button
                    type='button'
                    className='bg-red-700 flex px-5 py-2 gap-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center mt-5 justify-center' 
                    onClick={()=> handleEliminarProducto(producto.id)}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
