import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../../../utils/constants";
import { motion } from "framer-motion";
import { straggerFadeInOut } from "../../../animations";
import { toast } from "react-hot-toast";
import { getToken } from "../../../store/getToken";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import MainLoader from "../../../animations/MainLoader";

const PopularFoods = () => {
  const [loading, setLoading] = useState(false);
  const [foodData, setFoodData] = useState([]);
  const fetchPopularFoods = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${APIURL}/report/most-ordered`,
        getToken()
      );
      setFoodData(response.data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchPopularFoods();
  }, []);
  return (
    <section className="w-1/2   -mt-6">
      <h2 className="text-2xl bg-orange-600 order-card  w-fit px-3 rounded-md py-1 font-semibold text-gray-200">
        Popular Foods
      </h2>

      <div className=" grid grid-cols-2 gap-3 w-[470px]  mt-4 ">
        {loading && <MainLoader />}
        {foodData?.map((food, i) => (
          <motion.div
            {...straggerFadeInOut(i)}
            className="bg-gray-50 flex items-center gap-2 px-2 rounded-lg order-card border-gray-300 border"
          >
            <LazyLoadImage
              effect="opacity"
              className="w-20 h-20 p-1 cursor-pointer"
              src={`${APIURL}/file/${food.item.image}`}
              alt="food"
            />
            <div>
              <p className="text-headingColor text-sm font-semibold truncate w-32 font-sans">
                {food.item.name}
              </p>
              <p className="text-xs font-semibold text-textColor mt-1">
                {food.item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularFoods;
