import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

const lineStyle = {
    fill: "none",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1,
    transitionDuration: "600ms",
    transitionProperty: "all",
} as CSSProperties;

type NavbarButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: NavbarButtonProps) {
    return (
        <div className='fixed right-0 z-50 m-6 opacity-85' onClick={onClick}>
            <svg
                className={twMerge(
                    "h-12 cursor-pointer transition duration-[600ms]",
                    isOpen && "-rotate-45",
                )}
                viewBox='0 0 32 32'>
                <path
                    style={{
                        ...lineStyle,
                        strokeDasharray: isOpen ? "20 300" : "12 63",
                        strokeDashoffset: isOpen ? "-32.42" : "initial",
                    }}
                    d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                />
                <path style={lineStyle} d='M7 16 27 16' />
            </svg>
        </div>
    );
}
