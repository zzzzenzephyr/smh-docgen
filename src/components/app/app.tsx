"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CertificatePDF, randomAlphaName } from "./generator";
import { useState } from "react";

export default function App() {
  const [selectedName, setSelectedName] = useState("");
  const [selectedNpm, setSelectedNpm] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  const nameOptions = [
    "Jelita Arta Mukhlia",
    "Dea Nurul Khumairoh",
    "Nurul Aulia",
    "Yasmeen Abdullah Saeed",
    "Rayya Ila Robbani",
    "Sofa Machabba Haeta",
    "Dita Alena Sari",
    "Muhammad Ilham Annasrulloh",
    "Rikko Saputra",
    "Bintang Farros Prayogi",
    "Muhammad Ihza Firmansyah",
    "Aru Wangi",
  ];
  const npmOptions = [
    "4122600224",
    "6622600020",
    "3122600026",
    "1622600018",
    "5122600190",
    "6622600044",
    "2222600040",
    "6422600066",
    "4122600054",
    "5122600010",
    "6322600019",
    "4322600076",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDownload(true);
  };

  return (
    <Card className="relative z-10 w-full max-w-md p-8 rounded-lg bg-card shadow-lg">
      <CardHeader>
        <CardTitle className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
          <AuroraText>Log Book</AuroraText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Nama Mahasiswa</label>
            <Select value={selectedName} onValueChange={setSelectedName} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Nama Mahasiswa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {nameOptions.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Nomor Pokok Mahasiswa
            </label>
            <Select value={selectedNpm} onValueChange={setSelectedNpm} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Nomor Pokok Mahasiswa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {npmOptions.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <RainbowButton type="submit" className="mt-7">Generate Log Book</RainbowButton>
        </form>
        {showDownload && (
          <div className="mt-4">
            <PDFDownloadLink
              document={<CertificatePDF name={selectedName} />}
              fileName={randomAlphaName(10) + ".pdf"}
            >
              {({ loading }) =>
                loading ? (
                  "Preparing document..."
                ) : (
                  <Button className="w-full mt-2">Download PDF</Button>
                )
              }
            </PDFDownloadLink>
          </div>
        )}
      </CardContent>
      <BorderBeam size={150} delay={3} duration={6} className="rounded-lg" />
      <BorderBeam size={150} delay={6} duration={6} className="rounded-lg" />
    </Card>
  );
}
