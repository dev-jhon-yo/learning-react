function Page() {
  const fullTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 0 && hour < 12) {
    greeting = "Good morning 😄";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon 😎";
  } else if (hour >= 18 && hour <= 23) {
    greeting = "Good evening 😴";
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greeting}</div>
    </div>
  );
}

export default Page;
