import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

const page = (title: string, body: string): Response => new Response(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="での" />
    <meta property="og:site_name" content="での" />
    <meta name="twitter:title" content="での" />
    <meta name="twitter:description" content="での" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@0x307E" />
    <meta name="twitter:url" content="https://makotia.deno.dev/" />
    <meta property="og:url" content="https://makotia.deno.dev/" />
    <meta property="og:description" content="での" />
    <meta property="og:image" content="https://dummyimage.com/1920x1080/333/fff.png&text=%E3%81%A7%E3%81%AE" />
    <meta name="twitter:image" content="https://dummyimage.com/1920x1080/333/fff.png&text=%E3%81%A7%E3%81%AE" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        height: 100vh;
      }
      main {
        margin: auto 0;
        font-size: 10em;
      }
    </style>
  </head>
  <body>
    <main>${body}</main>
  </body>
</html>
`, {"headers": {"content-type": "text/html; charset=utf-8"}});

serve({
  "/": () => page("での", "での"),
  404: () => page("君は何をしたいんだ", "ここにはないよ"),
});
