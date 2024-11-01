export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent" />
    </div>
  );
}