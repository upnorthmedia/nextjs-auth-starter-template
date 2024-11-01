export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
          {/* Inner spinning ring */}
          <div className="absolute inset-2 h-12 w-12 animate-spin rounded-full border-4 border-white/40 border-t-transparent animation-delay-150" />
          {/* Center dot */}
          <div className="absolute inset-4 h-8 w-8 animate-pulse rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
} 