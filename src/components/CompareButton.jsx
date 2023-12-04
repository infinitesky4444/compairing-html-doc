import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compareDocument } from '../store/actions';

function CompareButton() {
    const dispatch = useDispatch();
    const doc1 = useSelector((state) => state.document1);
    const doc2 = useSelector((state) => state.document2);;
    const comparedResult = useSelector(state => state.compare.comparedResult);

    const handleCompare = () => {
        dispatch(compareDocument(doc1, doc2));
    };

    return (
        <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCompare}>
                Compare
            </button>
            <div dangerouslySetInnerHTML={{ __html: comparedResult }} />
        </div>
    );
}

export default CompareButton;