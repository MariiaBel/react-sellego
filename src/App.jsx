import ModelRotating from "./components/model-rotating/model-rotating";
import Moving from "./components/moving/moving";
import Card from "./components/card/card";
import Form from "./components/form/form";
import Details from "./components/details/details";
import { information } from "./constants";
import styles from "./App.module.css";

function App() {
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <span className={styles.logo}>
                    {information.header.logo.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </span>
                <h1 className={styles.title}>{information.header.title}</h1>
                <p className={styles.desc}>{information.header.desc}</p>
            </header>
            <div className={styles.components}>
                <div className={styles.componentItem}>
                    <div className={styles.canvasPosition}>
                        <ModelRotating
                            url={"./models/fox.fbx"}
                            scale="0.04"
                        ></ModelRotating>
                    </div>
                    <div className={styles.componentsDesc}>
                        {information.model.desc.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <Moving>
                        <Card
                            title="Интерактивная карточка"
                            desc="Должна вращаться за мышкой"
                            btnText="Кнопка"
                            imgId="infinity"
                            imgAlt="Бесконечность"
                        />
                    </Moving>
                    <div className={styles.componentsDesc}>
                        {information.card.desc}
                    </div>
                </div>

                <div>
                    <Form title="Форма" subtitle="Дополнительный текст ⏳" />
                    <div className={styles.componentsDesc}>
                        {information.form.desc}
                    </div>
                </div>

                <div>
                    <Details />
                    <div className={styles.componentsDesc}>
                        {information.details.desc}
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <p>{information.footer.desc}</p>
            </footer>
        </section>
    );
}

export default App;
