import React, { useState, useEffect } from "react";
import axios from "axios";
import "./societe.css";

export default function Societe() {
    const [IDSociete, setIDSociete] = useState("");
    const [NomSociete, setNomSociete] = useState("");
    const [Adresse, setAdresse] = useState("");
    const [CodeCNSS, setCodeCNSS] = useState("");
    const [MatriculeFiscal, setMatriculeFiscal] = useState("");
    const [CodeTVA, setCodeTVA] = useState("");
    const [CodeCategorie, setCodeCategorie] = useState("");
    const [NombreEtsSecondaire, setNombreEtsSecondaire] = useState("");
    const [Tel, setTel] = useState("");
    const [Fax, setFax] = useState("");
    const [Responsable, setResponsable] = useState("");
    const [Mail, setMail] = useState("");
    const [TauxCNSSPatronal, setTauxCNSSPatronal] = useState("");
    const [TauxAccidentTravail, setTauxAccidentTravail] = useState("");
    const [TauxCNSSOuvriere, setTauxCNSSOuvriere] = useState("");
    const [TauxTFP, setTauxTFP] = useState("");
    const [TauxFOPROLOS, setTauxFOPROLOS] = useState("");
    const [AssuranceGroupe, setAssuranceGroupe] = useState("");
    const [TauxAssGroupePatronal, setTauxAssGroupePatronal] = useState("");
    const [TauxAssGroupeOuvriere, setTauxAssGroupeOuvriere] = useState("");
    const [Banque, setBanque] = useState("");
    const [RIB, setRIB] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3001/api/get").then((response) => {
            setSociete(response.data);
        });
    }, []);
    // const deleteReview = (IDSociete) => {
    //     axios
    //         .delete(`http://localhost:3001/api/delete/${IDSociete}`)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };
    // const deleteAll = () => {
    //     axios
    //         .delete(`http://localhost:3001/api/delete`)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };
    // const updateReview = (name) => {
    //     console.log(review);
    //     axios
    //         .put("http://localhost:3001/api/update", {
    //             IDSociete: name,
    //             NomSociete: review,
    //         })
    //         .then((res) => { })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios
            .post("http://localhost:3001/api/insert", {
                NomSociete: NomSociete,
                Adresse: Adresse,
                CodeCNSS: CodeCNSS,
                MatriculeFiscal: MatriculeFiscal,
                CodeTVA: CodeTVA,
                CodeCategorie: CodeCategorie,
                NombreEtsSecondaire: NombreEtsSecondaire,
                Tel: Tel,
                Fax: Fax,
                Responsable: Responsable,
                Mail: Mail,
                TauxCNSSPatronal: TauxCNSSPatronal,
                TauxCNSSOuvriere: TauxCNSSOuvriere,
                TauxAccidentTravail: TauxAccidentTravail,
                TauxTFP: TauxTFP,
                setTauxFOPROLOS: setTauxFOPROLOS,
                AssuranceGroupe: AssuranceGroupe,
                TauxAssGroupePatronal: TauxAssGroupePatronal,
                TauxAssGroupeOuvriere: TauxAssGroupeOuvriere,
                Banque: Banque,
                RIB: RIB,
            })
            .then(() => {
                alert("success insert");
            })
            .catch((e) => console.log(e));
    };
    return (
        <div className="societe">
            <form onSubmit={handleSubmit} className="societe-form">
                <label htmlFor="NomSociete">Nom Societe</label>
                <input
                    type="text"
                    id="NomSociete"
                    name="NomSociete"
                    onChange={(e) => setNomSociete(e.target.value)}
                    value={NomSociete}
                />
                <label htmlFor="Adresse">Adresse</label>
                <input
                    type="text"
                    id="Adresse"
                    name="Adresse"
                    onChange={(e) => setAdresse(e.target.value)}
                    value={Adresse}
                />
                <label htmlFor="CodeCNSS">Code CNSS</label>
                <input
                    type="text"
                    id="CodeCNSS"
                    name="CodeCNSS"
                    onChange={(e) => setCodeCNSS(e.target.value)}
                    value={CodeCNSS}
                />
                <label htmlFor="MatriculeFiscal">Matricule Fiscal</label>
                <input
                    type="text"
                    id="MatriculeFiscal"
                    name="MatriculeFiscal"
                    onChange={(e) => setMatriculeFiscal(e.target.value)}
                    value={MatriculeFiscal}
                />
                <label htmlFor="CodeTVA">Code TVA</label>
                <input
                    type="text"
                    id="CodeTVA"
                    name="CodeTVA"
                    onChange={(e) => setCodeTVA(e.target.value)}
                    value={CodeTVA}
                />
                <label htmlFor="CodeCategorie">Code Categorie</label>
                <input
                    type="text"
                    id="CodeCategorie"
                    name="CodeCategorie"
                    onChange={(e) => setCodeCategorie(e.target.value)}
                    value={CodeCategorie}
                />
                <label htmlFor="NombreEtsSecondaire">Nombre Ets Secondaire</label>
                <input
                    type="number"
                    id="NombreEtsSecondaire"
                    name="NombreEtsSecondaire"
                    onChange={(e) => setNombreEtsSecondaire(e.target.value)}
                    value={NombreEtsSecondaire}
                />
                <label htmlFor="Tel">Telephone</label>
                <input
                    type="text"
                    id="Tel"
                    name="Tel"
                    onChange={(e) => setTel(e.target.value)}
                    value={Tel}
                />
                <label htmlFor="Fax"> Fax</label>
                <input
                    type="text"
                    id="Fax"
                    name="Fax"
                    onChange={(e) => setFax(e.target.value)}
                    value={Fax}
                />
                <label htmlFor="Responsable">Responsable</label>
                <input
                    type="text"
                    id="Responsable"
                    name="Responsable"
                    onChange={(e) => setResponsable(e.target.value)}
                    value={Responsable}
                />
                <label htmlFor="Mail">Mail</label>
                <input
                    type="text"
                    id="Mail"
                    name="Mail"
                    onChange={(e) => setMail(e.target.value)}
                    value={Mail}
                />

                <label htmlFor="TauxCNSSPatronal">Taux CNSS Patronal </label>
                <input
                    type="number"
                    id="TauxCNSSPatronal"
                    name="TauxCNSSPatronal"
                    onChange={(e) => setTauxCNSSPatronal(e.target.value)}
                    value={TauxCNSSPatronal}
                />
                <label htmlFor="TauxCNSSOuvriere">Taux CNSS Ouvriere</label>
                <input
                    type="number"
                    id="TauxCNSSOuvriere"
                    name="TauxCNSSOuvriere"
                    onChange={(e) => setTauxCNSSOuvriere(e.target.value)}
                    value={TauxCNSSOuvriere}
                />
                <label htmlFor="TauxAccidentTravail">Taux CNSS Ouvriere</label>
                <input
                    type="number"
                    id="TauxAccidentTravail"
                    name="TauxAccidentTravail"
                    onChange={(e) => setTauxAccidentTravail(e.target.value)}
                    value={TauxAccidentTravail}
                />
                <label htmlFor="TauxTFP">Taux TFP</label>
                <input
                    type="number"
                    id="TauxTFP"
                    name="TauxTFP"
                    onChange={(e) => setTauxTFP(e.target.value)}
                    value={TauxTFP}
                />
                <label htmlFor="TauxFORPROLOS">Taux FOPROLOS</label>
                <input
                    type="number"
                    id="TauxFOPROLOS"
                    name="TauxFOPROLOS"
                    onChange={(e) => setTauxFOPROLOS(e.target.value)}
                    value={TauxFOPROLOS}
                />
                <label htmlFor="AssuranceGroupe">Assurance Groupe</label>
                <input
                    type="checkbox "
                    id="AssuranceGroupe"
                    name="AssuranceGroupe"
                    onChange={(e) => setAssuranceGroupe(e.target.value)}
                    value={AssuranceGroupe}
                />
                <label htmlFor="TauxAssGroupePatronal">Taux Assurance Groupe Patronal</label>
                <input
                    type="number"
                    id="TauxAssGroupePatronal"
                    name="TauxAssGroupePatronal"
                    onChange={(e) => setTauxAssGroupePatronal(e.target.value)}
                    value={TauxAssGroupePatronal}
                />
                <label htmlFor="TauxAssGroupeOuvriere">Taux Asuurance Groupe Ouvriere</label>
                <input
                    type="number"
                    id="TauxAssGroupeOuvriere"
                    name="TauxAssGroupeOuvriere"
                    onChange={(e) => setTauxAssGroupeOuvriere(e.target.value)}
                    value={TauxAssGroupeOuvriere}
                />
                <label htmlFor="Banque">Banque</label>
                <input
                    type="text"
                    id="Banque"
                    name="Banque"
                    onChange={(e) => setBanque(e.target.value)}
                    value={Banque}
                />
                <label htmlFor="RIB">RIB</label>
                <input
                    type="text"
                    id="RIB"
                    name="RIB"
                    onChange={(e) => setRIB(e.target.value)}
                    value={RIB}
                />
                <button>Submit</button>
                {/* <button onClick={deleteAll}>DELETE ALL</button> */}
            </form>
            {/* <ul>
                {NomSocieteList.map((movie) => (
                    <li>
                        {movie.IDSociete} {movie.NomSociete}
                        <button
                            onClick={() => {
                                deleteReview(movie.IDSociete);
                            }}
                        >
                            {" "}
                            Delete
                        </button>
                        <input
                            type="text"
                            // value={updatedReview}
                            onChange={(evt) => {
                                setReview(evt.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                updateReview(movie.IDSociete);
                            }}
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
