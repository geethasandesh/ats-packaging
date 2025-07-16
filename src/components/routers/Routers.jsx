import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AtsGlance from '../pages/About'
import ATS from '../pages/Ats'
import BespokePackaging from '../pages/BespokePackaging'
import BottleUnscramblers from '../pages/BottleUnscramblers'
import CappingMachines from '../pages/CappingMachines'
import Consultation from '../pages/Consultation'
import Contact from '../pages/Contact'
import Food from '../pages/Food'
import LifecycleManagement from '../pages/LifecycleManagement'
import News from '../pages/News'
import Partners from '../pages/Partners'
import Products from '../pages/Products'
import ProjectManagement from '../pages/ProjectManagement'
import ProjectPlanning from '../pages/ProjectPlanning'
import PumpTrigger from '../pages/PumpTrigger'
import Sectors from '../pages/Sectors'
import Team from '../pages/Team'
import Trunkey from '../pages/Trunkey'
import TrunkeyFillingLines from '../pages/TrunkeyFillingLines'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ats-at-glance" element={<AtsGlance />} />
      <Route path="/ats" element={<ATS />} />
      <Route path="/bespoke-packaging" element={<BespokePackaging />} />
      <Route path="/bottle-unscramblers" element={<BottleUnscramblers />} />
      <Route path="/capping-machines" element={<CappingMachines />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/food" element={<Food />} />
      <Route path="/lifecycle-management" element={<LifecycleManagement />} />
      <Route path="/news" element={<News />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/products" element={<Products />} />
      <Route path="/project-management" element={<ProjectManagement />} />
      <Route path="/project-planning" element={<ProjectPlanning />} />
      <Route path="/pump-trigger" element={<PumpTrigger />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/team" element={<Team />} />
      <Route path="/trunkey" element={<Trunkey />} />
      <Route path="/trunkey-filling-lines" element={<TrunkeyFillingLines />} />
    </Routes>
  )
}

export default Routers