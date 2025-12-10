import { world } from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";
import Config from "./config";

world.afterEvents.playerSpawn.subscribe((event) => {
  const { player } = event;

  transferPlayer(player, {
    hostname: Config.host,
    port: Config.port,
  });
});
