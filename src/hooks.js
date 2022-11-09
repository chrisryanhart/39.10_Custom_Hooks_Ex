import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip() {

    const [state, setState] = useState(true);

    const toggle = () => {
        setState(oldState => !oldState);
    };

    return [state,toggle];
}

function useAxios(url){
    const [item, setItem] = useState([]);
    const addItem = async (name) => {
        const urlHandler = name ? `${name}/` : '';
        const modifiedUrl = url + urlHandler;
        const response = await axios.get(modifiedUrl);
        setItem(items => [...items, { ...response.data, id: uuid() }]);
    };

    return [item,addItem];

}



export { useFlip, useAxios };

