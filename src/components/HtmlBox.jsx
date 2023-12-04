import React from "react";
import { useSelector } from "react-redux";

const HtmlBox = ({ documentNumber }) => {
    const documentContent = useSelector((state) => documentNumber === 1 ? state.document1 : state.document2);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: documentContent }} />
        </div>
    )
}

export default HtmlBox;