import { useState, useCallback, useEffect } from "react";

export default function InputPhone({ className, label, isError = false }) {
    const [inputsState, setInputsState] = useState({
        class: "",
    });

    useEffect(() => {
        setInputsState({
            ...inputsState,
            class: isError ? "error" : "",
        });
    }, [isError]);

    const handlePhoneFocus = useCallback(() => {
        setInputsState({
            ...inputsState,
            class: "",
        });
    }, [inputsState]);

    const handlePhoneBlur = useCallback(
        (event) => {
            if (!event.target.value) {
                setInputsState({
                    ...inputsState,
                    class: "error",
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
            <input
                className="input"
                id="phone"
                name="phone"
                type="tel"
                placeholder=" "
                onFocus={handlePhoneFocus}
                onBlur={handlePhoneBlur}
            />
            <label className="label" htmlFor="phone">
                {label}
            </label>
        </div>
    );
}
