import React from "react";
import {
  Document,
  Page as PDFPage,
  Image as PDFImage,
  Text as PDFText,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "TimesNewRoman",
  src: "/font/times.ttf",
  fontWeight: "normal",
  fontStyle: "normal",
});

Font.register({
  family: "TimesNewRomanBold",
  src: "/font/times-bold.ttf",
  fontWeight: "normal",
  fontStyle: "normal",
});

export const CERT_WIDTH = 1241;
export const CERT_HEIGHT = 1755;

export interface TypeOfLogBook {
  username: string;
  userid: string;
  date: string;
  week: string;
  headline: string;
  target: string;
  role: string;
  money: string;
  description: string;
}

export function LogBook({
  username,
  userid,
  date,
  week,
  headline,
  target,
  role,
  money,
  description,
}: TypeOfLogBook) {
  return (
    <Document>
      <PDFPage
        size={[CERT_WIDTH, CERT_HEIGHT]}
        style={{ position: "relative" }}
      >
        <PDFImage
          src="/image/logbook.jpg"
          style={{ width: CERT_WIDTH, height: CERT_HEIGHT }}
        />
        <PDFHeader>{`MINGGU KE - ${week}`}</PDFHeader>
        <PDFInput row={0}>{username}</PDFInput>
        <PDFInput row={1}>{userid}</PDFInput>
        <PDFInput row={5}>{headline}</PDFInput>
        <PDFInput row={6}>{target}</PDFInput>
        <PDFInput row={7}>{role}</PDFInput>
        <PDFInput row={8}>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
            .format(Number(money || 0))
            .replace(/^Rp/, "Rp.") + ",-"}
        </PDFInput>
        <PDFInput
          row={10}
          style={{
            width: CERT_WIDTH / 2 + 40,
            textAlign: "justify",
          }}
        >
          {description}
        </PDFInput>
        <PDFSign
          style={{
            top: CERT_HEIGHT / 1.25 - 14,
            left: CERT_WIDTH / 2 + 160,
          }}
        >
          {date.split(" - ")[1]}
        </PDFSign>
        <PDFSign
          style={{
            fontFamily: "TimesNewRomanBold",
          }}
        >
          {username}
        </PDFSign>
        <PDFSign
          style={{
            top: CERT_HEIGHT - 140,
            left: CERT_WIDTH / 2 + 130,
          }}
        >
          {userid}
        </PDFSign>
      </PDFPage>
    </Document>
  );
}

function PDFInput({
  children,
  row,
  style,
}: {
  children: string;
  row: number;
  offset?: number;
  style?: React.ComponentProps<typeof PDFText>["style"];
}) {
  return (
    <PDFText
      style={{
        position: "absolute",
        top: CERT_HEIGHT / 4 + (53 + (row > 3 ? row / 2 : row)) + 45 * row,
        left: CERT_WIDTH / 2 - 144,
        right: 0,
        width: CERT_WIDTH,
        textAlign: "left",
        fontSize: 26,
        color: "#000",
        fontFamily: "TimesNewRoman",
        ...style,
      }}
    >
      {children}
    </PDFText>
  );
}

function PDFSign({
  children,
  style,
}: {
  children: string;
  style?: React.ComponentProps<typeof PDFText>["style"];
}) {
  return (
    <PDFText
      style={{
        position: "absolute",
        top: CERT_HEIGHT - 190,
        left: CERT_WIDTH / 2 + 57,
        right: 0,
        width: CERT_WIDTH,
        textAlign: "left",
        fontSize: 26,
        color: "#000",
        fontWeight: "black",
        fontFamily: "TimesNewRoman",
        ...style,
      }}
    >
      {children}
    </PDFText>
  );
}

function PDFHeader({
  children,
  style,
}: {
  children: string;
  style?: React.ComponentProps<typeof PDFText>["style"];
}) {
  return (
    <PDFText
      style={{
        position: "absolute",
        top: CERT_HEIGHT / 4 - 57,
        left: CERT_WIDTH / 2 - 105,
        right: 0,
        width: CERT_WIDTH,
        textAlign: "left",
        fontSize: 29,
        color: "#000",
        fontWeight: "black",
        fontFamily: "TimesNewRomanBold",
        ...style,
      }}
    >
      {children}
    </PDFText>
  );
}
