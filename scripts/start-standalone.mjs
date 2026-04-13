import { access, cp, mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const standaloneRoot = join(root, ".next", "build", "standalone");
const standaloneServer = join(standaloneRoot, "server.js");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function syncDir(source, destination) {
  if (!(await exists(source))) {
    return;
  }

  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, {
    recursive: true,
    force: true,
  });
}

async function main() {
  if (!(await exists(standaloneServer))) {
    throw new Error(
      "Missing standalone server build. Run `npm run build` before `npm run start`."
    );
  }

  await syncDir(join(root, "public"), join(standaloneRoot, "public"));
  await syncDir(
    join(root, ".next", "build", "static"),
    join(standaloneRoot, ".next", "build", "static")
  );

  const child = spawn(process.execPath, ["server.js"], {
    cwd: standaloneRoot,
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
