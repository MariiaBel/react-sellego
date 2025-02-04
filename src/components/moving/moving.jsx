import { useCallback, useRef, useState } from "react";

const maxRotationAngle = 50;

export default function Moving({ children }) {
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const [wait, setWait] = useState(false);
    const [currentPointerX, setCurrentPointerX] = useState();

    const startMove = useCallback(() => {
        // targetRef.current.setAttribute("style", "transform: perspective(600px) rotateY(0deg);")
    });
    const endMove = useCallback(() => {
        // targetRef.current.setAttribute("style", "transform: perspective(600px) rotateY(0deg);")
    });

    const cursorMoving = useCallback((event) => {
        const pointerX = event.clientX;
        if (Math.abs(currentPointerX - pointerX) < 20) return;

        const containerCoordinate =
            containerRef.current.getBoundingClientRect();
        const cardHalfWidth = containerCoordinate.width / 2;
        const cardCenterX = cardHalfWidth + containerCoordinate.left;
        const pointerXInContainer = pointerX - cardCenterX;

        const deg = Math.floor(
            (maxRotationAngle * pointerXInContainer) / cardHalfWidth
        );

        targetRef.current.setAttribute(
            "style",
            `transform: perspective(600px) rotateY(${deg}deg);`
        );

        setCurrentPointerX(pointerX);
    }, []);

    const move = useCallback((event) => {
        if (!wait) {
            setWait(true);

            requestAnimationFrame(() => cursorMoving(event));

            setTimeout(() => {
                setWait(false);
            }, 500);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={startMove}
            onMouseLeave={endMove}
            onMouseMove={move}
        >
            <div ref={targetRef}>{children}</div>
        </div>
    );
}
