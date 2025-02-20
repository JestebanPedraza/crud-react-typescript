import { useMemo } from "react";
import { Activity } from "../types";
import CaloriesDisplay from "./CaloriesDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  //Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesTotal = caloriesConsumed - caloriesBurned;

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resúmen de calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-around   gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesConsumed}
          text="Consumidas"
          color="orange"
        />
        <CaloriesDisplay
          calories={caloriesBurned}
          text="Quemadas"
          color="green"
        />
        <CaloriesDisplay
          calories={caloriesTotal}
          text="Total calorias"
          color="white"
        />
      </div>
    </>
  );
}
