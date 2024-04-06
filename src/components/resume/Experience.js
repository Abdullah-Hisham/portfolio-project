import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">خبرة العمل</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="مهندس برمجيات كبير"
            subTitle="Google Out Tech - (2017 - الآن)"
            result="الولايات المتحدة الأمريكية"
            des="عملية توظيف Google هي جزء مهم من ثقافتنا. يهتم العاملون في Google بعمق بفرقهم وبالأشخاص الذين يشكلونها."
          />
          <ResumeCard
            title="مطور ومدرب الويب"
            subTitle="فريق تطوير Apple - (2012 - 2016)"
            result="ماليزيا"
            des="وجهة شهيرة بعدد متزايد من الخريجين المحليين المؤهلين تأهيلاً عاليًا، فمن الصحيح أن الحصول على وظيفة في ماليزيا ليس سهلاً."
          />
          <ResumeCard
            title="مطور واجهة المستخدم"
            subTitle="نايك - (2020 - 2011)"
            result="عُمان"
            des="نمت اقتصاد عُمان بقوة خلال السنوات الأخيرة، حيث تحولت من اقتصاد مبني على الإنتاج والابتكار."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">خبرة التدريب</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="مدرب النادي الرياضي"
            subTitle="مركز صالة الألوان (2015 - 2020)"
            result="دكا"
            des="التدريب الذي تقدمه الجامعات لتهيئة الأشخاص للعمل في مختلف قطاعات الاقتصاد أو مجالات الثقافة."
          />
          <ResumeCard
            title="مطور ومدرب الويب"
            subTitle="كلية سوبركينغ (2010 - 2014)"
            result="كندا"
            des="التعليم العالي هو التعليم الثانوي الذي يؤدي إلى منح درجة أكاديمية. التعليم العالي يُعرف أيضًا بالتعليم الثانوي الذي يُتبع."
          />
          <ResumeCard
            title="معلم مدرسة"
            subTitle="مدرسة كينغستار الثانوية (2001 - 2010)"
            result="نيفادا"
            des="يغطي التعليم الثانوي أو التعليم ما بعد الثانوي مرحلتين على مقياس التصنيف الدولي للتعليم."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
