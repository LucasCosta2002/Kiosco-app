import useSWR from "swr"
import axios from "axios"
import Orden from "@/components/Orden"
import Layout from "@/layout/Layout"
export default function Admin() {   
    // consultar api con swr y axios
    const fetcher = ()=> axios("/api/ordenes").then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

    return (
        <Layout pagina="Admin">
            <h1 className="text-4xl font-black text-center md:text-left">Panel de Administración</h1>
			<p className="text-2xl my-10 text-center md:text-left">Administrá tus ordenes</p>

            {data && data.length ? data.map(orden => 
                <Orden
                    key={orden.id}
                    orden={orden}
                />
            ) : <p>No hay ordenes pendientes</p>}
        </Layout>
    )
}
