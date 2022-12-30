/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * What size to use
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * What capitalize to use
     */
    allCaps?: boolean;
    /**
     * What color to use
     */
    color?: "primary" | "secondary" | "terciary";
    /**
     * What background color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
