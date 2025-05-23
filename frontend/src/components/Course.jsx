import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [magazine, setMagazine] = useState([]);

  useEffect(() => {
    const getMagazine = async () => {
      try {
        const res = await axios.get('https://mernfyp-production.up.railway.app/magazine');
        console.log(res.data);
        setMagazine(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMagazine();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center bg-white dark:bg-slate-900">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-orange-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {magazine.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
