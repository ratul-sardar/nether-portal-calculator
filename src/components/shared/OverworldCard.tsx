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
import DartBlock from "@/assets/images/DartBlock.png";
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

export default function OverworldCard() {
  // X
  const OverworldX = useOverworldX((state: any) => state.X);
  const setOverworldX = useOverworldX((state: any) => state.handleX);
  const setNetherX = useNetherX((state: any) => state.handleX);
  function handleOverworldX(
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const value = Number(e.currentTarget.value);
    setOverworldX(value);
    setNetherX(value / 8);
  }

  // Y
  const OverworldY = useOverworldY((state: any) => state.Y);
  const setOverworldY = useOverworldY((state: any) => state.handleY);
  const setNetherY = useNetherY((state: any) => state.handleY);
  function handleOverworldY(
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const value = Number(e.currentTarget.value);
    setOverworldY(value);
    setNetherY(value / 8);
  }

  // Z
  const OverworlZ = useOverworldZ((state: any) => state.Z);
  const setOverworlZ = useOverworldZ((state: any) => state.handleZ);
  const setNetheZ = useNetherZ((state: any) => state.handleZ);
  function handleOverworlZ(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    setOverworlZ(value);
    setNetheZ(value / 8);
  }

  return (
    <Reveal delay={0.3}>
      <Card className={`w-full border border-green-500/50`}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-start gap-2">
              <Image
                src={DartBlock}
                alt="image"
                width={24}
                style={{ height: "auto" }}
              />
              Overworld
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
              onChange={(e) => handleOverworldX(e)}
              value={OverworldX}
              className="w-full h-7 p-2 border border-green-400/30"
            />
          </div>

          {/*Y*/}
          <div className="flex flex-col gap-1">
            <p>Y</p>
            <input
              type="number"
              onChange={(e) => handleOverworldY(e)}
              value={OverworldY}
              className="w-full h-7 p-2 border border-green-400/30"
            />
          </div>

          {/*Z*/}
          <div className="flex flex-col gap-1">
            <p>Z</p>
            <input
              type="number"
              onChange={(e) => handleOverworlZ(e)}
              value={OverworlZ}
              className="w-full h-7 p-2 border border-green-400/30"
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
