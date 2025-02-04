import styles from "./button.module.css";

export default function Button({ children, type = "button", className }) {
    return (
        <button className={[styles.btn, className].join(" ")} type={type}>
            {children}
        </button>
    );
}
