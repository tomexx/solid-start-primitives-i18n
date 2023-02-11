import { Title } from "solid-start";
import { seoTitle } from "~/util/SeoTitle";
import Counter from "~/components/Counter";
import { I18nContext, createI18nContext, useI18n } from "@solid-primitives/i18n";

export default function Home() {
  const [t, { add, locale, dict }] = useI18n();
  return (
    <main>
      <Title>
        {seoTitle()}
      </Title>
      <div>
        <button onClick={() => locale("fr")}>fr</button>
        <button onClick={() => locale("en")}>en</button>
      </div>
      <h1>{t("hello", { name: "John" }, "Hello {{ name }}!")}!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
