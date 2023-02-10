import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

const KioscoContext = createContext();

const KioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    
    const router = useRouter()

    const obtenerCategorias = async ()=>{ //obtener categorias del archivo donde se consula la db
        const {data} = await axios("/api/categorias");
        setCategorias(data)
    }
    useEffect(()=>{
        obtenerCategorias()
    }, [])

    // seleccionar categoria por defecto al actualizar la app
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    }, [categorias])
    
    const handleClickCategoria = id =>{
        const categoria = categorias.filter(categoriaState => categoriaState.id === id)
        setCategoriaActual(categoria[0]);
        router.push("/")
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () =>{
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId ,...producto}) => { // no quiero la categoria, me traigo una copia del obj sin ellos
        if( pedido.some(productoState => productoState.id === producto.id)){
            // alert("ya existe")
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success("Actualizado Correctamente")

        }else{
            setPedido([...pedido, producto])
            toast.success("Agregado Correctamente")
        }

        setModal(false)
        
    }

    const handleEditarCantidad = id =>{
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id =>{
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    //llevar a base de datos
    const colocarOrden = async e =>{
        e.preventDefault()
        
        try{
            await axios.post("/api/ordenes", {pedido, nombre, total, fecha: Date.now().toString()})

            //reset app 
            setCategoriaActual(0)
            setProducto({})
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success("Pedido Realizado correctamente")
            setTimeout(() => {
                router.push("/")
            }, 3000);
        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad + total), 0)
        setTotal(nuevoTotal)
    }, [pedido])

    return (
        <KioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
            }}
        >
            {children}
        </KioscoContext.Provider>
    )
}

export {
    KioscoProvider
};

export default KioscoContext;