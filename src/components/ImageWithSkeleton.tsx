import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
  className?: string;
  skeletonClassName?: string;
};

export default function ImageWithSkeleton({
  src,
  alt,
  fallback,
  className = "w-full h-full",
  skeletonClassName = "w-full h-full",
  ...imgProps
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0">
          <Skeleton className={skeletonClassName} />
        </div>
      )}

      {error && fallback ? (
        <img
          src={fallback}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
        />
      ) : error ? (
        <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
          Image failed to load
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          {...imgProps}
        />
      )}
    </div>
  );
}
