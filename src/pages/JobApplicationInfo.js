import React from "react";
import SideBar from "../components/SideBar";
import {
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";


function JobApplicationInfo() {
  return (
    <div className="w-[96%]  text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <div className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className="px-2">
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="w-[65%]">
              <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className="px-2">
              <span className="text-[#00AEEF]">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="bg-[white] font-arabic h-[694px] text-right grow mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className="scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <div>

            <div className="w-[1040px] float-right mr-[12%] mt-10">
              <p className="text-[#033362] mr-[20px] font-extrabold text-[22px]">
                معلومات أساسية
              </p>
              <div className="flex flex-wrap">
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    رقم الهاتف
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  لا يوجد
                  </div>
                </div>
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  الإسم
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال اسم المتقدم على الوظيفة الثلاثي
                  </div>
                </div>
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    رقم الجوال
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  0959161652
                  </div>
                </div>
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    البريد الإلكتروني
                  </p>
                  <div dir='ltr' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  kenan@big-bang.ae
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    مكان وتاريخ الولادة
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  دمشق
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    رقم البطاقة الشخصية
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  ذكر
                  </div>
                </div>
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    الإختصاص
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال مشرف مبيعات
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    السيرة الذاتية
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  السيرة الذاتية
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    الجنسية
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  Zzzzxxxx
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    الحالة الإجتماعية
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  متزوج
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    العمر
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  56
                  </div>
                </div>
                <div className="w-[500px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    العنوان
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  العنوان
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  الخدمة الالزامية
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  معفى
                  </div>
                </div>
                <div className="w-[240px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  الجنس
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  ذكر
                  </div>
                </div>
                <div className="w-[1020px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  ملاحظات
                  </p>
                  <div className="w-full h-[80px] text-[14px] text-[#000] p-2 border-[1px] rounded border-[#c4c8cf] ">
                  ملاحظات
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[1040px] float-right mr-[12%] mt-10">
              <p className="text-[#033362] mr-[20px] font-extrabold text-[22px]">
                الأسئلة
              </p>
              <div className="flex mb-[20px] flex-wrap">
                <div className="w-[180px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  سنة التخرج
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  سنة التخرج
                  </div>
                </div>
                <div className="w-[180px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  مصدر الشهادة
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال عن مكان التخصص
                  </div>
                </div>
                <div className="w-[300px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  التخصص
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال عن اسم التخصص الجامعي هنا
                  </div>
                </div>
                <div className="w-[300px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  الشهادة
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال عن اسم الشهادة هنا
                  </div>
                </div>
                <div className="w-[1020px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  كيف تعرفت إلى شركة سيدي هشام
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال عن الجواب هنا
                  </div>
                </div>
                <div className="w-[1020px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                  ماذا يمكن أن تقدم للشركة إذا تم قبولك
                  </p>
                  <div dir='rtl' className="w-full h-[30px] text-[14px] text-[#000] flex items-center px-2 border-[1px] rounded border-[#c4c8cf] ">
                  مثال عن الجواب هنا
                  </div>
                </div>
                <div className="w-[1020px] mr-[20px] my-[10px]">
                  <p className="text-[15px] text-[#0388CC] font-[500]">
                    مهارات الحاسوب
                  </p>
                  <div className="flex justify-between">
                    <div className="h-[30px]  w-full mr-[20px] border-[1px]  flex items-center rounded border-[#c4c8cf] ">
                      <span className="pr-4 float-left  text-[#000]  font-[700] px-2 text-[14px] ">
                        Windows:
                      </span>{" "}
                      <span className="text-[200] px-2 text-[14px]">جيد</span>
                    </div>
                    <div className="h-[30px]  w-full mr-[20px] border-[1px]  flex items-center rounded border-[#c4c8cf] ">
                      <span className="pr-4 float-left  text-[#000] font-[700] px-2 text-[14px] ">
                        Windows:
                      </span>{" "}
                      <span className="text-[200] px-2 text-[14px]">جيد</span>
                    </div>
                    <div className="h-[30px]  w-full mr-[20px] border-[1px]  flex items-center rounded border-[#c4c8cf] ">
                      <span className="pr-4 float-left  text-[#000]  font-[700] px-2 text-[14px] ">
                        Windows:
                      </span>{" "}
                      <span className="text-[200] px-2 text-[14px]">جيد</span>
                    </div>
                    <div className="h-[30px]  w-full border-[1px] flex items-center rounded border-[#c4c8cf] ">
                      <span className="pr-4 float-left  text-[#000] font-[700] px-2 text-[14px] ">
                        Windows:
                      </span>{" "}
                      <span className="text-[200] px-2 text-[14px]">جيد</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobApplicationInfo;
