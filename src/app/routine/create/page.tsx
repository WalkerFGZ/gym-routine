import { Metadata } from "next";
import React from "react";
import { WorkoutDays } from "@/app/components/routine/workout-days";
import { WorkoutLength } from "@/app/components/routine/workout-length";

export const metadata: Metadata = {
  title: "Crear rutina",
  description: "Crea tu rutina personalizada y empieza a entrenar",
};

export default async function CreateRoutine() {
  return (
    <section className="mx-auto max-w-[850px] mt-12">
      <WorkoutLength />
      <WorkoutDays />
    </section>
  );
}
