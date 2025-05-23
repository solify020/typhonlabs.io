"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type InsightsCardProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
};

const InsightCard = ({ imgUrl, title, subtitle, index }: InsightsCardProps) => (
  <section>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        width={1000}
        height={250}
        alt="planet-01"
        priority={true}
        className="md:w-[250px] w-full rounded-[10px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col">
          <h4 className="font-normal lg:text-[30px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default InsightCard;
