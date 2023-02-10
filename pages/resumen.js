import ResumenProducto from '@/components/ResumenProducto'
import useKiosco from '@/hooks/useKiosco'
import Layout from '@/layout/Layout'

export default function Resumen() {

    const {pedido} = useKiosco()

    return (
        <Layout pagina='Resumen'>
            <h1 className='text-4xl font-black text-center md:text-left'>Resumen</h1>
            <p className='text-2xl my-8 text-center md:text-left'>Revisa el pedido</p>
        
             {pedido.length === 0 ? (
                <p className='text-center text-2xl'>No hay Elementos</p>
             ) : (
                pedido.map( producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
             )}
        
        </Layout>
    )
}
