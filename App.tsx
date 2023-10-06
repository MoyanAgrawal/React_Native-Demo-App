//rnfe

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import Contactlist from './components/Contactlist'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <Contactlist/>
        <ActionCard/>
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default App