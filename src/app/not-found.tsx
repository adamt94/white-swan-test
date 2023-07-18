import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>

      <p>Sorry could not find the page you&apos;re looking for...</p>
      <p>
        <Link href="/">View Fixtures</Link>
      </p>
    </div>
  );
}
