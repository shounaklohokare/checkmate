import axios from "axios";

import { API_BASE_URL } from "./config";
import { localDay } from "./utils/streak";
import type { Puzzle } from "./utils/constants";

export const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

/** The daily for the device's local date; if the server rejects that date (clock off by over a day), its own. */
export const fetchDaily = async (): Promise<Puzzle> => {
  try {
    return (await api.get<Puzzle>("/puzzles/daily", { params: { date: localDay() } })).data;
  } catch (err) {
    if ((err as { response?: { status?: number } } | null)?.response?.status !== 422) throw err;
    return (await api.get<Puzzle>("/puzzles/daily")).data;
  }
};
