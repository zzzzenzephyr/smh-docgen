import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-full max-w-md">
        <Card className="relative z-10 w-full max-w-md p-8 rounded-lg bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
              Ship <AuroraText>beautiful</AuroraText>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Button type="submit" className="w-full">
                Generate Certificate
              </Button>
            </form>
          </CardContent>
          <BorderBeam
            size={150}
            delay={3}
            duration={6}
            className="rounded-lg"
          />
          <BorderBeam
            size={150}
            delay={6}
            duration={6}
            className="rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
