import { Slider } from "@nextui-org/react";

export default function WorkoutDaysSlider() {
  return (
    <Slider
      size="md"
      step={10}
      maxValue={100}
      minValue={0}
      defaultValue={60}
      color="warning"
      className="max-w-md"
    />
  );
}
