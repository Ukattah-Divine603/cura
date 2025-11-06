export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#3711b350] p-4 border-b border-[#4006FF] backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <img className="w-14" src="/logo.svg" alt="cura logo" />
        <h1 className="text-[#360dbb] font-nunito text-3xl font-extrabold">
          CURA
        </h1>
      </div>

      <div className="flex gap-3">
        <a
          className="bg-[#3711b350] px-4 py-2 rounded-lg text-white"
          href="/auth/signup"
        >
          Sign Up
        </a>
        <a
          className="bg-[#3711b350] px-4 py-2 rounded-lg text-white"
          href="/auth/login"
        >
          Login
        </a>
      </div>
    </header>
  );
}
