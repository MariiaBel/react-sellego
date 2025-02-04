import { useState, useCallback } from "react";
import Icon from "../icon/icon";
import { details } from "./constants";
import styles from "./details.module.css";

export default function Details() {
    const [openedDetailId, setOpenDetailId] = useState("");

    const handleDetailOpen = useCallback((event, detailId) => {
        event.preventDefault();

        setOpenDetailId(detailId);
    }, []);

    return (
        <div className={styles.detailsContainer}>
            <ol className={styles.sidebar}>
                {details.map((detail, index) => (
                    <li
                        className={[
                            styles.sidebarItem,
                            openedDetailId === detail.id ? styles.active : "",
                        ].join(" ")}
                        key={detail.id}
                        onClick={(e) => {
                            handleDetailOpen(e, detail.id);
                        }}
                    >
                        {index + 1}
                    </li>
                ))}
            </ol>
            <ol className={styles.details}>
                {details.map((detail) => (
                    <li key={detail.id}>
                        <details
                            className={styles.detail}
                            open={openedDetailId === detail.id}
                            onClick={(e) => {
                                handleDetailOpen(e, detail.id);
                            }}
                        >
                            <summary className={styles.summary}>
                                {detail.title}
                                <Icon width="24" height="24" id="arrow-down" />
                            </summary>
                            <p className={styles.desc}>{detail.desc}</p>
                        </details>
                    </li>
                ))}
            </ol>
        </div>
    );
}
