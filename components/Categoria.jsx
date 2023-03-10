import useKiosco from '@/hooks/useKiosco';
import Image from 'next/image'

export default function Categoria({categoria}) {

    const {categoriaActual, handleClickCategoria} = useKiosco()

    const {nombre, icono, id} = categoria;

    return (
        <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image width={50} height={70} src={`/assets/img/icono_${icono}.svg`} alt="imagen icono" />
            <button 
                type='button' 
                className='text-2xl font-bold hover:cursor-pointer'
                onClick={()=> handleClickCategoria(id)}
            >{nombre}</button>
        </div>
    )
}
