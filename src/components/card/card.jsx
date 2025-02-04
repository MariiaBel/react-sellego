import Button from "../button/button";
import Icon from "../icon/icon";
import styles from "./card.module.css";

export default function Card({ imgId, imgAlt, title, desc, btnText }) {
    return (
        <div className={styles.cardContainer}>
            <section className={styles.card}>
                <Icon
                    className={styles.img}
                    width="176"
                    height="133"
                    alt={imgAlt}
                    id={imgId}
                />
                <h3 className={styles.title}>{title}</h3>
                <p>{desc}</p>
                <Button>
                    <Icon
                        className={styles.icon}
                        width="24"
                        height="24"
                        id="eye"
                    />
                    {btnText.toUpperCase()}
                </Button>
            </section>
        </div>
    );
}
