import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta() {
    return {
        title: "GuitarLA - Sobre Nosotros",
        description: "Venta de guitarras, blog de música"
    }
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        },
        {
            rel: "preload",
            href: imagen,
            as: "image"
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>Et fugiat esse dolor fugiat excepteur amet duis reprehenderit aute cupidatat incididunt laboris voluptate. Velit velit adipisicing adipisicing reprehenderit. Cillum est ut et occaecat esse consequat ut. Nisi aliqua consequat tempor laborum id eu ex est eu commodo do ea. Exercitation duis velit velit nulla commodo consequat eu labore minim.</p>

                    <p>Et fugiat esse dolor fugiat excepteur amet duis reprehenderit aute cupidatat incididunt laboris voluptate. Velit velit adipisicing adipisicing reprehenderit. Cillum est ut et occaecat esse consequat ut. Nisi aliqua consequat tempor laborum id eu ex est eu commodo do ea. Exercitation duis velit velit nulla commodo consequat eu labore minim.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros