// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { I18nContext, createI18nContext } from "@solid-primitives/i18n";

export default function Root() {
  const dict = {
    fr: {
      hello: "bonjour {{ name }}, comment vas-tu ?"
    },
    en: {
      hello: "hello {{ name }}, how are you?"
    }
  };
  const value = createI18nContext(dict, "fr");

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <I18nContext.Provider value={value}>
              <A href="/">Index</A>
              <A href="/about">About</A>
              <Routes>
                <FileRoutes />
              </Routes>
            </I18nContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
