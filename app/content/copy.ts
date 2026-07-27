import type { Language } from "../types";
import { en } from "./en";
import { sk } from "./sk";

export const copy = { sk, en } as const;

export type PageCopy = (typeof copy)[Language];
