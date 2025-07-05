import {
  Document,
  Page as PDFPage,
  Image as PDFImage,
  Text as PDFText,
} from "@react-pdf/renderer";

export const CERT_WIDTH = 1241;
export const CERT_HEIGHT = 1755;

export interface CertificatePDFProps {
  name: string;
}

export function CertificatePDF({ name }: CertificatePDFProps) {
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
        <PDFText
          style={{
            position: "absolute",
            top: CERT_HEIGHT / 3 + 100, // adjust as needed for your template
            left: 0,
            right: 0,
            width: CERT_WIDTH,
            textAlign: "center",
            fontSize: 96,
            color: "#222",
            fontWeight: 700,
          }}
        >
          {name}
        </PDFText>
      </PDFPage>
    </Document>
  );
}

export function randomAlphaName(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
