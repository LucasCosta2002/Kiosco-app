import Producto from "@/components/Producto";
import useKiosco from "@/hooks/useKiosco"
import Layout from "@/layout/Layout"

export default function Home() {

	const {categoriaActual} = useKiosco();
	return (
		<Layout pagina={`${categoriaActual?.nombre}`}>
			<h1 className="text-4xl font-black text-center md:text-left">{categoriaActual?.nombre}</h1>
			<p className="text-2xl my-10 text-center md:text-left">Elige y personaliza tu pedido a continuación</p>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

				{categoriaActual?.productos?.map(producto => (
					<Producto
						key={producto.id}
						producto={producto}
					/>
				))}
			</div>
		</Layout>
	)
}

