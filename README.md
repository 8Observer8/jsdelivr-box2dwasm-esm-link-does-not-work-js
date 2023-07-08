The jsDelivr ESM link doesn't work on Plunker and locally on my laptop: [issue](https://github.com/jsdelivr/jsdelivr/issues/18510)

It works on PlayCode: https://playcode.io/1527756

But it doesn't work on Plunker: https://plnkr.co/edit/Gq6zy77bb6Rxv4kP

Install globally:

> npm i -g http-server rollup uglify-js

Run http-server. Add `-c-1` as an option to disable caching:

> http-server -c-1

Debug mode:

> npm run dev

Release build. Stop debugging (Ctrl+C in CMD). Type:

> npm run release
