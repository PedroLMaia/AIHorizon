"use client";

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b2a393d6-16cf-4cf5-8612-c82bade3df5f");
    }, []);

    return null;
}