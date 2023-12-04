import React from "react";
import { useDispatch } from "react-redux";
import { importDocument1, importDocument2 } from "../store/actions";

const ImportButton = ({ documentNumber }) => {
    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        if (documentNumber === 1) {
            reader.onload = function (e) {
                dispatch(importDocument1(e.target.result));
            }
        } else {
            reader.onload = function (e) {
                dispatch(importDocument2(e.target.result));
            }
        }
        
        reader.readAsText(file);
    };

    return (
        <div className="px-20">
            <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
                onChange={handleFileChange} />
        </div>
    );
};


export default ImportButton;