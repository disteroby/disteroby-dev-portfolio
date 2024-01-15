import "./GlowingButton.css";

type GlowingButtonProps = {
    text: string;
    onClick: () => void;
};

function GlowingButton({ text, onClick }: GlowingButtonProps) {
    return (
        <button
            className="glowing-button rounded-full px-8 pb-4 pt-3"
            onClick={onClick}>
            {text}
        </button>
    );
}

export default GlowingButton;
