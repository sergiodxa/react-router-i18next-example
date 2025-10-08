import { useTranslation } from "react-i18next";
import { data, href, Link } from "react-router";

export async function loader() {
  return data(null, { status: 404 });
}

export default function Component() {
  let { t } = useTranslation("notFound");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <Link to={href("/")}>{t("backToHome")}</Link>
    </div>
  );
}
