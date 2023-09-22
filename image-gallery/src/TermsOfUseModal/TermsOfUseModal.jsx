import { useEffect, useState } from "react";
import styles from "./TermsOfUseModal.module.css";

export const TermsOfUseModal = ({ setShown }) => {
    const [termsOfUse, setTermsOfUse] = useState([]);
    
    const fetchData = () => {
        fetch("http://167.71.69.158/static/test.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setTermsOfUse(data.terms_of_use["paragraphs"]);
        });
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (!termsOfUse){
        return null;
    }

    console.log(termsOfUse);

    return (
        <>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                    {termsOfUse.map(term => (
                        <div>
                            <h4>{term["title"]}</h4>
                            <p>{term["content"]}</p>
                        </div>
                    ))}
                    </div>
                    <button className={styles.acceptBtn} onClick={() => setShown(false)}>Accept</button>
                </div>
            </div>
        </>
    )
}