import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Griffin | Fullstack Developer"
        titleTemplate="Griffin | Fullstack Developer"
        defaultTitle="Griffin | Fullstack Developer"
        description="Hey! I'm Griffin, A Fullstack Developer, Student and aspiring DJ!"
        openGraph={{
          url: "https://www.anurag.tech/",
          title: "Griffin | Fullstack Developer",
          description:
            "Hey! I'm Griffin, A Fullstack Developer, Student and aspiring DJ!",
          images: [
            {
              url: "assets/profile.jpg",
              width: 800,
              height: 420,
              alt: "Griffin | Fullstack Developer",
            },
          ],
        }}
        // twitter={{
        //   handle: "@kr_anurag_",
        //   site: "@kr_anurag_",
        //   cardType: "summary_large_image",
        // }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Griffin, Almquist, griffin, griffinalmquist, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        {/* <link rel="icon" type="image/jpg" href="/assets/profile.jpg" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
