'use client'

import Button from "@/components/Button";
import Card from "@/components/Card";
import DoughnutChart from "@/components/DoughnutChart";
import Tab from "@/components/Tab";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbCalendar } from "react-icons/tb";

export default function Home() {

  const [accentColor,setAccentColor]=useState('#FF9898')
  const [textColor,setTextColor]=useState('#571010')
  const [backgroundColor,setBackgroundColor]=useState('#FFEAEA')
  return (
    <main className="">
      {/* section-1  */}
      <section className=" px-16 py-10">
        <h1 className=" font-bold text-[24px] my-8">Welcome, John Mathew!!</h1>
        <div className=" flex items-center gap-5">
          <Card className=" w-[400px]">
                <h1 className=" font-[650] text-[14px]">Order Sync Successful!</h1>
                <p className=" font-[450] text-[13px] my-2">
                  Your order details from the last 30 days have been successfully synced. Check them out now!
                </p>
                <Button type="button" className=" bg-[#303030] text-white mt-8">Explore Your Orders</Button>
          </Card>

          <Card className=" w-[400px] border-[#FFF8D0] bg-[#FFF8DB]">
                <h1 className=" font-[650] text-[14px] text-[#5E4200] flex items-center gap-2">
                  <Image unoptimized width={15} height={15} alt="warning" src={'/Icon2.png'}/>
                  <span>
                    Customize Customer Notification
                  </span>
                </h1>
                <p className=" font-[450] text-[13px] text-[#5E4200] my-2">
                  Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
                </p>
                <Button type="button" className=" bg-[#303030] text-white mt-8">Configure Notifications</Button>
          </Card>

          <Card className=" w-[400px] border-[#d2e0f3] bg-[#EAF4FF]">
                <h1 className=" font-[650] text-[14px] text-[#4A4A4A] flex items-center gap-2">
                  <Image unoptimized width={15} height={15} alt="warning" src={'/Icon1.png'}/>
                  <span>
                    Your Tracking Link has been generated
                  </span>
                </h1>
                <p className=" text-[#4A4A4A] font-[450] text-[13px] my-2">
                  Include the <span role="button" className=" text-blue-500 underline">Link</span> to Your Store's Navigation <br /> Menu.
                </p>
                <div className="mt-9 flex justify-start gap-2 items-center">
                  <Button type="button" className="bg-white border">Copy Link</Button>
                  <Button type="button" className=" bg-[#303030] text-white ">Explore Your Orders</Button>
                </div>
          </Card>
        </div>
      </section>

      {/* section-2  */}
      <section className="px-16 py-12 bg-[#FFF7EE]">
        <h1 className=" font-bold text-[24px] ">Instant Dive into Your Performance Metrics</h1>
        <div className=" my-5 flex items-center gap-2">
          <Tab className=" border border-[#8051FF] bg-[#F8F7FF]">Lifetime</Tab>
          <Tab className="">Last Week</Tab>
          <Tab className="">Last Month</Tab>
          <Tab className="">Last Year</Tab>
          <Tab className=" flex justify-center items-center gap-2">
            <span>
              Customize Time Line
            </span>
            <TbCalendar/>
          </Tab>
        </div>

        <div className=" flex justify-start items-center gap-4">
          <Card className=" w-[460px] ">
            <ul>
              <li className=" mb-4 flex justify-between items-center">
                <h1 className=" font-[650] text-[14px]">Sipment Updates</h1>
                <h1 className="text-[14px]">Total Orders : 394</h1>
              </li>
              <li className="flex items-center gap-2 overflow-hidden">
                <Tab className=" bg-[#FFF1E3]">Delivered</Tab>
                <Tab className=" bg-gray-100">Out of delivery</Tab>
                <Tab className=" bg-gray-100">Intransit</Tab>
                <Tab className=" bg-gray-100">Pending</Tab>
                <Tab className=" bg-gray-100">
                  Exception
                </Tab>
              </li>
              <li className=" w-full mt-5 flex flex-col justify-center items-center">
                <div className=" w-40 h-40 ">
                  <DoughnutChart/>
                </div>
                <ul className=" mt-5 w-full grid grid-cols-3 justify-start gap-2">
                  <li className=" flex items-center gap-1 text-[14px] font-[450]">
                    <span className=" bg-[#5E4200] w-5 h-2 rounded-full"></span>
                    <p>Exception</p>
                  </li>
                  <li className=" flex items-center gap-1 text-[14px] font-[450]">
                    <span className=" bg-[#956F00] w-5 h-2 rounded-full"></span>
                    <p>Intransit</p>
                  </li>
                  <li className=" flex items-center gap-1 text-[14px] font-[450]">
                    <span className=" bg-[#E5A500] w-5 h-2 rounded-full"></span>
                    <p>Pending</p>
                  </li>
                  <li className=" flex items-center gap-1 text-[14px] font-[450]">
                    <span className=" bg-[#FFC879] w-5 h-2 rounded-full"></span>
                    <p>Delivered</p>
                  </li>
                  <li className=" flex items-center gap-1 text-[14px] font-[450]">
                    <span className=" bg-[#FFDDB6] w-5 h-2 rounded-full"></span>
                    <p>Out of delivery</p>
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
          <Card className=" relative w-[250px] bg-[#956F00]">
            <div className=" ">
              <h1 className="text-[#FFFFFF] text-[14px] font-[650] mb-1">
              Star Facts about your orders!!!
              </h1>
              <br />
              <p className="text-[#FFFFFF] text-[14px] font-[450]">
                There are 8 shipments that have been in out for delivery for more than 3 days.
                <br /> <br />
                There are 5 shipments in exception right now
                <br /> <br />
                The maximum chargebacks are from Miami.
              </p>
              <Button type="button" className=" bg-white mt-8 font-[550]">Check Orders Page</Button>
            </div>
            <span style={{filter:'blur(15px)'}} className=" w-[70px] h-[70px] rounded-full bg-[#FFEBD5] absolute bottom-28 -right-1">

            </span>
          </Card>
          <Card className=" w-[450px]">
            <h1 className="text-[14px] font-[650] mb-1">
              Star Facts about your orders!!!
            </h1>
            <p className="text-[14px] font-[450]">
              Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
            </p>
            <div className=" mt-4 flex justify-start gap-64 items-center bg-[#FFEBD5] px-4 py-4 rounded-md shadow-sm">
              <div className=" flex flex-col gap-3">
                <h3 className=" font-[550] text-[12] text-[#4A4A4A]">Orders</h3>
                <h1 className=" font-bold text-4xl text-[#4A4A4A]">80</h1>
              </div>
              <Image unoptimized alt="Projector" width={36} height={36} src={'/projector.png'}/>
            </div>
            <div className=" mt-4 flex justify-start gap-[148px] items-center bg-[#FFC879] px-4 py-4 rounded-md shadow-sm">
              <div className=" flex flex-col gap-3">
                <h3 className=" font-[550] text-[12] text-[#4A4A4A] text-nowrap">Tracking Page Views</h3>
                <h1 className=" font-bold text-4xl text-[#4A4A4A]">44</h1>
              </div>
              <Image unoptimized alt="Projector" width={36} height={36} src={'/eye.png'}/>
            </div>
          </Card>
        </div>
      </section>

      {/* secion-3 */}
      <section className=" px-16 py-14">
        <h1 className=" font-bold text-[24px] mb-5">Instant Dive into Your Performance Metrics</h1>
        <ul className=" flex justify-start items-center gap-5">
          <li>
            <Card className=" w-[350px]">
              <h1 className="text-[14px] font-[650] mb-1">
                Elevate Your Brand Aesthetics with Custom Tracking Page Styles
              </h1>
              <p className="text-[14px] font-[450]">
                Immerse your customers in a branded experience by personalizing the colors on your tracking page. 
              </p>

              <label className=" block text-[14px] font-[450] mt-2">
                Accent Color
              </label>
              <div className=" flex items-center gap-2">
                <input value={accentColor} onChange={(e)=>setAccentColor(e.target.value)} className="outline-none border border-gray-500 px-4 py-1 rounded-md" type="text" />
                <input onChange={(e)=>{
                  setAccentColor(e.target.value)
                  }} value={accentColor} type="color" className=" outline-none w-16 h-10 rounded-md shadow-sm " />
              </div>

              <label className=" block text-[14px] font-[450] mt-2">
                Text Color
              </label>
              <div className=" flex items-center gap-2">
                <input value={textColor} onChange={(e)=>setTextColor(e.target.value)} className="outline-none border border-gray-500 px-4 py-1 rounded-md" type="text" />
                <input value={textColor} onChange={(e)=>{
                  setTextColor(e.target.value)
                }} type="color" className=" outline-none w-16 h-10 rounded-md shadow-sm " />
              </div>

              <label className=" block text-[14px] font-[450] mt-2">
                Background Color
              </label>
              <div className=" flex items-center gap-2">
                <input value={backgroundColor} onChange={(e)=>setBackgroundColor(e.target.value)} className="outline-none border border-gray-500 px-4 py-1 rounded-md" type="text" />
                <input value={backgroundColor} onChange={(e)=>{
                  setBackgroundColor(e.target.value)
                }} type="color" className=" outline-none w-16 h-10 rounded-md shadow-sm " />
              </div>

              <div className=" flex items-center gap-2 mt-5">
                <Button type="button" className=" bg-white">Preview</Button>
                <Button type="button" className=" bg-[#303030] text-white">Apply Colors</Button>
              </div>
            </Card>
          </li>
          <li>
            <div className=" flex flex-col justify-center items-center gap-4">
                <Card className=" w-[400px]">
                    <h1 className=" font-[650] text-[14px]">Exclusive Onboarding Support for High-Volume Brands</h1>
                    <p className=" font-[450] text-[13px] my-2">
                    Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.
                    </p>
                    <Button type="button" className=" bg-[#303030] text-white mt-3">Schedule A Call</Button>
              </Card>
              <Card className=" w-[400px]">
                    <h1 className=" font-[650] text-[14px]">Explore Our Integrated Ecosystem</h1>
                    <p className=" font-[450] text-[13px] my-2">
                      Discover a variety of popular integrations tailored for your convenience. 
                    </p>
                    <ul className=" flex justify-start items-center gap-6 my-4">
                      <li>
                        <Link href={'#'}>
                          <Image unoptimized alt="paypal" width={34} height={34} src={'/Paypal.png'}/>
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <Image unoptimized alt="paypal" width={34} height={34} src={'/Ali reviews.png'}/>
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <Image unoptimized alt="paypal" width={34} height={34} src={'/Instagram feed.png'}/>
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <Image unoptimized alt="paypal" width={34} height={34} src={'/Google analytics.png'}/>
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <Image unoptimized alt="paypal" width={34} height={34} src={'/Shopify flow.png'}/>
                        </Link>
                      </li>
                    </ul>
                    <Button type="button" className=" bg-[#303030] text-white mt-2">Explore Integrations</Button>
              </Card>
            </div>
          </li>
          <li>
            <Card className=" w-[350px]">
              <h1 className="text-[14px] font-[650] mb-1">
                Seamlessly Integrate Custom HTML Elements
              </h1>
              <p className="text-[13px] font-[450]">
              Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
              </p>
              <div className=" my-5">
                <label className=" text-[13px] font-[450] ">
                HTML Link
                <textarea placeholder="Value" className=" w-full px-3 py-1 border border-gray-500 rounded-md shadow-sm resize-none outline-none" id="" rows={7}></textarea>
                </label>
              </div>

                <div className=" flex items-center gap-2 mt-5">
                  <Button type="button" className=" bg-white">Preview</Button>
                  <Button type="button" className=" bg-[#303030] text-white">Apply Changes</Button>
                </div>
            </Card>
          </li>
        </ul>
      </section>
    </main>
  );
}
