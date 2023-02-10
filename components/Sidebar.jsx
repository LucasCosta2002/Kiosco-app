import useKiosco from "@/hooks/useKiosco"
import Image from "next/image"
import Categoria from "./Categoria";

export default function Sidebar() {

    const {categorias} = useKiosco();

    return (
        <>
            <div className="flex  justify-center">
                <Image width={200} height={80} src="/assets/img/logo.svg" alt="imagen logo"/>
            </div>

            <nav className="mt-5">
                {categorias.map(categoria => (
                    <Categoria 
                        key={categoria.id} 
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}
