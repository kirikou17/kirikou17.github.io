import React from "react";

const Experiences = () => {
    const experiences = [
        {
            title: "Stagiaire technicien support informatique",
            company: "SENELEC/DRS",
            period: "2024 (Septembre-Octobre)",
            description: "Assistance aux utilisateurs, sur place comme à distance. Mise en service, configuration et maintenance des postes de travail.",
            achievements: [] // Vous pouvez ajouter des réalisations spécifiques si vous en avez
        },
        {
            title: "Stagiaire développeur",
            company: "Mairie de Ziguinchor",
            period: "2021-2022 (Décembre – Février)",
            description: "Dématérialisation des dossiers de candidatures d’emplois et de stages de la Direction des ressources humaines. Maintenance Informatique.",
            achievements: [] // Vous pouvez ajouter des réalisations spécifiques si vous en avez
        }
    ];

    return (
        <section className="experiences">
            <h2>Expériences Professionnelles</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>{exp.title}</h3>
                                <span className="company">{exp.company}</span>
                                <span className="period">{exp.period}</span>
                            </div>
                            <p>{exp.description}</p>
                            {exp.achievements && exp.achievements.length > 0 && ( // Vérifie si achievements existe et n'est pas vide
                                <div className="achievements">
                                    <h4>Réalisations clés:</h4>
                                    <ul>
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;