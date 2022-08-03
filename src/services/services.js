import UserService from "./UserService";
import WorkoutService from "./WorkoutService";
import WorkoutsService from "./WorkoutsService";
import SetsService from "./SetsService";
import StatsService from "./StatsService";
import ExercisesService from "./ExercisesService";

const services = {
  user: UserService,
  workout: WorkoutService,
  workouts: WorkoutsService,
  sets: SetsService,
  stats: StatsService,
  exercises: ExercisesService,
};

export default services;
