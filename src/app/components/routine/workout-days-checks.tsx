import { Checkbox, CheckboxGroup } from "@nextui-org/react";

interface WorkoutDays {
  id: number;
  name: string;
}

const days = [
  { id: 1, name: "Lunes" },
  { id: 2, name: "Martes" },
  { id: 3, name: "Miércoles" },
  { id: 4, name: "Jueves" },
  { id: 5, name: "Viernes" },
  { id: 6, name: "Sábado" },
  { id: 7, name: "Domingo" },
];

export default function WorkoutDaysChecks() {
  return (
    <div className="flex flex-col gap-6">
      <CheckboxGroup
        isRequired
        description="Selecciona los días de la semana en los que vas a entrenar"
        isInvalid={false}
        color="warning"
      >
        {days.map((day) => (
          <Checkbox key={day.id} value={day.name} className="flex mt-2">
            {day.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
