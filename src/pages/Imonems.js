//Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const Imonems = () => {
  return (
  
      <Layout pageTitle="Imonems">
        <p>Vedu kvepalu gimimo dirbruves imonese.</p>
      </Layout>
    
  )
}

export const Head = () => <title>Imonems</title>

// Step 3: Export component
export default Imonems