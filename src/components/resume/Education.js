import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* الجزء الأول */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">جودة التعليم</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="بكالوريوس كلية حاسبات ومعلومات"
            subTitle="جامعة المنصورة"
            result="٣.٩٠/٤"
            des="التدريب الذي تقدمه الجامعات لتهيئة الأشخاص للعمل في مختلف قطاعات الاقتصاد أو مجالات الثقافة."
          />
          <ResumeCard
            title="AS - العلوم والمعلومات"
            subTitle="كلية سوبركينغ (2001 - 2005)"
            result="٣.٩٠/٤"
            des="التعليم العالي هو التعليم الثانوي الذي يؤدي إلى منح درجة أكاديمية. التعليم العالي يُعرف أيضًا بالتعليم الثانوي الذي يُتبع."
          />
          <ResumeCard
            title="تعليم المدارس الثانوية"
            subTitle="مدرسة كينغستار الثانوية (1998 - 2000)"
            result="٣.٩٠/٤"
            des="يغطي التعليم الثانوي أو التعليم ما بعد الثانوي مرحلتين على مقياس التصنيف الدولي للتعليم."
          />
        </div>
      </div>
      {/* الجزء الثاني */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">خبرة العمل</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            result="عمان"
            des="نمت اقتصاد عُمان بقوة خلال السنوات الأخيرة، حيث تحولت من اقتصاد مبني على الإنتاج والابتكار."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
