import React, { useEffect, useState } from 'react';
import "./style.scss"
import { getWorks, getCategories } from "../../Api"

function Home() {
    const [categories, setCategories] = useState([])
    const [works, setWorks] = useState([])
    const [currentCategory, setCurrentCategory] = useState(0)

    useEffect(() => {
        (async () => {
            setWorks(await getWorks())
            setCategories(await getCategories())
        })();
    }, [])

    const selectCategory = (e) => {
        setCurrentCategory(e.target.getAttribute('data-id'))
    }

    return (
        <main className='Home'>
            <section id="introduction">
                <figure>
                    <img src="/images/sophie-bluel.png" alt="" />
                </figure>
                <article>
                    <h2>Designer d'espace</h2>
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
                <h2>Mes Projets</h2>
                <div className="categories">
                    <button data-id="0" onClick={selectCategory}>Tous</button>
                    {categories.map((category) => (
                        <button key={category.id} data-id={category.id} onClick={selectCategory}>{category.name}</button>
                    ))}
                </div>
                <div className="gallery">
                    {works.map((work) => (
                        <figure key={work.id} className={currentCategory != work.categoryId && currentCategory != 0 ? 'hidden' : ''}>
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

export default Home;