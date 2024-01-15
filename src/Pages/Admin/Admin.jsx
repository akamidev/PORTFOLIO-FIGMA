import React, { useEffect, useState, useRef } from 'react';
import { getWorks, getCategories, deleteWork, addWork } from "../../Api"
import "./style.scss"
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTimes, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function Admin() {
    const [works, setWorks] = useState([])
    const [categories, setCategories] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState(1)
    const [file, setFile] = useState()
    const inputFile = useRef()

    useEffect(() => {
        (async () => {
            setWorks(await getWorks())
            setCategories(await getCategories())
        })();
    }, [])

    const handleDelete = async (id) => {
        await deleteWork(id)
        setWorks(await getWorks())
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('category', category)
        formData.append('image', file)

        const response = await addWork(formData)
        if (response) {
            setWorks(await getWorks())
            setModalOpen(false)
            setTitle('')
            setCategory('')
            setFile()
            inputFile.current.value = null
        }
    }

    return (
        <main className='Home'>
            {/* https://react.dev/reference/react-dom/createPortal */}
            {/* createPortal permet d'injecter de l'HTML dans d'autres parties de notre HTML */}
            {/* Par exemple, ici j'injecte ma modale dans document.body, qui par defaut n'est pas accessible avec ReactJs */}
            {createPortal(
                // Ici je fais mon HTML
                <div className={"modal " + (modalOpen != 1 ? 'hidden' : '')}>
                    <div className="modal__content">
                        <FontAwesomeIcon icon={faTimes} className="modal__content--close" onClick={() => setModalOpen(false)} />
                        <h2>Gallerie photo</h2>
                        <div className="modal__content-gallery">
                            {works.map((work) => (
                                <div key={work.id}>
                                    <img src={work.imageUrl} alt={work.title} />
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(work.id)} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setModalOpen(2)}>Ajouter un projet</button>
                    </div>
                </div>,
                // Puis je précise l'endroit ou j'inject
                document.body
            )}

            {createPortal(
                // Ici je fais mon HTML
                <div className={"modal " + (modalOpen != 2 ? 'hidden' : '')}>
                    <div className="modal__content">
                        <FontAwesomeIcon icon={faTimes} className="modal__content--close" onClick={() => setModalOpen(false)} />
                        <h2>Ajout d'un projet</h2>
                        <form action="" className="modal__content-form" onSubmit={handleSubmit}>
                            <input ref={inputFile} type="file" name="" id="" onChange={(e) => setFile(e.target.files[0])} />
                            <label htmlFor="title">Titre</label>
                            <input value={title} type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="category">Catégorie</label>
                            <select value={category} name="category" id="category" onChange={(e) => setCategory(e.target.value)} >
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            <button>Envoyer</button>
                        </form>
                    </div>
                </div>,
                // Puis je précise l'endroit ou j'inject
                document.body
            )}
            <section id="introduction">
                <figure>
                    <img src="/images/sophie-bluel.png" alt="" />
                </figure>
                <article>
                    <h2>Designer d'espace </h2>
                    <p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison
                        finale du chantier.</p>
                    <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les
                        couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du
                        chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
                    <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG,
                        décorateur(trice)</p>
                </article>
            </section>
            <section id="portfolio">
                <div className="flex">
                    <h2>Mes Projets </h2>
                    <span onClick={() => setModalOpen(1)} ><FontAwesomeIcon icon={faPenToSquare} /> Editer</span>
                </div>
                <div className="gallery">
                    {works.map((work) => (
                        <figure key={work.id}>
                            <img src={work.imageUrl} alt={work.title} />
                            <figcaption>{work.title}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>Vous avez un projet ? Discutons-en !</p>
                <form action="#" method="post">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Envoyer" />
                </form>
            </section>
        </main>
    );
}

export default Admin;