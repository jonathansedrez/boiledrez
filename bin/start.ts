#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import ora from "ora";
import { execa } from "execa";

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name("create-boiledrez")
  .argument("<project-name>", "name of the project")
  .action(async (projectName) => {
    const targetPath = path.resolve(process.cwd(), projectName);
    const templatePath = path.join(__dirname, "../template");

    // 1. Check if folder exists
    if (fs.existsSync(targetPath)) {
      console.error(chalk.red(`❌ Folder ${projectName} already exists.`));
      process.exit(1);
    }

    // 2. Copy template
    console.log(chalk.blue(`📂 Creating project in ${targetPath}...`));
    await fs.copy(templatePath, targetPath);

    // 3. Install dependencies
    const spinner = ora("📦 Installing dependencies with pnpm...").start();
    try {
      await execa("pnpm", ["install"], { cwd: targetPath, stdio: "inherit" });
      spinner.succeed("✅ Dependencies installed!");
    } catch (error) {
      spinner.fail(
        "❌ Failed to install dependencies. Make sure pnpm is installed."
      );
      process.exit(1);
    }

    // 4. Success message
    console.log(chalk.green(`\n✅ Done! Your project is ready:`));
    console.log(chalk.cyan(`cd ${projectName}`));
    console.log(chalk.cyan(`pnpm dev`));
  });

program.parse(process.argv);
