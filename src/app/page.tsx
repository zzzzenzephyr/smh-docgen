import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-full max-w-md p-8 rounded-lg bg-card shadow-lg">
        <BorderBeam size={150} delay={3} duration={6} className="rounded-lg" />
        <BorderBeam size={150} delay={6} duration={6} className="rounded-lg" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            Ship <AuroraText>beautiful</AuroraText>
          </h1>
          <p className="text-muted-foreground text-center">
            A beautiful animated border effect for your cards, modals, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
