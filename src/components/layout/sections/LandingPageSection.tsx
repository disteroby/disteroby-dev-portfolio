import { forwardRef, LegacyRef, RefObject, useEffect, useRef } from "react";
import { SectionTag } from "../../../hooks/useSectionRef.ts";
import { useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type SectionProps = {
    tag: SectionTag;
    children?: JSX.Element;
    className?: string;
    onView: (tag: SectionTag, isInView: boolean) => void;
};

const LandingPageSection = forwardRef(
    (
        { tag, children, className, onView }: SectionProps,
        ref: LegacyRef<HTMLElement>,
    ) => {
        const isInView = useInView(ref as RefObject<Element>, {
            margin: "-20px",
        });

        const callbackOnInView = useRef(onView);

        useEffect(() => {
            callbackOnInView.current(tag, isInView);
        }, [tag, isInView]);

        return (
            <section
                ref={ref}
                className={twMerge(
                    "mx-auto w-full max-w-[92rem] px-4 pt-12 lg:pt-32",
                    className,
                )}>
                {children}
            </section>
        );
    },
);

export default LandingPageSection;
