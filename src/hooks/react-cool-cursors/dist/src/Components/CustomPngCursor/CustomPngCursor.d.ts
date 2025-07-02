import React from "react";
import "./CustomPngCursor.css";
interface CustomCursorProps {
    size?: number;
    opacity?: number;
    TransitionTime?: number;
    icon?: string;
    hideDefaultCursor?: boolean;
}
declare const CustomPngCursor: React.FC<CustomCursorProps>;
export default CustomPngCursor;
