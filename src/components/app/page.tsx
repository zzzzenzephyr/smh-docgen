"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { LogBook } from "./generator";
import { FormEvent, useState } from "react";
import { Separator } from "@/components/ui/separator";
import AppForm from "@/components/app/AppForm";
import randomString from "unique-string";

export default function Page() {
  const [showDownload, setShowDownload] = useState(false);
  const [username, setUsername] = useState("Sofa Machabba Haeta");
  const [userid, setUserid] = useState("6622600044");
  const [date, setDate] = useState("14 - 20 Juli 2025");
  const [week, setWeek] = useState("1");
  const [headline, setHeadline] = useState("Log Book Mingguan");
  const [target, setTarget] = useState("Warga Desa Sinduaji");
  const [role, setRole] = useState("Koordinator Desa Sinduaji");
  const [money, setMoney] = useState("98124012");
  const [description, setDescription] = useState("Ini adalah deskripsi kegiatan yang dilakukan selama minggu ini. Kegiatan ini meliputi berbagai aktivitas yang bertujuan untuk meningkatkan kesejahteraan warga desa Sinduaji.");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDownload(true);
  };

  return (
    <Card className="overflow-hidden relative z-10 w-full max-w-md p-8 rounded-lg bg-card shadow-lg my-8">
      <CardHeader>
        <CardTitle className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
          <AuroraText>Log Book</AuroraText>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <AppForm
            username={username}
            setUsername={setUsername}
            userid={userid}
            setUserid={setUserid}
            date={date}
            setDate={setDate}
            week={week}
            setWeek={setWeek}
            headline={headline}
            setHeadline={setHeadline}
            target={target}
            setTarget={setTarget}
            role={role}
            setRole={setRole}
            money={money}
            setMoney={setMoney}
            description={description}
            setDescription={setDescription}
          />

          <RainbowButton type="submit" className="mt-7">
            Generate Log Book
          </RainbowButton>
        </form>
        {showDownload && (
          <div className="mt-4">
            <PDFDownloadLink
              document={
                <LogBook
                  username={username}
                  userid={userid}
                  date={date}
                  week={week}
                  headline={headline}
                  target={target}
                  role={role}
                  money={money}
                  description={description}
                />
              }
              fileName={randomString().slice(0, 10) + ".pdf"}
            >
              {({ loading }) =>
                loading ? (
                  <Button disabled className="w-full mt-2">
                    Generating PDF
                  </Button>
                ) : (
                  <Button className="w-full mt-2">Download Log Book</Button>
                )
              }
            </PDFDownloadLink>
          </div>
        )}
      </CardContent>
      <BorderBeam size={200} delay={3} duration={12} className="rounded-lg" />
      <BorderBeam size={200} delay={6} duration={12} className="rounded-lg" />
      <BorderBeam size={200} delay={9} duration={12} className="rounded-lg" />
      <BorderBeam size={200} delay={12} duration={12} className="rounded-lg" />
    </Card>
  );
}
