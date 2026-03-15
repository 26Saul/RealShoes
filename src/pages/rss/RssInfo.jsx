import React from "react";

function RssInfo() {
    return (
        <main className="rss-page">
            <h1>RSS de noticias de RealShoes</h1>
            <p>
                Aquí puedes consultar el feed RSS con las últimas noticias y ofertas de la app.
            </p>

            <ul>
                <li>
                    <a
                        href="https://realshoes-ab18c.web.app/rss.xml"
                        target="_blank"
                        rel="noreferrer"
                    >
                        RSS Noticias de RealShoes
                    </a>
                </li>
                <li>
                    <a
                        href="https://realshoes-ab18c.web.app/rssOffer.xml"
                        target="_blank"
                        rel="noreferrer"
                    >
                        RSS Modelos Especiales de RealShoes
                    </a>
                </li>
            </ul>

        </main>
    );
}

export default RssInfo;
