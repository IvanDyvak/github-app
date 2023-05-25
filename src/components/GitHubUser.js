import React, { useState, useEffect } from "react";
import './GitHubUser.css';
import Fetch from "./Fetch";
import LoadingSpinner from "./LoadingSpinner";
import { UserRepositories } from "./UserRepositories";

export default function GitHubUser({ login }) {
    if (login ==='') return;
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            loadingFallback={<LoadingSpinner />}
            renderError={error => {
                return <p style={{ textAlign: 'center' }}>Something went wrong... {error.message}</p>;
            }}
            renderSuccess={UserDetails}
        />
    );
}
function UserDetails({ data }) {
    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
                <UserRepositories
                    login={data.login}
                    onSelect={(repoName) => console.log(`${repoName} selected`)}
                />
            </div>
        </div>
    );
}