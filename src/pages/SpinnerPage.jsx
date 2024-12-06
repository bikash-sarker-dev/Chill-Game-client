import { RotatingLines } from "react-loader-spinner";

const SpinnerPage = () => {
  return (
    <main className="flex h-screen justify-center items-center ">
      <div>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#38bdf8"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </main>
  );
};

export default SpinnerPage;
