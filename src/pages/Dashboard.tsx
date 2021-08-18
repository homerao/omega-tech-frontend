import React from 'react';
import logoOmega from '../assets/logo-omega.svg'
import { Sidebar } from '../styles/DashboardStyle'

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <div id="">
        <aside className="">
          <Sidebar>
            <img src={logoOmega} alt="" width="240" />
          </Sidebar>
        </aside>
        <main id="conteudo">


        </main>
      </div>
    </div>
  )
}

export default Dashboard;