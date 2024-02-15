"use client";

function Page() {
  const handleButtonClick = () => {
    alert("Button Click Event");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        onClick={handleButtonClick}
        className="p-3 bg-blue-700 text-white rounded-md"
      >
        Click Here
      </button>
    </div>
  );
}

export default Page;
