import { diffLines } from 'diff';

const initialState = {
    comparedResult: '',
}

export const importDocument1 = (content) => ({
    type: 'IMPORT_DOCUMENT_1',
    payload: content,
});

export const importDocument2 = (content) => ({
    type: 'IMPORT_DOCUMENT_2',
    payload: content,
});

export const compareDocument = (doc1, doc2) => ({
    type: 'COMPARE_DOCUMENTS',
    payload: {
        doc1,
        doc2,
    }
})

 export const document1Reducer = (state = '', action) => {
    if (action.type === 'IMPORT_DOCUMENT_1') {
      return action.payload;
    }
    return state;
  };
  
  export  const document2Reducer = (state = '', action) => {
    if (action.type === 'IMPORT_DOCUMENT_2') {
      return action.payload;
    }
    return state;
  };

 export const compareDocumentReducer = (state = initialState, action) => {
    if (action.type === 'COMPARE_DOCUMENTS'){
        const { doc1, doc2 } = action.payload;
        const diff = diffLines(doc1, doc2);
        let comparedResult = '';
        diff.forEach(part => {
            const color = part.added ? 'green' : part.removed ? 'red' : '';
            comparedResult += `<span style="background-color: ${color}">${part.value}</span>`;
        });
        return {
            ...state,
            comparedResult,
        }
    }

    return state;
  }