import { useEffect, useCallback } from 'react'
import Layout from '@/layout/Layout'
import useKiosco from '@/hooks/useKiosco'
import { formatearDinero } from '@/helpers'

export default function Total() {

    const {pedido, nombre, setNombre, colocarOrden, total} = useKiosco()

    const comprobarPedido = useCallback(()=>{
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre]);
    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])
    
    // const comprobarPedido2 = () => pedido.length === 0 || nombre === '' || nombre.length < 3

    return (
        <Layout pagina='Total y Confirmar pedido'>
            <h1 className='text-4xl font-black text-center md:text-left'>Total y Confirmar pedido</h1>
            <p className='text-2xl my-10 '>Confirma el pedido a continuación</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label className='block uppercase text-slate-800 font-bold text-xl' htmlFor='nombre'>Nombre</label>
                    <input 
                        type="text" 
                        className='w-full bg-gray-200 lg:w-1/3 mt-3 p-2 rounded-md' 
                        id='nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='mt-10'>
                    <p className='text-2xl'>Total a Pagar: <span className='font-bold'>{formatearDinero(total)}</span></p>
                </div>

                <div className='mt-5'>
                    <input value="Confirmar Pedido" className={`${comprobarPedido() ? "bg-indigo-300 hover:cursor-not-allowed" : "bg-indigo-600 hover:cursor-pointer"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white  text-center `} type="submit" disabled={comprobarPedido()}/>
                    {/* <button
                        type="submit" 
                        disabled={comprobarPedido()}
                        className={`${comprobarPedido() ? "bg-indigo-300 hover:cursor-not-allowed" : "bg-indigo-600 hover:cursor-pointer"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white  text-center `}
                    >
                    Confirmar Pedido
                    </button> */}
                </div>
            </form>
        </Layout>
    )
}
