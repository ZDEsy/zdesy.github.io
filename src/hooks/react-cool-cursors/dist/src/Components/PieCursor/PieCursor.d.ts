import React from "react";
interface PieCursorProps {
    size?: number;
    color?: string;
    opacity?: number;
    border?: string;
    InnerBorderColor?: string;
    TransitionTime?: number;
    hideDefaultCursor?: boolean;
}
declare const PieCursor: React.FC<PieCursorProps>;
export default PieCursor;
