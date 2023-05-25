import React, { useState, useEffect } from "react";
import { useFetch } from "../customHooks/";

function Fetch({
                   uri,
                   renderSuccess,
                   loadingFallback,
                   renderError = error => (
                       <pre>{JSON.stringify(error, null, 2)}</pre>
                   )
               }) {
    const { loading, data, error } = useFetch(uri);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });
}
export default Fetch;