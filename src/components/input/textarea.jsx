import { useState } from "react";
import styles from "./textarea.module.css";
import { useCallback } from "react";

export default function Textarea({ className, label }) {
    const [inputsState, setInputsState] = useState({
        rows: 1,
    });

    const handleTextareaFocus = useCallback(() => {
        setInputsState({
            ...inputsState.textarea,
            rows: 3,
        });
    }, [inputsState]);

    const handleTextareaBlur = useCallback(
        (event) => {
            if (!event.target.value) {
                setInputsState({
                    ...inputsState.textarea,
                    rows: 1,
                });
            }
        },
        [inputsState]
    );

    return (
        <div
            className={[className, inputsState.class, "inputContainer"].join(
                " "
            )}
        >
            <textarea
                className={["input", styles.textarea].join(" ")}
                id="textarea"
                placeholder=" "
                name="additionalInformation"
                rows={inputsState.rows}
                onFocus={handleTextareaFocus}
                onBlur={handleTextareaBlur}
            ></textarea>
            <label className="label" htmlFor="textarea">
                {label}
            </label>
        </div>
    );
}
