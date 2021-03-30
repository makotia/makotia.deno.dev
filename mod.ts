import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

const page = (title: string, body: string): Response => new Response(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  "/": () => page("で？", "の"),
  404: () => page("君は何をしたいんだ", "ないよ"),
});
