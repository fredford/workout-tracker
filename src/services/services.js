import UserService from "./UserService";
import WorkoutService from "./WorkoutService";
import WorkoutsService from "./WorkoutsService";
import SetsService from "./SetsService";
import StatsService from "./StatsService";
import ExercisesService from "./ExercisesService";
import WeightService from "./WeightService";
import StepsService from "./StepsService";

const services = {
  user: UserService,
  workout: WorkoutService,
  workouts: WorkoutsService,
  sets: SetsService,
  stats: StatsService,
  exercises: ExercisesService,
  weight: WeightService,
  steps: StepsService,
};

export default services;
