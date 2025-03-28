import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="p-5 mx-0 md:mx-60">
      <div className="flex justify-center mb-4">
        <div className="avatar md:hidden flex-col items-center">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="./images/img.jpg" />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold">
            I'm Faith Dasola Obajafa
          </h1>
        </div>
      </div>
      <div className=" hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="ring-2 ring-blue-700 w-3xl rounded-t-full p-2">
            <img
              src="/bessediogportfolio/images/img.jpg"
              className="hidden md:block rounded-t-full pb-1"
            />
            <div className="ring-0 bg-blue-500 flex justify-center items-center p-2">
              {" "}
              <h1 className="text-white font-bold">Obajafa Faith Dasola</h1>
            </div>
          </div>
          <div>
            <p className="py-6 text-2xl">
              Hi, I'm Faith Obajafa, a detail-driven data analyst with a strong
              passion for uncovering hidden trends and insights. With 5 years of
              experience in data analysis, I excel at transforming complex data
              into actionable recommendations that drive business growth.
            </p>
            <Link href="/about_me" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
