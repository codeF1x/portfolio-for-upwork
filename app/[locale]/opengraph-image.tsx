import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";

export const alt = "Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { locale: string } }) {
  // In Next.js 15, params might be a Promise, but for opengraph-image it's often passed directly or as a promise.
  // To be safe and consistent with layout.tsx, let's treat it as potentially async or just access it.
  // However, the type definition for opengraph-image usually has params as an object. 
  // Let's try accessing it directly first, if it fails we can adjust.
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "Hero" });

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f16", // surface-dark
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background Gradients */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(15, 15, 22, 0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(15, 15, 22, 0) 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "40px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#a855f7", // purple-500
              marginBottom: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {t("titleSuffix")}
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              marginBottom: "30px",
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>{t("titlePrefix")}</span>
            <span style={{ color: "#a855f7" }}>Portfolio</span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8", // slate-400
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            {t("description")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
