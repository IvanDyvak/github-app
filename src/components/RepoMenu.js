import React, { useEffect } from "react";
import { useIterator } from "../customHooks/";

export default function RepoMenu({ repositories, onSelect = f => f }) {
    const [{ name, html_url, description }, previous, next] = useIterator(repositories);
    console.log(repositories);

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <>
            <div style={{ display: "flex", width:'200',alignItems:"center",justifyContent: "space-around" }}>
                <button onClick={previous}>&lt;</button>
                <p><a target="_blank" href={html_url}>{name}</a></p>
                <button onClick={next}>&gt;</button>
            </div>
            <p>{description}</p>
        </>
);
}