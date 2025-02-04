import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./inputSelector.module.css";

export default function InputSelector({
    className,
    options,
    defaultValue,
    isError = false,
}) {
    const selectorInputRef = useRef(null);
    const [inputsState, setInputsState] = useState({
        class: "",
        isOpen: false,
        text: defaultValue,
    });

    useEffect(() => {
        setInputsState({
            ...inputsState,
            class: isError ? "error" : "",
        });
    }, [isError]);

    const handleChangeSelect = useCallback(
        (event) => {
            const chosenOption = options.filter(
                (option) => option.value === event.target.value
            );

            if (chosenOption.length) {
                setInputsState({
                    ...inputsState,
                    text: chosenOption[0].text,
                    isOpen: false,
                    class: "",
                });

                selectorInputRef.current.checked = false;
            }
        },
        [inputsState, selectorInputRef]
    );

    return (
        <div
            className={[className, inputsState.class, "inputContainer"].join(
                " "
            )}
        >
            {inputsState.text !== defaultValue && (
                <label className={"label top"} htmlFor="select">
                    {inputsState.text}
                </label>
            )}
            <label
                className={["input", styles.inputSelectText].join(" ")}
                htmlFor="select"
            >
                {inputsState.text}
            </label>
            <input
                className={styles.inputSelect}
                id="select"
                type="checkbox"
                placeholder=" "
                hidden
                ref={selectorInputRef}
            />

            <ul className={styles.options}>
                {options.map((option) => (
                    <li key={option.value}>
                        <input
                            className={styles.optionInput}
                            id={option.value}
                            type="radio"
                            value={option.value}
                            name="selector"
                            hidden
                            onChange={handleChangeSelect}
                        />
                        <label className={styles.option} htmlFor={option.value}>
                            {option.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
