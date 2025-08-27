'use client';

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return (
    <div>
      <p>
        <p>Could not fetch note details. {error.message}</p>
      </p>
    </div>
  );
}

export default Error;
