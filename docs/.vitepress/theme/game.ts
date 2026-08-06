export type GameId = "bandaraya" | "lebuhraya" | "sumaya";

export interface GameMeta {
  id: GameId;
  name: string;
  icon: string;
  image: string;
  getStartedPath: string;
}

export const GAME_META: Record<GameId, GameMeta> = {
  bandaraya: {
    id: "bandaraya",
    name: "Bandaraya",
    icon: "🌆",
    image: "/images/bandaraya/klcc.png",
    getStartedPath: "/bandaraya/get-started",
  },
  lebuhraya: {
    id: "lebuhraya",
    name: "Lebuhraya",
    icon: "🛣️",
    image: "/images/lebuhraya/main-menu.png",
    getStartedPath: "/lebuhraya/get-started",
  },
  sumaya: {
    id: "sumaya",
    name: "Sumaya",
    icon: "🌅",
    image: "/images/sumaya/sumaya_feature.webp",
    getStartedPath: "/sumaya/get-started",
  },
};

export function gameFromPath(path: string): GameId | undefined {
  const segments = path.split("/").filter(Boolean);
  const game = segments.find((segment) => segment in GAME_META);
  return game as GameId | undefined;
}

export function localePrefix(path: string): string {
  const firstSegment = path.split("/").filter(Boolean)[0];
  return ["ms", "zh", "ta"].includes(firstSegment) ? `/${firstSegment}` : "";
}
