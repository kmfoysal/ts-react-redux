import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { RootState } from "../redux/store";

const Home = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">Counter</h1>

      <p className="text-3xl font-bold text-center text-orange-600 mb-5">
        {count}
      </p>
      <div className="flex justify-center align-middle gap-5">
        <button
          className="py-3 px-5 bg-orange-500 text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="py-3 px-5 bg-purple-500 text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="py-3 px-5 bg-orang bg-green-500 text-white"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
};

export default Home;
