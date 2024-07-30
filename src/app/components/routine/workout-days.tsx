import { Button } from "@nextui-org/react";
import WorkoutDaysChecks from "./workout-days-checks";

export const WorkoutDays = () => {
  return (
    <div>
      <h3 className="text-xl font-bold my-6">
        Que días de la semana vas a entrenar?
      </h3>
      <WorkoutDaysChecks />
      <Button color="warning" className="mt-10 w-full text-lg font-bold">
        Continuar
      </Button>
    </div>
  );
};
