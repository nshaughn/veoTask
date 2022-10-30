
import { useEffect, useState } from "react"

export const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton && (
                <button style={{
                    position: "fixed",
                    bottom: "110px",
                    right: "20px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                }}
                onClick={scrollUp}>^</button>
            )}
        </>
    )
}
