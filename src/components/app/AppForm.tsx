import { Dispatch, SetStateAction } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nameOptions, npmOptions, weekDate } from "@/data/app";
import { Textarea } from "@/components/ui/textarea";

export default function AppForm({
                                  username, setUsername,
                                  userid, setUserid,
                                  date, setDate,
                                  week, setWeek,
                                  headline, setHeadline,
                                  target, setTarget,
                                  role, setRole,
                                  money, setMoney,
                                  description, setDescription,
                                }: {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  userid: string;
  setUserid: Dispatch<SetStateAction<string>>;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  week: string;
  setWeek: Dispatch<SetStateAction<string>>;
  headline: string;
  setHeadline: Dispatch<SetStateAction<string>>;
  target: string;
  setTarget: Dispatch<SetStateAction<string>>;
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  money: string;
  setMoney: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}) {
  const handleNameSelectChange = (value: string) => {
    setUsername(value);
    const idx = nameOptions.indexOf(value);
    setUserid(idx !== -1 ? npmOptions[idx] || "" : "");
  };

  const handleDateSelectChange = (value: string) => {
    setDate(value);
    const idx = weekDate.indexOf(value);
    setWeek(idx !== -1 ? String(idx + 1) : "");
  };

  return (
    <>
      <UsernameSelect value={username} onValueChange={handleNameSelectChange} />
      <UseridSelect value={userid} onValueChange={(value) => setUserid(value)} />
      <Separator />
      <DateSelect value={date} onValueChange={handleDateSelectChange} />
      <WeekSelect value={week} onValueChange={(value) => setWeek(value)} />
      <Separator />
      <HeadlineInput value={headline} setHeadline={setHeadline} />
      <TargetInput value={target} setTarget={setTarget} />
      <RoleInput value={role} setRole={setRole} />
      <MoneyInput value={money} setMoney={setMoney} />
      <DescriptionInput value={description} setValue={setDescription} />
    </>
  );
}

function UsernameSelect({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Nama Mahasiswa</label>
      <Select name="username" value={value} onValueChange={onValueChange} required>
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
  );
}

function UseridSelect({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) {
  return (
    <div>
      <label className="block mb-1 font-medium">
        Nomor Pokok Mahasiswa
      </label>
      <Select name="userid" value={value} onValueChange={onValueChange} disabled>
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
  );
}

function DateSelect({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Tanggal Pelaksanaan</label>
      <Select
        name="date"
        value={value}
        onValueChange={onValueChange}
        required
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih Tanggal Pelaksanaan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {weekDate.map((item) => (
              <SelectItem key={item} value={item}>{item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function WeekSelect({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Minggu Pelaksanaan</label>
      <Select name="week" value={value} onValueChange={onValueChange} disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Minggu Pelaksanaan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[...Array(9)].map((_, idx) => (
              <SelectItem key={idx + 1} value={String(idx + 1)}>{idx + 1}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function HeadlineInput({ value, setHeadline }: { value: string; setHeadline: Dispatch<SetStateAction<string>> }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Judul Kegiatan</label>
      <Input
        type="text"
        name="headline"
        placeholder="Masukkan Judul Kegiatan"
        className="w-full"
        value={value}
        onChange={(e) => setHeadline(e.target.value)}
        required
      />
    </div>
  );
}

function TargetInput({ value, setTarget }: { value: string; setTarget: Dispatch<SetStateAction<string>> }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Sasaran Kegiatan</label>
      <Input
        type="text"
        name="target"
        placeholder="Masukkan Sasaran Kegiatan"
        className="w-full"
        value={value}
        onChange={(e) => setTarget(e.target.value)}
        required
      />
    </div>
  );
}

function RoleInput({ value, setRole }: { value: string; setRole: Dispatch<SetStateAction<string>> }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Peran Anggota</label>
      <Input
        type="text"
        name="role"
        placeholder="Masukkan Peran Anggota"
        className="w-full"
        value={value}
        onChange={(e) => setRole(e.target.value)}
        required
      />
    </div>
  );
}

function MoneyInput({ value, setMoney }: { value: string; setMoney: Dispatch<SetStateAction<string>> }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Anggaran Biaya Kegiatan</label>
      <Input
        type="text"
        name="money"
        placeholder="Masukkan Anggaran Biaya Kegiatan"
        className="w-full"
        value={value}
        onChange={(e) => {
          const filtered = e.target.value.replace(/[^0-9]/g, "");
          setMoney(filtered);
        }}
        required
      />
    </div>
  );
}

function DescriptionInput({ value, setValue }: { value: string; setValue: Dispatch<SetStateAction<string>> }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Deskripsi Kegiatan</label>
      <Textarea
        name="description"
        placeholder="Masukkan Deskripsi Kegiatan (maksimal 800 karakter)"
        className="w-full"
        value={value}
        maxLength={800}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <div className="text-xs text-right text-muted-foreground">{value.length}/800</div>
    </div>
  );
}