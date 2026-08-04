export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center space-x-3 border border-accent/30 bg-accent/5 px-4 py-2 rounded-full text-sm text-accent">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
      </span>
      <span>Open to freelance & full-time opportunities (Currently IT Instructor)</span>
    </div>
  );
}
