'use client';

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '@/app/components/header'

import DecreasePoolAmountQueries from '@/app/components/decreasePoolAmountQueries'
import IncreasePoolAmountQueries from '@/app/components/increasePoolAmountQueries'
import SwapQueries from '@/app/components/swapQueries'
import CollectMarginFees from '@/app/components/collectMarginFees'
import DecreaseReservedAmount from '@/app/components/decreaseGuaranteedUsdQueries'
import IncreaseReservedAmount from '@/app/components/increaseReservedAmountQueries'
import BuyUSDGQueries from '@/app/components/buyUSDGQueries'
import UpdatePnlQueries from '@/app/components/updatePnlQueries'
import DecreaseGuaranteedUsdQueries from '@/app/components/decreaseGuaranteedUsdQueries'
import IncreaseGuaranteedUsdQueries from '@/app/components/increaseReservedAmountQueries'

export default function Home() {
  const [queryFunctionResults, setQFR] = useState();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    queryFunction('0x112726233fbeaeed0f5b1dba5cb0b2b81883dee49fb35ff99fd98ed9f6d31eb0');
  }, []);

  useEffect(() => {
    console.log(queryFunctionResults); // Log the updated value of QFR when it changes
  }, [queryFunctionResults])

  const queryFunction = async (req: String) => {
    const res = ((await fetch(`/api/queryContract?topic=${req}`)).json());
    setQFR(await res); 
  }

  if (queryFunctionResults) {
    return (
      <div className="bg-white text-black min-h-screen">
        <Header/>
        <main className="container mx-auto px-4 py-8">
          <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
            <TabList className="tabs tabs-boxed">
              <Tab className="tab">DecreasePoolAmount() Queries</Tab>
              <Tab className="tab">IncreasePoolAmount() Queries</Tab>
              <Tab className="tab">Swap() Queries</Tab>
              <Tab className="tab">CollectMarginFees() Queries</Tab>
              <Tab className="tab">DecreaseReservedAmount() Queries</Tab>
              <Tab className="tab">IncreaseReservedAmount() Queries</Tab>
              <Tab className="tab">BuyUSDG() Queries</Tab>
              <Tab className="tab">UpdatePnl() Queries</Tab>
              <Tab className="tab">DecreaseGuaranteedUsd() Queries</Tab>
              <Tab className="tab">IncreaseGuaranteedUsd() Queries</Tab>
            </TabList>

            <TabPanel>
              <DecreasePoolAmountQueries/>
            </TabPanel>
            <TabPanel>
              <IncreasePoolAmountQueries/>
            </TabPanel>
            <TabPanel>
              <SwapQueries/>
            </TabPanel>
            <TabPanel>
              <CollectMarginFees/>
            </TabPanel>
            <TabPanel>
              <DecreaseReservedAmount/>
            </TabPanel>
            <TabPanel>
              <IncreaseReservedAmount/>
            </TabPanel>
            <TabPanel>
              <BuyUSDGQueries/>
            </TabPanel>
            <TabPanel>
              <UpdatePnlQueries/>
            </TabPanel>
            <TabPanel>
              <DecreaseGuaranteedUsdQueries/>
            </TabPanel>
            <TabPanel>
              <IncreaseGuaranteedUsdQueries/>
            </TabPanel>
          </Tabs>
        </main>
      </div>
    ) 
  } 
}
