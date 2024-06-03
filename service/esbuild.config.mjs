import esbuild from "esbuild";

const context = await esbuild.context({
    platform: "node",
    entryPoints: ["./index.ts"],
    bundle: true,
    outdir: "./dist",
    // outfile: "service.js",
    sourcemap: true,
    packages: "external",
});

await context.watch();
