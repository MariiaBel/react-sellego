import svgSprite from "../../assets/sprite.svg";

export default function Icon({ id, width, height, alt = "", className }) {
    return (
        <svg className={className} width={width} height={height} alt={alt}>
            <use href={`${svgSprite}#${id}`} />
        </svg>
    );
}
