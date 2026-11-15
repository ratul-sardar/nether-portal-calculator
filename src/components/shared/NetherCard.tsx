"use client";

import Image from "next/image";
import type { ChangeEvent } from "react";
import {
  useOverworldX,
  useOverworldY,
  useOverworldZ,
} from "@/app/api/store/overworld/overworld";
import {
  useNetherX,
  useNetherY,
  useNetherZ,
} from "@/app/api/store/theNether/theNether";
import NetherPortal from "@/assets/images/NetherPortal.png";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Reveal from "../animations/Reveal";
import { Button } from "../ui/button";

export default function NetherCard() {
  // X
  const NetherX = useNetherX((state: any) => state.X);
  const setNetherX = useNetherX((state: any) => state.handleX);
  const setOverworldX = useOverworldX((state: any) => state.handleX);
  function handleNetherX(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setNetherX(value);
    setOverworldX(value * 8);
  }

  // Y
  const NetherY = useNetherY((state: any) => state.Y);
  const setNetherY = useNetherY((state: any) => state.handleY);
  const setOverworldY = useOverworldY((state: any) => state.handleY);
  function handleNetherY(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setNetherY(value);
    setOverworldY(value * 8);
  }

  // Z
  const NetherZ = useNetherZ((state: any) => state.Z);
  const setNetherZ = useNetherZ((state: any) => state.handleZ);
  const setOverworldZ = useOverworldZ((state: any) => state.handleZ);
  function handleNetherZ(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setNetherZ(value);
    setOverworldZ(value * 8);
  }

  return (
    <Reveal delay={0.5}>
      <Card className={`w-full border border-purple-500/90`}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-start gap-2">
              <Image
                src={NetherPortal}
                alt="image"
                width={18}
                style={{ height: "auto" }}
              />
              The Nether
            </div>
          </CardTitle>
          <CardAction>
            <Button>Copy x,y,z</Button>
          </CardAction>
        </CardHeader>

        <CardContent className="flex items-center gap-4">
          {/*X*/}
          <div className="flex flex-col gap-1">
            <p>X</p>
            <input
              type="number"
              onChange={(e) => handleNetherX(e)}
              value={NetherX}
              className="w-full h-7 p-2 border border-purple-400/50"
            />
          </div>

          {/*Y*/}
          <div className="flex flex-col gap-1">
            <p>Y</p>
            <input
              type="number"
              onChange={(e) => handleNetherY(e)}
              value={NetherY}
              className="w-full h-7 p-2 border border-purple-400/50"
            />
          </div>

          {/*Z*/}
          <div className="flex flex-col gap-1">
            <p>Z</p>
            <input
              type="number"
              onChange={(e) => handleNetherZ(e)}
              value={NetherZ}
              className="w-full h-7 p-2 border border-purple-400/50"
            />
          </div>
        </CardContent>

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Reveal>
  );
}
