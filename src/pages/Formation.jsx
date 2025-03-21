import React from "react";

const Formation = () => {
    const formations = [
        {
            diploma: "Master 2 en Management des Systèmes d’Information Automatisés",
            school: "Université ASSANE SECK de ZIGUINCHOR",
            year: "2022 - 2023"
        },
        {
            diploma: "Master 1, Management des Systèmes d’Information Automatisés",
            school: "Université ASSANE SECK de ZIGUINCHOR",
            year: "2021 - 2022"
        },
        {
            diploma: "Licence, Management Informatisé des Organisations",
            school: "Université ASSANE SECK de ZIGUINCHOR",
            year: "2020 - 2021"
        },
        {
            diploma: "Baccalauréat, Série L2",
            school: "Lycée WAOUNDE NDIAYE de BAKEL",
            year: "2017 - 2018"
        }
    ];

    const formations_continues = [
        {
            title: "Participation à la session de formation sur l’analyse textométrique des données d’entretiens à l’aide du logiciel lexico5",
            organisme: "AUF",
            year: "2023 - 2024"
        }
    ];

    return (
        <section className="formation">
            <h2>Formation</h2>

            <div className="formation-section">
                <h3>Formation Académique</h3>
                <div className="formations-list">
                    {formations.map((formation, index) => (
                        <div key={index} className="formation-item">
                            <div className="formation-year">{formation.year}</div>
                            <div className="formation-details">
                                <h4>{formation.diploma}</h4>
                                <p>{formation.school}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="formation-section">
                <h3>Formation Continue</h3>
                <div className="formations-list">
                    {formations_continues.map((formation, index) => (
                        <div key={index} className="formation-item">
                            <div className="formation-year">{formation.year}</div>
                            <div className="formation-details">
                                <h4>{formation.title}</h4>
                                <p>{formation.organisme}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Formation;