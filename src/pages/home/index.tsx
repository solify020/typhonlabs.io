import React from "react";

import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Card,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recent-sales";

import Image from 'next/image';
import imgTyphonToken from '/public/images/typhon_token.png';
import imgCopy from '/public/images/copy.png';

const Home = () => {
  
  return (
    <div className="flex flex-col bg-[#161616] h-full overflow-auto mt-28">
      <div className="flex-1 space-y-4 p-8">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 ...">
              <div className="w-full flex items-align align-items">
                <Image src={imgTyphonToken} alt="mytoken" width={100} height={100} />
                <div className="">
                  <h2 className="text-3xl font-bold tracking-tight mb-3">Typhon</h2>
                  <hr />
                  <div className="flex p-2">
                    <span className="text-1xl">4MpXgiYj9nEvN1xZYZ4qgB6zq5r2JMRy54WaQu5fpump</span>&nbsp;<span><Image src={imgCopy} alt="copy" width={20} height={20} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">
              Jupiter
            </TabsTrigger>
            <TabsTrigger value="reports">
              Moby
            </TabsTrigger>
            <TabsTrigger value="notifications">
              Block
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium transition duration-300">
                    Price
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground transition duration-300"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition duration-300">$0.00307</div>
                  <p className="text-xs text-muted-foreground transition duration-300">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium transition duration-300">
                    MarketCap
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground transition duration-300"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition duration-300">$3.03M</div>
                  <p className="text-xs text-muted-foreground transition duration-300">
                    +183 from last hour
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium transition duration-300">Holders</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground transition duration-300"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition duration-300">$363.24K</div>
                  <p className="text-xs text-muted-foreground transition duration-300">
                    +2424 from last hour
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium transition duration-300">
                    Supply
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground transition duration-300"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition duration-300">999.99M</div>
                  <p className="text-xs text-muted-foreground transition duration-300">
                    +2392 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Trades</CardTitle>
                  <CardDescription>
                    There are 232+ transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics">
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
