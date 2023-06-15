'use client';

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '@/app/components/header'
import DecreasePoolAmountQueries from '@/app/components/decreasePoolAmountQueries'

export default function Home() {
  const [queryFunctionResults, setQFR] = useState();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
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
              <Tab className="tab">CollectSwapFees() Queries</Tab>
              <Tab className="tab">UpdateFundingRate() Queries</Tab>
              <Tab className="tab">IncreaseReservedAmount() Queries</Tab>
              <Tab className="tab">CollectMarginFees() Queries</Tab>
            </TabList>

            <TabPanel>
              <DecreasePoolAmountQueries/>
            </TabPanel>
            <TabPanel>
              <h2>Content for Tab 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Content for Tab 3</h2>
            </TabPanel>
          </Tabs>
        </main>
      </div>
    ) 
  } 
}
