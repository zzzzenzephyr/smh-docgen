import React from "react";
import {
  Document,
  Page as PDFPage,
  Image as PDFImage,
  Text as PDFText,
  Font,
} from "@react-pdf/renderer";

// Register custom font
Font.register({
  family: "TimesNewRoman",
  src: "/font/times.ttf",
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
        <PDFInput offset={0}>{username}</PDFInput>
        <PDFInput offset={1}>{userid}</PDFInput>
        <PDFInput offset={5}>{headline}</PDFInput>
        <PDFInput offset={6}>{target}</PDFInput>
        <PDFInput offset={7}>{role}</PDFInput>
        <PDFInput offset={8}>{
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })
            .format(Number(money || 0))
            .replace(/^Rp/, "Rp.") + ",-"
        }</PDFInput>
        <PDFInput offset={10} style={{
          width: CERT_WIDTH / 2 + 40,
          textAlign: "justify"
        }}>{description}</PDFInput>
        <PDFSign>{username}</PDFSign>
      </PDFPage>
    </Document>
  );
}

function PDFInput({
                    children,
                    offset,
                    style,
                  }: {
  children: string;
  offset: number;
  style?: React.ComponentProps<typeof PDFText>["style"];
}) {
  return (
    <PDFText style={{
      position: "absolute",
      top: CERT_HEIGHT / 4 + 53 + (45 * offset),
      left: CERT_WIDTH / 2 - 144,
      right: 0,
      width: CERT_WIDTH,
      textAlign: "left",
      fontSize: 26,
      color: "#000",
      fontFamily: "TimesNewRoman",
      ...style,
    }}>
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
    <PDFText style={{
      position: "absolute",
      top: CERT_HEIGHT - 175,
      left: CERT_WIDTH / 1.75,
      right: 0,
      width: CERT_WIDTH,
      textAlign: "left",
      fontSize: 26,
      color: "#000",
      fontWeight: "bold",
      fontFamily: "TimesNewRoman",
      ...style,
    }}>
      {children}
    </PDFText>
  );
}