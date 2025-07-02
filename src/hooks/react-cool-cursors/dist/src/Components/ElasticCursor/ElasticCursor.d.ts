import React from "react";
import "./ElasticCursor.css";
interface ElasticCursorProps {
    size?: number;
    color?: string;
    border?: string;
    TransitionTime?: number;
    opacity?: number;
    hideDefaultCursor?: boolean;
}
declare const ElasticCursor: React.FC<ElasticCursorProps>;
export default ElasticCursor;
