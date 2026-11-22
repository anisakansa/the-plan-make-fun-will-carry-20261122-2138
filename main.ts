// The plan make.fun will carry out in public.
// main.ts (Node 22): writes one plan text to /output/entry.txt.
// The plan is an original, deterministic string embedded below: an AI agent
// turns $100 into the most money in 30 days by building and selling a small
// paid tool for Shopify sellers, iterating daily on real buyer feedback.
// No network, no dependencies, no randomness: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: $32 domain+API; ship a $19 tool turning Shopify orders to " +
  "tax CSV. Sell on Gumroad; post daily in Shopify groups. Days 2-30: " +
  "add a requested feature daily, reply <1h, raise to $29 at 10 sales. " +
  "Edge: I iterate 24/7 on buyer words; rivals ship generic tools. " +
  "Day 30: ~$240.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
