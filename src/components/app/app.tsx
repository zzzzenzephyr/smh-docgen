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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  const [namaMahasiswa, setNamaMahasiswa] = useState("");
  const [nomerInduk, setNomerInduk] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [judulKegiatan, setJudulKegiatan] = useState("");
  const [sasaranKegiatan, setSasaranKegiatan] = useState("");
  const [peranAnggota, setPeranAnggota] = useState("");
  const [anggaranBiaya, setAnggaranBiaya] = useState("");
  const [deskripsiKegiatan, setDeskripsiKegiatan] = useState("");

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
    <Card className="overflow-hidden relative z-10 w-full max-w-md p-8 rounded-lg bg-card shadow-lg my-8">
      <CardHeader>
        <CardTitle className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center">
          <AuroraText>Log Book</AuroraText>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Nama Mahasiswa</label>
            <Select value={namaMahasiswa} onValueChange={setNamaMahasiswa} required>
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
            <Select value={nomerInduk} onValueChange={setNomerInduk} required>
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
          <div>
            <label className="block mb-1 font-medium">Judul Kegiatan</label>
            <Input
              type="text"
              placeholder="Masukkan Judul Kegiatan"
              className="w-full"
              value={judulKegiatan}
              onChange={(e) => setJudulKegiatan(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Sasaran Kegiatan</label>
            <Input
              type="text"
              placeholder="Masukkan Sasaran Kegiatan"
              className="w-full"
              value={sasaranKegiatan}
              onChange={(e) => setSasaranKegiatan(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Peran Anggota</label>
            <Input
              type="text"
              placeholder="Masukkan Peran Anggota"
              className="w-full"
              value={peranAnggota}
              onChange={(e) => setPeranAnggota(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Anggaran Biaya Kegiatan</label>
            <Input
              type="text"
              placeholder="Masukkan Anggaran Biaya Kegiatan"
              className="w-full"
              value={anggaranBiaya}
              onChange={(e) => {
                // Only allow numbers 0-9
                const filtered = e.target.value.replace(/[^0-9]/g, "");
                setAnggaranBiaya(filtered);
              }}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Deskripsi Kegiatan</label>
            <Textarea
              placeholder="Masukkan Deskripsi Kegiatan (maksimal 800 karakter)"
              className="w-full"
              value={deskripsiKegiatan}
              maxLength={800}
              onChange={(e) => setDeskripsiKegiatan(e.target.value)}
            />
            <div className="text-xs text-right text-muted-foreground">{deskripsiKegiatan.length}/800</div>
          </div>
          <RainbowButton type="submit" className="mt-7">Generate Log Book</RainbowButton>
        </form>
        {showDownload && (
          <div className="mt-4">
            <PDFDownloadLink
              document={<CertificatePDF name={namaMahasiswa} />}
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
