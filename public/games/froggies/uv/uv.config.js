self.__uv$config = {
    prefix: '/froggies/uv',
    bare:'https://bare.frogiesarcade.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/froggies/uv/uv.handler.js',
    bundle: '/froggies/uv/uv.bundle.js',
    config: '/froggies/uv/uv.config.js',
    sw: '/froggies/uv/uv.sw.js',
};
