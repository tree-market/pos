

const SideMenu = ({toggleMenu,setView}:any) => {
  return (
    <div className="max-w-[90vh] main-container-menu absolute z-50 flex min-h-screen flex-col overflow-hidden bg-gray-50">
      <div className="menu-header relative grid grid-flow-col h-[64px] px-4">
        <div className="justify-self-start grid grid-flow-col items-center gap-1">
          <div onClick={toggleMenu} className="menu-icon px-4 py-2 cursor-pointer justify-self-start text-xl font-semibold">
            <img src="https://tree.market/img/icons/menu-open-icon.png" class="w-[28px]" />
          </div>
          <div className="sitename justify-self-start">
            <div className="font-semibold text-xl">Tree.Market</div>
          </div>
        </div>
        <div className="connect-button grid justify-self-end items-center text-center">
          <div className="px-6 py-2 text-2xl">
            <img src="https://tree.market/img/icons/treemarket-icon.png" class="w-[30px]" />
          </div>
        </div>
      </div>

      <div className="clear-both h-8"></div>

      <div className="menu-items relative px-4 space-y-6">
        <MenuItem toggleMenu={toggleMenu} setView={setView} icon="&#8793;" name="Home" />
        <MenuItem icon="&#8793;" name="Tree Marketplace" />
        <MenuItem toggleMenu={toggleMenu} setView={setView} icon="&#8793;" name="Catalog" />
        <MenuItem icon="&#8793;" name="Wallet" />
        <MenuItem icon="&#8793;" name="Vault" />
        <MenuItem icon="&#8793;" name="Notifications" />
        <MenuItem icon="&#8793;" name="Profile" />
        <MenuItem icon="&#8793;" name="Settings" />
      </div>

      <div className="clear-both h-[100px]"></div>

     
    </div>
  );
};

const MenuItem = ({ icon, name,setView,toggleMenu }:any) => {
  return (
    <div onClick={()=>{setView(name.toLowerCase());toggleMenu()}} className="menu-item relative grid grid-flow-col items-center justify-start gap-6 px-4 text-lg cursor-pointer">
      <div className="menu-icon text-2xl"><img className="w-[24px]" src={icon}/></div>
      <p className="menu-name leading-6 font-semibold gap-2">{name}</p>
    </div>
  );
};

export default SideMenu;
