import React from "react";

const Competences = () => {
    const competencesList = [
        {
            category: "Compétences",
            skills: [
                "Création et administration de base de données",
                "Informatique décisionnelle et analyse de données",
                "Modélisation et développement informatique",
                "Installation et configuration de systèmes d'exploitation",
                "Prise en main d'un poste de travail à distance",
                "Maintenance, Réseau et Sécurité Informatique",
                "Comptabilité",
                "Contrôle de gestion",
                "Gestion de projet entrepreneuriale et informatique",
                "Analyse et décision financière"
            ]
        },
        {
            category: "Outils et logiciels",
            skills: [
                "Modélisation de Système d'Information : MERISE et UML",
                "Base de données et analyse de données : MySQL, Access, R Studio, Lexico 5, Sphinx, KoBoToolbox et Excel",
                "Informatique décisionnelle : TALEND, POWER BI et TABLEAU",
                "Outils collaboratifs : Microsoft 360 et Google Drive",
                "Langages de programmation : VBA, PASCAL, PHP, JavaScript, JAVA, SQL, R et PYTHON",
                "CMS et framework web : WordPress, Laravel, Django, React JS",
                "Systèmes d'exploitation et serveurs : Windows et Ubuntu",
                "Réseau et sécurité : Cisco Packet Tracer, Snort et Wireshark",
                "Services réseau : Active Directory, Asterisk, SMB, DHCP ...",
                "Comptabilité : Sage comptabilité 100"
            ]
        }
    ];

    return (
        <section className="competences">
            <h2>Compétences</h2>

            <div className="competences-container">
                {competencesList.map((category, index) => (
                    <div key={index} className="competence-category">
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Supprimez ou modifiez la section "Certifications" si nécessaire */}
            {/* <div className="certifications">
                <h3>Certifications</h3>
                <div className="certification-list">
                    <div className="certification">ITIL 4 Foundation</div>
                    <div className="certification">PMP (Project Management Professional)</div>
                    <div className="certification">TOGAF 9 Certified</div>
                    <div className="certification">Scrum Master</div>
                </div>
            </div> */}
        </section>
    );
};

export default Competences;