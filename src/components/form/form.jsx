import Button from "../button/button";
import { content, options } from "./constants";
import { useCallback } from "react";
import styles from "./form.module.css";
import Icon from "../icon/icon";
import { useState } from "react";
import InputSelector from "../input/inputSelector";
import InputPhone from "../input/inputPhone";
import Textarea from "../input/textArea";
import InputFile from "../input/inputFile";

const inputsRequired = ["phone", "selector"];

export default function Form({ title, subtitle }) {
    const [inputsState, setInputsState] = useState({
        phone: {
            isError: false,
        },
        selector: {
            isError: false,
        },
    });

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        inputsRequired.forEach((inputName) => {
            if (!formData.get(inputName)) {
                setInputsState((state) => {
                    return {
                        ...state,
                        [inputName]: {
                            isError: true,
                        },
                    };
                });
            } else {
                setInputsState((state) => {
                    return {
                        ...state,
                        [inputName]: {
                            isError: false,
                        },
                    };
                });
            }
        });
    }, []);

    return (
        <section className={styles.section}>
            <hgroup className={styles.hgroup}>
                <h2 className={styles.title}>{title}</h2>
                <p>{subtitle}</p>
            </hgroup>
            <form className={styles.form} onSubmit={handleSubmit}>
                <InputSelector
                    options={options}
                    defaultValue={content.selector}
                    isError={inputsState.selector.isError}
                />

                <InputPhone
                    label={content.phone}
                    isError={inputsState.phone.isError}
                />

                <Textarea label={content.more} />

                <InputFile label={content.file} />

                <Button type="submit" className={styles.btn}>
                    <Icon width="24" height="24" id="eye" />
                    {content.btn.toUpperCase()}
                </Button>
            </form>
        </section>
    );
}
