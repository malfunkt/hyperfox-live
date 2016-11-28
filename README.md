# [live.hyperfox.org](https://github.com/xiam/hyperfox-live)
> This is the source code of the [Hyperfox][1]'s [live visualization tool][2].


## Requisites

* Node.js (>=6)
* npm (>=3)

## Initial setup

```
npm install
```

## Development

```bash
# start a webpack server for development
# at http://localhost:3000
npm run start:development
```

## Build
See [electron-packager](https://github.com/electron-userland/electron-packager) for electron package requirements.

```bash
# create the webpack build in the `build` folder
npm run build
# create an electron package for all the platforms
npm run package
# create an electron package for osx
npm run package:osx
# create an electron package for windows
npm run package:win
# create an electron package for linux
npm run package:linux
```


# License (MIT)

> Copyright (c) 2014-2015 José Carlos Nieto, https://menteslibres.net/xiam
>
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: https://hyperfox.org
[2]: http://live.hyperfox.org
