'use client'
import React from "react";

export default function error({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) {
    return (
        <div>Error <button onClick={reset}>Try Again</button> </div>
    )
}