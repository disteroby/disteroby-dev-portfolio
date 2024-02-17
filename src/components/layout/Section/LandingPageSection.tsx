import { forwardRef, LegacyRef } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
    children?: JSX.Element;
    className?: string;
};

const LandingPageSection = forwardRef(
    ({ children, className }: SectionProps, ref: LegacyRef<HTMLElement>) => {
        return (
            <section
                ref={ref}
                className={twMerge(
                    "mx-auto min-h-[100svh] w-full max-w-[92rem]",
                    className,
                )}>
                {children}
            </section>
        );
    },
);

export default LandingPageSection;
