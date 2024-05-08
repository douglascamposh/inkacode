const MenuBar = () => {

  const navItems = [
    { id: 1, text: 'Services.' },
    { id: 2, text: 'Us.' },
    { id: 3, text: 'Contact us.' },
  ];
  
  return (
    <div class="grid grid-cols-2 gap-4 place-content-between mt-5">
      <div>INKACODE</div>
      <div>
        <ul class="flex justify-end">
          {navItems.map(item => <li class="mx-10">{item.text}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
