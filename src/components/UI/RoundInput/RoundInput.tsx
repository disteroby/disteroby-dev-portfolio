import { forwardRef, HTMLInputTypeAttribute, useId } from "react";
import style from "./RoundInput.module.css";

type RoundInputProps = {
    label: string;
    icon: JSX.Element;
    value?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    autocompleted?: string;
};

const RoundInput = forwardRef<HTMLInputElement, RoundInputProps>(
    (
        {
            value,
            label,
            placeholder,
            type,
            autocompleted,
            icon,
        }: RoundInputProps,
        ref,
    ) => {
        const id = useId();

        return (
            <div className={style.inputGroup}>
                <input
                    ref={ref}
                    id={id}
                    className={style.roundInput}
                    defaultValue={value}
                    autoComplete={autocompleted ?? "off"}
                    type={type ?? "text"}
                    placeholder={placeholder + ""}
                />
                <label htmlFor={id} className={style.inputLabel}>
                    {label}
                </label>
                <span className={style.icon}>{icon}</span>
            </div>
        );
    },
);

export default RoundInput;
