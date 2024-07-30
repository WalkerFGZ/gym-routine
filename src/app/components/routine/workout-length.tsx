import WorkoutDaysSlider from "./workout-days-slider";

export const WorkoutLength = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold">
        Cuanto tiempo tienes disponible para entrenar?
      </h3>
      <span className="text-md font-semibold">
        Siempre puedes ajustar la duración. Usaremos tus selecciones para
        personalizar tu experiencia.
      </span>
      <div className="flex flex-row gap-5 ">
        <p className="font-bold">Duración entrenamiento</p>
        <WorkoutDaysSlider />
        30 minutes
      </div>
    </div>
  );
};
