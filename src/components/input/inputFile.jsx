import { useState, useCallback, useEffect } from "react";
import styles from "./inputFile.module.css";
import Icon from "../icon/icon";

export default function InputFile({ className, label }) {
    const [inputsState, setInputsState] = useState({
        files: [],
    });

    const handleFileChange = useCallback(
        (event) => {
            if (event.target.files) {
                const fileData = Array.from(event.target.files).map(
                    (file, index) => ({
                        name: file.name.slice(-13),
                        id: file.name + index,
                    })
                );

                setInputsState({
                    ...inputsState,
                    files: [...inputsState.files, ...fileData],
                });
            }
        },
        [inputsState]
    );

    const handleDeleteFile = useCallback(
        (id) => {
            const filesData = inputsState.files.filter(
                (file) => file.id !== id
            );

            setInputsState({
                ...inputsState,
                files: [...filesData],
            });
        },
        [inputsState]
    );

    return (
        <div className={[className, "inputContainer"].join(" ")}>
            <input
                className={styles.inputFile}
                id="file"
                type="file"
                onChange={handleFileChange}
                multiple
            />
            <div className={styles.contentFile}>
                <label className={styles.labelFile} htmlFor="file">
                    <div className={styles.iconFile}>
                        <Icon width="24" height="24" id="clip" />
                    </div>
                    {!inputsState.files.length && label}
                </label>
                <div className={styles.files}>
                    {inputsState.files &&
                        inputsState.files.map((file) => (
                            <div key={file.id} className={styles.fileItem}>
                                <span>{file.name}</span>
                                <button
                                    className={styles.btnFile}
                                    type="button"
                                    onClick={() => {
                                        handleDeleteFile(file.id);
                                    }}
                                >
                                    <Icon width="24" height="24" id="delete" />
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
