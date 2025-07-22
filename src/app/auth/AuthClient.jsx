"use client"

import { useState } from "react";
import { SignIn, SignUp } from "@/components/common/AuthComponents";

export default function AuthClient() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            {isLogin ? (
                <SignIn switchToSignUp={() => setIsLogin(false)} />
            ) : (
                <SignUp switchToSignIn={() => setIsLogin(true)} />
            )}
        </>
    );
};