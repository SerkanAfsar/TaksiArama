"use client"; // Error components must be Client Components

import Alert from "@/Components/Common/Alert";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-72px)] w-full items-center justify-center">
      <Alert message={error.message} title="Hata" type="Error" />
    </div>
  );
}
