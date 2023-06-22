const Link = ({ to, name, icon }) => {
  return (
    <a
      href={to}
      className="text-center mr-5 no-underline link-hovered"
      target="_blank"
    >
      <i className={`pi pi-fw ${icon} text-gray-500`} />
      <p className="m-0 text-gray-500">{name}</p>
    </a>
  );
};

export default Link;
