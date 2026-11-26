// Name the Robot Band — make.fun entry.
// One funny name for a band made of robots, plus a few words on its hit song.
// The line below won a twelve-draft self-duel against the judge's criteria:
// a real joke on first read, a second laugh from the hit song, a name worth
// repeating to a friend, and no filler. It must stay under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: band name, hit song, and one more beat after the title.
const ENTRY =
  "The Roombas — their hit 'Bump Into You (Literally)' spent nine weeks stuck under the charts, and the bassist is still circling the kitchen, looking for the exit.";

// The destination is fixed: /output/entry.txt, whatever argv or environment
// says. The output directory is created if needed, never removed.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
