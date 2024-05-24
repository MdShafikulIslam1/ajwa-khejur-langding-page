"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TOrderField } from "../types/globalType";
import { orderFormSchemaValidation } from "../validation";

const OrderForm = () => {
  const baseValue = 1800;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(baseValue);
  const [shippingCost, setShippingCost] = useState(80);
  const [totalPrice, setTotalPrice] = useState(price + shippingCost);

  useEffect(() => {
    setPrice(baseValue * quantity);
  }, [quantity]);

  useEffect(() => {
    setTotalPrice(price + shippingCost);
  }, [price, shippingCost]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TOrderField>({
    resolver: zodResolver(orderFormSchemaValidation),
  });

  const onSubmit = async (data: FieldValues) => {
    data.country = "Bangladesh";
    console.log("data", data);
    alert("ay ajke");
    // try {
    // } catch (error) {
    //   console.log("signUp error: ", error);
    // }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container w-full h-full p-8"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full md:px-20 border p-8">
          <div className="w-full h-full rounded-br-2xl  rounded-tl-2xl">
            <div>
              <h1 className="text-2xl mb-2">
                অর্ডার করতে নিচের ফর্ম সম্পূর্ণ পূরণ করুন।
              </h1>
              <div className="flex flex-col gap-8 h-full w-full">
                {/* FIRST NAME */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    First name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    id="name"
                    placeholder="সম্পূর্ণ নাম লিখুন"
                    className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
                  />
                  {errors.name && (
                    <span className="text-red-700 text-sm">
                      {errors?.name?.message}
                    </span>
                  )}
                </div>
                {/* PHONE NUMBER*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    phone <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phone")}
                    placeholder="১১ ডিজিটের মোবাইল নাম্বার"
                    className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
                  />
                  {errors.phone && (
                    <span className="text-red-700 text-sm">
                      {errors?.phone?.message}
                    </span>
                  )}
                </div>
                {/* STREET ADDRESS*/}
                <div className="flex flex-col gap-1">
                  <label htmlFor="">
                    Street address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    {...register("address")}
                    placeholder="গ্রাম/এলাকা,থানা,জেলা"
                    className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
                  />
                  {errors.address && (
                    <span className="text-red-700 text-sm">
                      {errors?.address?.message}
                    </span>
                  )}
                </div>
                {/* COUNTRY /REGION */}
                <div>
                  <label htmlFor="">
                    Country / Region <span className="text-red-700">*</span>
                  </label>
                  <p className="text-base font-normal"></p>
                  <h3 className="text-lg font-bold">Bangladesh</h3>
                </div>
                {/* YOUR PRODUCTS */}
                <div>
                  <h1 className="text-xl font-medium">Your Products</h1>
                  <div className="border mt-6 p-6">
                    <input type="radio" name="" id="" defaultChecked />
                    <label htmlFor="" className="ml-3 font-semibold">
                      Ajwa VIP 1 Kg
                    </label>
                    <p className="ml-4 mt-1">
                      পরিমানে বেশি লাগলে (+)এ ক্লিক করেন
                    </p>
                    <div className=" mt-4 flex items-center gap-4">
                      <div className="border py-1 px-3 flex gap-x-5 justify-evenly items-center">
                        <button
                          type="button"
                          className="text-xl"
                          disabled={quantity === 1}
                          onClick={() =>
                            setQuantity((preQuantity) => preQuantity - 1)
                          }
                        >
                          -
                        </button>
                        <p>{quantity}</p>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((preQuantity) => preQuantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <p>৳ {quantity === 1 ? baseValue : price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-br-2xl  rounded-tl-2xl">
            <div className="font-light">
              <h1 className="text-2xl mb-2">সর্বমোট বিল 👇</h1>
              <div className="w-full flex justify-between items-center">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <hr className="w-full h-full border-dashed mt-2 border-1" />
              <div className="w-full flex justify-between items-cente mt-2">
                <p>Ajwa Vip {quantity} Kg</p>
                <p>৳ {price}</p>
              </div>
              <hr className="w-full h-full border-dashed mt-2 border-1" />
              <div className="w-full flex justify-between items-center mt-2">
                <p>Subtotal</p>
                <p>৳ {price}</p>
              </div>
              <div className="w-full flex justify-between items-center mt-4">
                <p>Shipping</p>
                <div>
                  <div className="flex items-center mt-2">
                    <input
                      type="radio"
                      name="shipping"
                      value={80}
                      defaultValue={80}
                      defaultChecked={true}
                      onChange={(event: any) =>
                        setShippingCost(Number(event?.target?.value))
                      }
                      id="insideDhaka"
                    />
                    <label htmlFor="insideDhaka" className="ml-2">
                      ঢাকার ভিতরে ৳ 80
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="shipping"
                      value={150}
                      defaultValue={150}
                      onChange={(event: any) =>
                        setShippingCost(Number(event?.target?.value))
                      }
                      id="outsideDhaka"
                    />
                    <label htmlFor="outsideDhaka" className="ml-2">
                      ঢাকার বাইরে ৳ 150
                    </label>
                  </div>
                </div>
              </div>
              <hr className="w-full h-full border-dashed mt-3 border-1" />
              <div className="w-full flex justify-between items-center mt-3">
                <p>Total</p>
                <p>
                  ৳
                  <span className="font-bold ml-1">
                    {/* {quantity === 1
                      ? baseValue + shippingCost
                      : price + shippingCost} */}
                    {totalPrice}
                  </span>
                </p>
              </div>
              <div className="w-full px-3 py-4 bg-slate-400/10 mt-4">
                পণ্য হাতে নিয়ে পেমেন্ট করুন
              </div>
              <button
                type="submit"
                className="w-full px-3 py-4 bg-[#FFD400] hover:bg-slate-600 hover:text-white rounded mt-4 flex flex-col gap-2 justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-lock"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p>
                  অর্ডার করুন
                  <span className="ml-1 font-bold">৳ {totalPrice}</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useState } from "react";
// import { FieldValues, useForm } from "react-hook-form";
// import { TOrderField } from "../types/globalType";
// import { orderFormSchemaValidation } from "../validation";

// const OrderForm = () => {
//   const baseValue = 1800;
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(baseValue);
//   const [shippingCost, setShippingCost] = useState(80);
//   const [totalPrice, setTotalPrice] = useState(baseValue + shippingCost);

//   useEffect(() => {
//     setPrice(baseValue * quantity);
//   }, [quantity]);

//   useEffect(() => {
//     setTotalPrice(price + shippingCost);
//   }, [price, shippingCost]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TOrderField>({
//     resolver: zodResolver(orderFormSchemaValidation),
//   });

//   const onSubmit = async (data: FieldValues) => {
//     data.country = "Bangladesh";
//     console.log("data", data);
//     alert("ay ajke");
//     try {
//     } catch (error) {
//       console.log("signUp error: ", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="container w-full h-full p-8"
//     >
//       <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full md:px-20 border p-8">
//           <div className="w-full h-full rounded-br-2xl  rounded-tl-2xl">
//             <div>
//               <h1 className="text-2xl mb-2">
//                 অর্ডার করতে নিচের ফর্ম সম্পূর্ণ পূরণ করুন।
//               </h1>
//               <div className="flex flex-col gap-8 h-full w-full">
//                 {/* FIRST NAME */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="">
//                     First name <span className="text-red-700">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     {...register("name")}
//                     id="name"
//                     placeholder="সম্পূর্ণ নাম লিখুন"
//                     className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
//                   />
//                   {errors.name && (
//                     <span className="text-red-700 text-sm">
//                       {errors?.name?.message}
//                     </span>
//                   )}
//                 </div>
//                 {/* PHONE NUMBER*/}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="">
//                     phone <span className="text-red-700">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="phone"
//                     {...register("phone")}
//                     placeholder="১১ ডিজিটের মোবাইল নাম্বার"
//                     className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
//                   />
//                   {errors.phone && (
//                     <span className="text-red-700 text-sm">
//                       {errors?.phone?.message}
//                     </span>
//                   )}
//                 </div>
//                 {/* STREET ADDRESS*/}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="">
//                     Street address <span className="text-red-700">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     {...register("address")}
//                     placeholder="গ্রাম/এলাকা,থানা,জেলা"
//                     className="py-2 w-full border border-red-700 focus:outline-none px-2 text-base font-light rounded focus:bg-transparent"
//                   />
//                   {errors.address && (
//                     <span className="text-red-700 text-sm">
//                       {errors?.address?.message}
//                     </span>
//                   )}
//                 </div>
//                 {/* COUNTRY /REGION */}
//                 <div>
//                   <label htmlFor="">
//                     Country / Region <span className="text-red-700">*</span>
//                   </label>
//                   <p className="text-base font-normal"></p>
//                   <h3 className="text-lg font-bold">Bangladesh</h3>
//                 </div>
//                 {/* YOUR PRODUCTS */}
//                 <div>
//                   <h1 className="text-xl font-medium">Your Products</h1>
//                   <div className="border mt-6 p-6">
//                     <input
//                       type="radio"
//                       name="product"
//                       id="product"
//                       defaultChecked
//                     />
//                     <label htmlFor="product" className="ml-3 font-semibold">
//                       Ajwa VIP 1 Kg
//                     </label>
//                     <p className="ml-4 mt-1">
//                       পরিমানে বেশি লাগলে (+)এ ক্লিক করেন
//                     </p>
//                     <div className="mt-4 flex items-center gap-4">
//                       <div className="border py-1 px-3 flex gap-x-5 justify-evenly items-center">
//                         <button
//                           type="button"
//                           className="text-xl"
//                           disabled={quantity === 1}
//                           onClick={() => {
//                             setQuantity((prevQuantity) => prevQuantity - 1);
//                           }}
//                         >
//                           -
//                         </button>
//                         <p>{quantity}</p>
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setQuantity((prevQuantity) => prevQuantity + 1);
//                           }}
//                         >
//                           +
//                         </button>
//                       </div>
//                       <div>
//                         <p>৳ {price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full h-full rounded-br-2xl  rounded-tl-2xl">
//             <div className="font-light">
//               <h1 className="text-2xl mb-2">সর্বমোট বিল 👇</h1>
//               <div className="w-full flex justify-between items-center">
//                 <p>Product</p>
//                 <p>Subtotal</p>
//               </div>
//               <hr className="w-full h-full border-dashed mt-2 border-1" />
//               <div className="w-full flex justify-between items-center mt-2">
//                 <p>Ajwa Vip {quantity} Kg</p>
//                 <p>৳ {price}</p>
//               </div>
//               <hr className="w-full h-full border-dashed mt-2 border-1" />
//               <div className="w-full flex justify-between items-center mt-2">
//                 <p>Subtotal</p>
//                 <p>৳ {price}</p>
//               </div>
//               <div className="w-full flex justify-between items-center mt-4">
//                 <p>Shipping</p>
//                 <div>
//                   <div className="flex items-center mt-2">
//                     <input
//                       type="radio"
//                       name="shipping"
//                       value={80}
//                       defaultChecked
//                       onChange={(event: any) =>
//                         setShippingCost(Number(event.target.value))
//                       }
//                       id="insideDhaka"
//                     />
//                     <label htmlFor="insideDhaka" className="ml-2">
//                       ঢাকার ভিতরে ৳ 80
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       name="shipping"
//                       value={150}
//                       onChange={(event: any) =>
//                         setShippingCost(Number(event.target.value))
//                       }
//                       id="outsideDhaka"
//                     />
//                     <label htmlFor="outsideDhaka" className="ml-2">
//                       ঢাকার বাইরে ৳ 150
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <hr className="w-full h-full border-dashed mt-3 border-1" />
//               <div className="w-full flex justify-between items-center mt-3">
//                 <p>Total</p>
//                 <p>
//                   ৳<span className="font-bold ml-1">{totalPrice}</span>
//                 </p>
//               </div>
//               <div className="w-full px-3 py-4 bg-slate-400/10 mt-4">
//                 পণ্য হাতে নিয়ে পেমেন্ট করুন
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-3 py-4 bg-[#FFD400] hover:bg-slate-600 hover:text-white rounded mt-4 flex flex-col gap-2 justify-center items-center"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-lock"
//                 >
//                   <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                 </svg>
//                 <p>
//                   অর্ডার করুন
//                   <span className="ml-1 font-bold">৳ {totalPrice}</span>
//                 </p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };
