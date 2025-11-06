export default function Dashboard() {
  return (
    <>
      <main>
        <section className="flex flex-row justify-between items-center  w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-10 mt-4 ml-auto mr-auto rounded-xl">
          <div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-2xl font-light">Welcome Back</h1>
            <p className="text-4xl font-medium">John Doe</p>
          </div>

          <div className="flex flex-col items-right justify-center gap-4 border-3 overflow-hidden border-[#4006FF] rounded-full p-3">
            <img
              src="/profile.svg"
              alt="profile"
              className="w-20 h-20 mx-auto"
            />
          </div>
        </section>
        <section className="flex flex-col justify-between items-left  w-full max-w-7xl  p-10 mt-4 ml-auto mr-auto ">
          <p className="text-[#ffff]   ">Your Recent Sessions</p>
          <div className="h-[500px] overflow-y-scroll overflow-x-hidden p-2 custom-scrollbar">
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
            <div className="w-full max-w-7xl bg-[#3711b350] border-2 border-[#4006FF] p-7 mt-4 ml-auto mr-auto rounded-xl"></div>
          </div>
        </section>
        <section className="flex flex-col justify-between items-center  w-full max-w-7xl  p-10 mt-4 ml-auto mr-auto">
          <p className="text-3xl font-bold">Start A New Session</p>
          <div className="flex flex-row gap-4 mt-5 items-center justify-center">
            <a
              className="bg-[#3711b350] px-20 py-10 rounded-lg text-white text-2xl font-medium"
              href="/treatment"
            >
              Treatment
            </a>
            <p> Or </p>
            <a
              className="bg-[#3711b350] px-20 py-10 rounded-lg text-white text-2xl font-medium"
              href="/precaution"
            >
              Precaution
            </a>
          </div>
        </section>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/tailwind-scrollbar@latest/dist/index.js"></script>
    </>
  );
}
