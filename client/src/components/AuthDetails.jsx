import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) setAuthUser(user);
            else setAuthUser(null);
        });
        return () => listen();
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log("User signed out"))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Log Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
